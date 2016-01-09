'use strict';

var _encodeLang = require('./encode-lang');

var _encodeLang2 = _interopRequireDefault(_encodeLang);

var _scopesToColor = require('./scopes-to-color');

var _scopesToColor2 = _interopRequireDefault(_scopesToColor);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (fileString, language) {
  var tokens = (0, _encodeLang2.default)(fileString, language);
  var colorString = '';
  tokens.forEach(function (token) {
    var color = (0, _scopesToColor2.default)(token.scopes);
    var colouredToken = token.value.split('\n').map(function (val) {
      return _chalk2.default[color](val);
    }).join(_chalk2.default[color]('\n'));
    console.log('log:', token.value, colouredToken);
    colorString += colouredToken;
  });

  //Adding line numbers
  // console.log('log:',tokens);
  var colorStringLineNos = colorString.split('\n').map(function (eachLine, n) {
    return _chalk2.default.bgWhite.black(' ' + (n + 1) + ' \t') + eachLine;
  }).join('\n');

  return colorStringLineNos;
};