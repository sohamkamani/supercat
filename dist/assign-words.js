'use strict';

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

var _scopesToColor = require('./scopes-to-color');

var _scopesToColor2 = _interopRequireDefault(_scopesToColor);

var _approximateColor = require('./approximate-color');

var _approximateColor2 = _interopRequireDefault(_approximateColor);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (fileString) {
  var tokens = (0, _test2.default)(fileString);
  var mappedTokens = tokens.map(function (token) {
    token.color = (0, _scopesToColor2.default)(token.scopes);
    token.ansiColor = (0, _approximateColor2.default)(token.color);
    // delete token.scopes;
    return token;
  });
  var colorString = '';
  mappedTokens.forEach(function (token) {
    colorString += _chalk2.default[token.ansiColor](token.value);
  });

  return colorString;
};