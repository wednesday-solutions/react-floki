/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

module.exports = {
  description: 'Add tests for an existing component',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'What is the component directory? (app)',
      default: 'app',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component you want to add tests for?',
      default: 'Button',
    },
  ],
  actions: () => {
    // index.test.js
    const actions = [
      {
        type: 'add',
        path: `../{{path}}/components/{{properCase name}}/tests/index.test.js`,
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'prettify',
        path: `components/`,
      },
    ];

    return actions;
  },
};
