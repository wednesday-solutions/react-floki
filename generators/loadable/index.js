/**
 * Loadable Generator
 */

/* eslint strict: ["off"] */

'use strict';

const cwd = process.cwd();
module.exports = {
  description: 'Create a loadable util file ',
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
        path: `${cwd}/{{path}}/loadable.js`,
        templateFile: './loadable/loadable.js.hbs',
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
