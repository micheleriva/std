const fs = require('fs');
const path = require('path');
const swc = require('@swc/core');

const buildDir = path.resolve(__dirname, '../build');
const fnsDirs = path.join(__dirname, '../src');

fs.rmSync(buildDir, { recursive: true });

const fns = fs
  .readdirSync(fnsDirs)
  .filter((f) => fs.lstatSync(path.join(fnsDirs, f)).isDirectory())
  .map((f) =>
    fs.readdirSync(path.join(fnsDirs, f)).map((dir) => path.join(fnsDirs, f, dir, 'index.ts')),
  )
  .reduce((acc, f) => acc.concat(f), [])
  .map((fn) => {
    const code = fs.readFileSync(fn, 'utf8');
    const filename = fn.split('/').slice(-2).join('/');

    return {
      code,
      filename,
    };
  });


// ESM EXPORT
fns.forEach(({ code, filename }) => {
  swc
    .transform(code, {
      filename,
      sourceMaps: true,
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target: 'es5',
        minify: {
          ecma: 5,
          module: true,
        },
      },
    })
    .then(({ code, map }) => {
      const outputFilename = filename.replace(/\.ts$/, '.js');
      const fnName = filename.split('/').slice(-2)[0];
      const esmBuildDir = path.join(buildDir, 'esm');

      fs.mkdirSync(path.join(esmBuildDir, fnName), { recursive: true });

      const outputPath = path.join(esmBuildDir, outputFilename);
      const outputMapPath = outputPath.replace(/\.js$/, '.js.map');
      fs.writeFileSync(outputPath, code);
      fs.writeFileSync(outputMapPath, JSON.stringify(map));
    });
});

// CJS EXPORT
fns.forEach(({ code, filename }) => {
  swc
    .transform(code, {
      filename,
      sourceMaps: true,
      module: {
        type: "commonjs",
      },
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target: 'es5',
        minify: {
          ecma: 5,
          module: true,
        },
      },
    })
    .then(({ code, map }) => {
      const outputFilename = filename.replace(/\.ts$/, '.js');
      const fnName = filename.split('/').slice(-2)[0];
      const esmBuildDir = path.join(buildDir, 'cjs');

      fs.mkdirSync(path.join(esmBuildDir, fnName), { recursive: true });

      const outputPath = path.join(esmBuildDir, outputFilename);
      const outputMapPath = outputPath.replace(/\.js$/, '.js.map');
      fs.writeFileSync(outputPath, code);
      fs.writeFileSync(outputMapPath, JSON.stringify(map));
    });
});
