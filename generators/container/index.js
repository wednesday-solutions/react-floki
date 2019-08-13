/**
 * Container Generator
 */

module.exports = {
  description: 'Add test for an existing container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Which container do you want to add tests for?',
      default: 'Form',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want add tests for actions, selectors & reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want to add tests for sagas?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../app/containers/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../app/containers/{{properCase name}}/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../app/containers/{{properCase name}}/tests/selectors.test.js',
        templateFile: './container/selectors.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../app/containers/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../app/containers/{{properCase name}}/tests/saga.test.js',
        templateFile: './container/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/containers/',
    });

    return actions;
  },
};
