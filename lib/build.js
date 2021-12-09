const fs = require('fs');
const path = require('path');
const swc = require('@swc/core');

const fnsDirs = path.join(__dirname, '../src');

fs.rmSync(path.join(__dirname, '../build'), { recursive: true });

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
      const outputDir = path.join(__dirname, '../build');
      const outputFilename = filename.replace(/\.ts$/, '.js');
      const fnName = filename.split('/').slice(-2)[0];

      fs.mkdirSync(path.join(outputDir, fnName), { recursive: true });

      const outputPath = path.join(outputDir, outputFilename);
      const outputMapPath = outputPath.replace(/\.js$/, '.js.map');
      fs.writeFileSync(outputPath, code);
      fs.writeFileSync(outputMapPath, JSON.stringify(map));
    });
});
