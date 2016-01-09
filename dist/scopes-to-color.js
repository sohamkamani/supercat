'use strict';

var _cssRules = require('./css-rules.json');

var _cssRules2 = _interopRequireDefault(_cssRules);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (scopes) {
  var maxSimilarity = -1;
  var color = 'none';
  var selectors = scopes.join('.').trim().split('.');
  _cssRules2.default.forEach(function (rule) {
    var similarity = _lodash2.default.intersection(selectors, rule.selectors).length;
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      color = rule.color;
    }
  });
  return color;
};