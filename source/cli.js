#!/usr/bin/env node

import fs from 'fs';
import program from 'commander';
import path from 'path';
import prettyBytes from 'pretty-bytes';
import assignWords from './assign-words';
import getFileType from './get-file-type';
import packageJson from '../package.json';
import chalk from 'chalk';

program
  .version(packageJson.version)
  .usage('[options] <filename>')
  .option('-l, --linenos', 'Show line numbers')
  .option('-p, --plain', 'Remove code formatting')
  .option('-i, --info', 'Show file info')
  .parse(process.argv);

let filename = path.resolve(program.args[0]);
let fileString = fs.readFileSync(filename, 'utf-8');
let fileType = getFileType(filename);
let formatType = program.plain ? 'text' : fileType;
// console.log('log:',fileType(filename));
console.log(assignWords(fileString, formatType, {
  linenos: program.linenos
}));

if (program.info) {
  let {
    size
  } = fs.statSync(filename);
  console.log(chalk.bgWhite.black(`\ntype : ${fileType}    size : ${prettyBytes(size)}`));
}
