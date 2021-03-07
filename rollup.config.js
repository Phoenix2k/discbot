import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    external: [
      'chalk',
      'consola',
      'discord.js',
      'dotenv',
      'i18next',
      'i18next-fs-backend',
      'path'
    ],
    input: ['src/index.ts'],
    output: [
      { dir: 'dist', format: 'esm', entryFileNames: '[name].mjs', sourcemap: true }
    ],
    plugins: [json(), typescript({ sourceMap: false })],
    preserveModules: true
  }
];
