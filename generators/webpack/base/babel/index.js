/**
 * TestUtil Generator
 */

/* eslint strict: ["off"] */

'use strict';

const cwd = process.cwd();
module.exports = {
  prompts: [],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: `${cwd}/internals/webpack/webpack.base.babel.js`,
        templateFile: './webpack/base/babel/babel.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
  prettier: () => ({
    type: 'prettify',
    path: `${cwd}/`,
  }),
};
