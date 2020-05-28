const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    amd: true,
  },

  extends: ['prettier', 'prettier-standard'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'import/no-webpack-loader-syntax': 0,
    curly: ['error', 'all'],
    'no-console': ['error', { allow: ['error'] }],
  },
  globals: {
    GLOBAL: false,
    it: false,
    expect: false,
    describe: false,
  },
};
