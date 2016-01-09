'use strict';
// var _ = require('lodash');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GrammarRegistry, grammar, line, ref, registry, tags;

GrammarRegistry = require('first-mate').GrammarRegistry;

var encodeLang = function encodeLang(grammarFile, code) {
  var tokens;
  registry = new GrammarRegistry();

  grammar = registry.loadGrammarSync(grammarFile);

  ref = grammar.tokenizeLine(code);
  line = ref.line;
  tags = ref.tags;

  tokens = registry.decodeTokens(line, tags);
  return tokens;
};

module.exports = function (fileString, language) {
  if (language === 'text') {
    return fileString.split('\n').map(function (line) {
      return {
        scopes: ['source'],
        value: line + '\n'
      };
    });
  }
  return encodeLang(_path2.default.resolve(__dirname + '/../grammars/' + language + '.json'), fileString);
};