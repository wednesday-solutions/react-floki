#! /usr/bin/env node
const shell = require('shelljs');
const childProcess = require('child_process');
const _ = require('lodash');

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
    childProcess.execFileSync(
      'yarn',
      ['plop', '--plopfile', 'generators/existing/index.js'],
      { stdio: 'inherit' },
    );
    break;
  case 'gtcom':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '--plopfile',
        'generators/existing/index.js',
        'component',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gtcon':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '--plopfile',
        'generators/existing/index.js',
        'container',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gtf':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '-f',
        '--plopfile',
        'generators/existing/index.js',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gtcomf':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '-f',
        '--plopfile',
        'generators/existing/index.js',
        'component',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gtconf':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '-f',
        '--plopfile',
        'generators/existing/index.js',
        'container',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'g':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '--plopfile',
        'generators/new/index.js',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gcom':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '--plopfile',
        'generators/new/index.js',
        'component',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gcon':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '--plopfile',
        'generators/new/index.js',
        'container',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gf':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '-f',
        '--plopfile',
        'generators/new/index.js',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gcomf':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '-f',
        '--plopfile',
        'generators/new/index.js',
        'component',
        ..._.drop(commandLineArgs),
      ],
      { stdio: 'inherit' },
    );
    break;
  case 'gconf':
    childProcess.execFileSync(
      'yarn',
      [
        'plop',
        '-f',
        '--plopfile',
        'generators/new/index.js',
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
        `gconf: Forcefully creating a container\n\n` +
        `-------\n\n` +
        `Creating a test by specifying type, path and name: react-generate gt component src/app Button\n` +
        `Creating a test for an existing component by specifying path and name: react-generate gtcon src/app Button\n` +
        `Creating a test for an existing container by specifying path and name: react-generate gtcom src/app HomePage\n` +
        `Creating a component/container by specifying type, path and name: react-generate g component src/app Button\n` +
        `Creating a component by specifying path and name: react-generate gcon src/app Button\n` +
        `Creating a container by specifying path and name: react-generate gcom src/app HomePage\n`,
    );
    break;
  default:
    shell.exec(`echo Sorry ${commandLineArgs[0]} is not a valid command`);
    break;
}
