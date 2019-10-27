/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const cwd = process.cwd();

const storyPrompt = {
  type: 'confirm',
  name: 'wantStories',
  default: true,
  message: 'Do you want stories for your component?',
};
const pathPrompt = {
  type: 'input',
  name: 'path',
  message: 'What is the component directory? (app/components)',
  default: 'app/components',
};

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component you want to add tests for?',
    default: 'Button',
  },
];
prompts.push(storyPrompt);
prompts.push(pathPrompt);

module.exports = {
  description: 'Add tests for an existing component',
  storyPrompt,
  pathPrompt,
  prompts,
  actions: data => {
    // index.test.js
    const actions = [
      {
        type: 'add',
        path: `${cwd}/{{path}}/{{properCase name}}/tests/index.test.js`,
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantStories) {
      actions.push({
        type: 'add',
        path: `${cwd}/{{path}}/{{properCase name}}/stories/{{properCase name}}.stories.js`,
        templateFile: './component/stories.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
  prettier: () => ({
    type: 'prettify',
    path: `{{path}}/`,
  }),
};
