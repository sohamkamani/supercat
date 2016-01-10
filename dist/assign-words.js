'use strict';

var _encodeLang = require('./encode-lang');

var _encodeLang2 = _interopRequireDefault(_encodeLang);

var _scopesToColor = require('./scopes-to-color');

var _scopesToColor2 = _interopRequireDefault(_scopesToColor);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (fileString, language, options) {
  var tokens = (0, _encodeLang2.default)(fileString, language);
  var colorString = '';
  tokens.forEach(function (token) {
    var color = (0, _scopesToColor2.default)(token.scopes);
    var colouredToken = token.value.split('\n').map(function (val) {
      return _chalk2.default[color](val);
    }).join(_chalk2.default[color]('\n'));
    colorString += colouredToken;
  });

  //Adding line numbers
  colorString = options.linenos ? colorString.split('\n').map(function (eachLine, n) {
    return _chalk2.default.bgWhite.black(' ' + (n + 1) + ' \t') + eachLine;
  }).join('\n') : colorString;

  return colorString;
};