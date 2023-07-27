const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const { eslint } = require('rollup-plugin-eslint');
const { uglify } = require('rollup-plugin-uglify');

export default {
  input: 'index.js',
  output: {
    name: 'optionValidator',
    file: 'dist/option-validator.js',
    format: 'umd'
  },
  plugins: [
    eslint({
      exclude: [
        'node_modules/**',
        'docs/**'
      ]
    }),
    nodeResolve(),
    commonjs(),
    babel(),
    uglify()
  ]
};
