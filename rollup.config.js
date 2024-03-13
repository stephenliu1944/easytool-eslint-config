import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import eslint from '@rollup/plugin-eslint';
import del from 'rollup-plugin-delete';
import merge from 'lodash/mergeWith';
import { parcel } from './package.json';

const BUILD_PATH = '.';
const {
  exports,
  externals
} = parcel;

function rollupMerge(base, source) {
  let config = merge({}, base, source, (obj, src, key) => {
    // 合并数组
    if (Array.isArray(obj) || Array.isArray(src)) {
      return [].concat(obj, src).filter(Boolean);
    }
  });

  return config;
}

function base() {
  return {
    external: externals,
    plugins: [
      del({
      	targets: [
          'index.js', 
          'dev.js', 
          'es.js', 
          'es-dev.js',
          'typescript.js', 
          'typescript-dev.js',
          'react.js', 
          'react-dev.js',
          'vue.js', 
          'vue-dev.js',
          'common'
        ]
      }),
      eslint({
        fix: true,
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**/*.js'],
        configFile: '.eslintrc.prod.js'
      }),
      commonjs(),
      copy({
        targets: [
          { src: 'src/*', dest: '.' }
        ],
        verbose: true
      })
    ]
  };
}

const parcels = [{
  input: 'src/index.js',
  output: {
    file: 'index.js',
    exports: 'auto',
    format: 'cjs'
  }
}];

export default parcels.map(parcel => rollupMerge(base(), parcel));