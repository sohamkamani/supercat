'use strict';

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

var _scopesToColor = require('./scopes-to-color');

var _scopesToColor2 = _interopRequireDefault(_scopesToColor);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (fileString) {
  var tokens = (0, _test2.default)(fileString);
  var colorString = '';
  tokens.forEach(function (token) {
    var color = (0, _scopesToColor2.default)(token.scopes);
    colorString += _chalk2.default[color](token.value);
  });

  return colorString;
};