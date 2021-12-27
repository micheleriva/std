import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';

const __dirname = path.resolve(); // <- please note that this refers to the root of the project
const buildDir = path.join(__dirname, 'build');
const srcFolder = path.join(__dirname, 'src');
const bundleEntry = path.join(srcFolder, 'index.ts');

export function makeBundle(type) {
    return esbuild.build({
        entryPoints: [bundleEntry],
        bundle: true,
        outdir: path.join(buildDir, type),
        platform: 'node',
        minify: false,
        format: type,
        target: 'es2015',
        sourcemap: true,
    });
}

Promise.all([makeBundle('esm'), makeBundle('cjs'), makeBundle('iife')])
  .then(() => {
    console.log('Bundles created');
  }).catch(err => {
    console.error(err);
  });
