#! /usr/bin/env node
const shell = require('shelljs');
const _ = require('lodash');

const [, , ...args] = process.argv;
const commandLineArgs = args.toString().split(',');
if (!commandLineArgs[0] || !commandLineArgs[1] || commandLineArgs[2]) {
  shell.exec(
    `echo Sorry! react-generate-all requires 2 commandLineArgs to be passed. Run react-generate --help for more details`,
  );
  return;
}
let cwd;
let directories;
switch (commandLineArgs[0]) {
  case 'component':
    cwd = shell.exec('pwd').stdout;
    shell.cd(`./${commandLineArgs[1]}`);
    directories = shell.ls();
    shell.cd(cwd);
    directories.forEach(component => {
      if (!_.includes(component, '.')) {
        shell.exec(
          `react-generate gtcom ${_.drop(commandLineArgs)} ${component}`,
        );
      }
    });
    break;
  case 'container':
    cwd = shell.exec('pwd').stdout;
    shell.cd(`./${commandLineArgs[1]}`);
    directories = shell.ls();
    shell.cd(cwd);
    directories.forEach(component => {
      if (!_.includes(component, '.')) {
        shell.exec(
          `react-generate gtcon ${_.drop(commandLineArgs)} ${component}`,
        );
      }
    });
    break;
  case '--help':
    shell.echo(
      `Generate test for all components in directory: react-generate-all component src/app/components\n` +
        `Generate test for all containers in directory: react-generate-all containers src/app/containers`,
    );
    break;
  default:
    shell.exec(`echo ${commandLineArgs[0]} is not a valid argument`);
}
