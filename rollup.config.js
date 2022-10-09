import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      name: 'index'
    },
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      name: 'index'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'index'
    },
    {
      file: 'dist/index.amd.js',
      format: 'amd',
      name: 'index'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      name: 'index'
    }
  ],
  plugins: [
    uglify()
  ]
}