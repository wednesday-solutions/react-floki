#! /usr/bin/env node
const shell = require('shelljs');
const childProcess = require('child_process');
const process = require('process');
const _ = require('lodash');
const path = require('path');
const plop = path.join(__dirname, '../node_modules/plop/src/plop.js');
const existingGenerator = path.join(
  __dirname,
  '../generators/existing/index.js',
);
const newGenerator = path.join(__dirname, '../generators/new/index.js');
const [, , ...args] = process.argv;
const commandLineArgs = args.toString().split(',');
if (!commandLineArgs[0]) {
  shell.exec(
    `echo Sorry! react-generate requires an argument to be passed. Run react-generate --help for more details`,
  );
  return;
}
switch (commandLineArgs[0]) {
  case 'gt':
    childProcess.execFileSync(plop, ['--plopfile', existingGenerator], {
      stdio: 'inherit',
    });
    break;
  case 'gtcom':
    childProcess.execFileSync(
      plop,
      [
        '--plopfile',
        existingGenerator,
        'component',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gtcon':
    childProcess.execFileSync(
      plop,
      [
        '--plopfile',
        existingGenerator,
        'container',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gtf':
    childProcess.execFileSync(
      plop,
      ['-f', '--plopfile', existingGenerator, ..._.drop(commandLineArgs)],
      { stdio: 'inherit' },
    );
    break;
  case 'gtcomf':
    childProcess.execFileSync(
      plop,
      [
        '-f',
        '--plopfile',
        existingGenerator,
        'component',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gtconf':
    childProcess.execFileSync(
      plop,
      [
        '-f',
        '--plopfile',
        existingGenerator,
        'container',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'g':
    childProcess.execFileSync(
      plop,
      ['--plopfile', newGenerator, ..._.drop(commandLineArgs)],
      { stdio: 'inherit' },
    );
    break;
  case 'gcom':
    childProcess.execFileSync(
      plop,
      ['--plopfile', newGenerator, 'component', ..._.drop(commandLineArgs)],
      { stdio: 'inherit' },
    );
    break;
  case 'gcon':
    childProcess.execFileSync(
      plop,
      ['--plopfile', newGenerator, 'container', ..._.drop(commandLineArgs)],
      { stdio: 'inherit' },
    );
    break;
  case 'gf':
    childProcess.execFileSync(
      plop,
      ['-f', '--plopfile', newGenerator, ..._.drop(commandLineArgs)],
      { stdio: 'inherit' },
    );
    break;
  case 'gcomf':
    childProcess.execFileSync(
      plop,
      [
        '-f',
        '--plopfile',
        newGenerator,
        'component',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gconf':
    childProcess.execFileSync(
      plop,
      [
        '-f',
        '--plopfile',
        newGenerator,
        'container',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case '--help':
    shell.echo(
      `Generate tests for existing and new react components\n\n` +
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
        `--all: Adding tests for all existing containers or components.\n\n` +
        `-------\n\n` +
        `Creating a test by specifying type, path and name: react-generate gt component src/app Button\n` +
        `Creating a test for an existing component by specifying path and name: react-generate gtcon src/app Button\n` +
        `Creating a test for an existing container by specifying path and name: react-generate gtcom src/app HomePage\n` +
        `Creating a component/container by specifying type, path and name: react-generate g component src/app Button\n` +
        `Creating a component by specifying path and name: react-generate gcon src/app Button\n` +
        `Creating a container by specifying path and name: react-generate gcom src/app HomePage\n` +
        `Generate test for all components in directory: react-generate-all component src/app/components\n` +
        `Generate test for all containers in directory: react-generate-all containers src/app/containers`,
    );
    break;
  case '--all':
    shell.exec(`react-generate-all ${_.drop(commandLineArgs).join(' ')}`);
    break;
  default:
    shell.exec(`echo Sorry ${commandLineArgs[0]} is not a valid command`);
    break;
}
