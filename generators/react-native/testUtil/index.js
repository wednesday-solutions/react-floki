/**
 * TestUtil Generator
 */

/* eslint strict: ["off"] */

'use strict';

const cwd = process.cwd();
module.exports = {
  description: 'Create a test util file',
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
        path: `${cwd}/{{path}}/testUtils.js`,
        templateFile: './testUtil/testUtils.js.hbs',
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
