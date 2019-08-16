/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'What is the component directory? (app/components)',
      default: 'app',
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
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../{{path}}/{{properCase name}}/index.js',
        templateFile: '../component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../{{path}}/{{properCase name}}/tests/index.test.js',
        templateFile: '../component/test.js.hbs',
        abortOnFail: true,
      },
    ];

    // If the user wants i18n messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../{{path}}/{{properCase name}}/messages.js',
        templateFile: '../component/messages.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '{{path}}/',
    });

    return actions;
  },
};
