#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import assignWords from './assign-words';
import fileType from './get-file-type';

let filename = path.resolve(path.join('./',process.argv[2]));
var fileString = fs.readFileSync(filename, 'utf-8');
// console.log('log:',fileType(filename));
console.log(assignWords(fileString, fileType(filename)));
