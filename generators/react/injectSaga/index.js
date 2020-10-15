/**
 * TestUtil Generator
 */

/* eslint strict: ["off"] */

'use strict';

const cwd = process.cwd();
module.exports = {
  description: 'Add support for injecting sagas',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'What is the utils directory? (app/utils)',
      default: 'app/utils',
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: `${cwd}/{{path}}/injectSaga.js`,
        templateFile: './injectSaga/injectSaga.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${cwd}/{{path}}/sagaInjectors.js`,
        templateFile: './injectSaga/sagaInjectors.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
  prettier: () => ({
    type: 'prettify',
    path: `{{path}}/`,
  }),
};
