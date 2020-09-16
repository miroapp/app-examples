import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'iife',
  },
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    resolve(),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    isProduction && terser(),
  ],
}
