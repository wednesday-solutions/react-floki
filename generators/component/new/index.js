/**
 * Component Generator
 */

/* eslint strict: ["off"] */

('use strict');

const existing = require('../existing');
const cwd = process.cwd();
module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'What is the component directory? (app/components)',
      default: 'app/components',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: `${cwd}/{{path}}/{{properCase name}}/index.js`,
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push(...existing.actions(data));
    actions.push(existing.prettier());

    return actions;
  },
};
