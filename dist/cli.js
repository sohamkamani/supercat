#!/usr/bin/env node

'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _assignWords = require('./assign-words');

var _assignWords2 = _interopRequireDefault(_assignWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filename = _path2.default.resolve(_path2.default.join('./', process.argv[2]));
var fileString = _fs2.default.readFileSync(filename, 'utf-8');
console.log((0, _assignWords2.default)(fileString));
