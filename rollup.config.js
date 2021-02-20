import typescript from 'rollup-plugin-typescript2';

export default [
  {
    external: ['consola'],
    input: ['src/index.ts'],
    output: [{ dir: 'dist', format: 'esm', entryFileNames: '[name].mjs', sourcemap: true }],
    plugins: [typescript({ sourceMap: false })],
    preserveModules: true
  }
];
