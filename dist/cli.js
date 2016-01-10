#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _prettyBytes = require('pretty-bytes');

var _prettyBytes2 = _interopRequireDefault(_prettyBytes);

var _assignWords = require('./assign-words');

var _assignWords2 = _interopRequireDefault(_assignWords);

var _getFileType = require('./get-file-type');

var _getFileType2 = _interopRequireDefault(_getFileType);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).option('-l, --linenos', 'Show line numbers').option('-p, --plain', 'Remove code formatting').option('-i, --info', 'Show file info').parse(process.argv);

var filename = _path2.default.resolve(_commander2.default.args[0]);
var fileString = _fs2.default.readFileSync(filename, 'utf-8');
var fileType = (0, _getFileType2.default)(filename);
var formatType = _commander2.default.plain ? 'text' : fileType;
// console.log('log:',fileType(filename));
console.log((0, _assignWords2.default)(fileString, formatType, {
  linenos: _commander2.default.linenos
}));

if (_commander2.default.info) {
  var _fs$statSync = _fs2.default.statSync(filename);

  var size = _fs$statSync.size;

  console.log(_chalk2.default.bgWhite.black('\ntype : ' + fileType + '    size : ' + (0, _prettyBytes2.default)(size)));
}