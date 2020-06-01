#! /usr/bin/env node
const shell = require('shelljs');
const fs = require('fs');
const childProcess = require('child_process');
const process = require('process');
const _ = require('lodash');
const path = require('path');

const COMPONENT = 'component';
const CONTAINER = 'container';
const WEBPACK_BASE_BABEL = 'webpackBaseBabel';
const TEST_UTIL = 'tUtil';
const LOADABLE = 'loadable';
const INJECT_SAGA = 'injectSaga';

const generator = path.join(__dirname, '../generators/index.js');
const plopGen = ['--plopfile', generator];

const [, , ...args] = process.argv;
let commandLineArgs = args.toString().split(',');
const stdioInherit = { stdio: 'inherit' };

function execShell(commandArray) {
  childProcess.execFileSync(
    path.join(__dirname, '../node_modules/.bin/plop'),
    commandArray,
    { ...stdioInherit },
  );
}

// validate input
if (!commandLineArgs[0]) {
  shell.exec(
    `echo Sorry! react-generate requires an argument to be passed. Run react-generate --help for more details`,
  );
  return;
}

// get the type of generator
shell.env.GENERATOR_TYPE = _.includes(commandLineArgs[0], 't')
  ? 'existing'
  : 'new';
let directoryName = 'react-template';
switch (commandLineArgs[0]) {
  case 'init':
    shell.exec(
      `git clone https://github.com/wednesday-solutions/react-template`,
    );
    shell.cd(process.cwd());
    if (commandLineArgs[1]) {
      shell.exec(`mkdir ${commandLineArgs[1]}`);
      fs.rename(`react-template`, commandLineArgs[1], err => {
        if (err) {
          throw new Error('Error while renaming');
        }
      });
      directoryName = commandLineArgs[1];
      const json = path.join(__dirname, '../node_modules/.bin/json');

      shell.exec(
        `${json} -I -f ${directoryName}/package.json -e "this.name='${directoryName}'"`,
      );
      shell.exec(
        `${json} -I -f ${directoryName}/package.json -e "this.homepage='""'"`,
      );
      shell.exec(
        `${json} -I -f ${directoryName}/package.json -e "this.author='""'"`,
      );
      shell.exec(
        `${json} -I -f ${directoryName}/package.json -e "this.repository='{}'"`,
      );

      commandLineArgs = _.drop(commandLineArgs);
    }
    shell.cd(directoryName);
    shell.exec(`git remote remove origin`);
    execShell([
      '-f',
      ...plopGen,
      WEBPACK_BASE_BABEL,
      ..._.drop(commandLineArgs),
    ]);
    shell.exec(`npm run initialize`);
    break;
  case 'gt':
    execShell(plopGen);
    break;
  case 'gtcom':
    execShell([...plopGen, COMPONENT, ..._.drop(commandLineArgs)]);
    break;
  case 'gtcon':
    execShell([...plopGen, CONTAINER, ..._.drop(commandLineArgs)]);
    break;
  case 'gtf':
    execShell(['-f', ...plopGen, ..._.drop(commandLineArgs)]);
    break;
  case 'gtcomf':
    execShell(['-f', ...plopGen, COMPONENT, ..._.drop(commandLineArgs)]);
    break;
  case 'gtconf':
    execShell(['-f', ...plopGen, CONTAINER, ..._.drop(commandLineArgs)]);
    break;
  case 'g':
    execShell([...plopGen, ..._.drop(commandLineArgs)]);
    break;
  case 'gcom':
    execShell([...plopGen, COMPONENT, ..._.drop(commandLineArgs)]);
    break;
  case 'gcon':
    execShell([...plopGen, CONTAINER, ..._.drop(commandLineArgs)]);
    break;
  case 'gf':
    execShell(['-f', ...plopGen, ..._.drop(commandLineArgs)]);
    break;
  case 'gcomf':
    execShell(['-f', ...plopGen, COMPONENT, ..._.drop(commandLineArgs)]);
    break;
  case 'gconf':
    execShell(['-f', ...plopGen, CONTAINER, ..._.drop(commandLineArgs)]);
    break;
  case 'gtutil':
    execShell(['-f', ...plopGen, TEST_UTIL, ..._.drop(commandLineArgs)]);
    break;
  case 'gloadable':
    execShell(['-f', ...plopGen, LOADABLE, ..._.drop(commandLineArgs)]);
    break;
  case 'ginjectsaga':
    execShell(['-f', ...plopGen, INJECT_SAGA, ..._.drop(commandLineArgs)]);
    break;
  case '--help':
    shell.echo(
      `Generate tests for existing and new react components\n\n` +
        `init: Create a new react application\n` +
        `gt: Creating a test for a container or component\n` +
        `gtf: Forcefully creating a test for a container or component\n` +
        `gtcom: Creating a test for an existing component\n` +
        `gtcomf: Forcefully creating a test for an existing component\n` +
        `gtcon: Creating a test for an existing container\n` +
        `gtconf : Forcefully creating a test for an existing component\n` +
        `g: Creating a container or component\n` +
        `gf: Forcefully creating a container or component\n` +
        `gcom: Creating a component\n` +
        `gcomf: Forcefully creating a component\n` +
        `gcon: Creating a container\n` +
        `gconf: Forcefully creating a container\n` +
        `--all: Adding tests for all existing containers or components.\n` +
        `gtutil: Create a test util file with some test utility functions.\n` +
        `gloadable: Create a loadable utility file that uses lazy and Suspense from React to lazyload your containers.\n` +
        `ginjectsaga: Create an injector for sagas that work with hooks.\n\n` +
        `-------\n\n` +
        `Creating a test by specifying type, path and name: react-generate gt component src/app Button\n` +
        `Creating a test for an existing component by specifying path and name: react-generate gtcon src/app Button\n` +
        `Creating a test for an existing container by specifying path and name: react-generate gtcom src/app HomePage\n` +
        `Creating a component/container by specifying type, path and name: react-generate g component src/app Button\n` +
        `Creating a component by specifying path and name: react-generate gcon src/app Button\n` +
        `Creating a container by specifying path and name: react-generate gcom src/app HomePage\n` +
        `Generate test for all components in directory: react-generate --all component src/app/components\n` +
        `Generate test for all containers in directory: react-generate --all containers src/app/containers`,
    );
    break;
  case '--all':
    {
      commandLineArgs = _.drop(commandLineArgs);
      if (!commandLineArgs[0] || !commandLineArgs[1] || commandLineArgs[2]) {
        shell.exec(
          `echo Sorry! react-generate --all requires 2 commandLineArgs to be passed. Run react-generate --help for more details`,
        );
        return;
      }
      let cwd;
      let directories;
      switch (commandLineArgs[0]) {
        case COMPONENT:
          cwd = shell.exec('pwd').stdout;
          shell.cd(`./${commandLineArgs[1]}`);
          directories = shell.ls();
          shell.cd(cwd);
          directories.forEach(component => {
            if (!_.includes(component, '.')) {
              shell.exec(
                `react-generate gtcomf ${_.drop(commandLineArgs)} ${component}`,
              );
            }
          });
          break;
        case CONTAINER:
          cwd = shell.exec('pwd').stdout;
          shell.cd(`./${commandLineArgs[1]}`);
          directories = shell.ls();
          shell.cd(cwd);
          directories.forEach(component => {
            if (!_.includes(component, '.')) {
              shell.echo(`Component name: ${component}`);
              childProcess.execSync(
                `react-generate gtconf ${_.drop(commandLineArgs)} ${component}`,
                {
                  ...stdioInherit,
                },
              );
            }
          });
          break;
        default:
          shell.exec(`echo ${commandLineArgs[0]} is not a valid argument`);
      }
    }
    break;
  default:
    shell.exec(`echo Sorry ${commandLineArgs[0]} is not a valid command`);
    break;
}
