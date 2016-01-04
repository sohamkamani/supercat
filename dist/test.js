'use strict';
// var _ = require('lodash');

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

module.exports = function (fileString) {
  return encodeLang('./js.cson', fileString);
};

// console.log('log:', _.intersection(wordSet[0], wordSet[1]));