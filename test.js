'use strict';
var _ = require('lodash');
var GrammarRegistry, grammar, line, ref, registry, tags, tokens;

var wordSet = [];
var getWords = function (tokens) {
  var words = _.chain(tokens).pluck('scopes').flatten().unique();
  console.log('log:',words.value());

  words = words.map(function (str) {
      return str.split('.');
    })
    .flatten()
    .unique()
    .value();
  wordSet.push(_.clone(words));
};
GrammarRegistry = require('first-mate').GrammarRegistry;

var encodeLang = function (grammarFile, code) {
  registry = new GrammarRegistry();

  grammar = registry.loadGrammarSync(grammarFile);

  ref = grammar.tokenizeLine(code);
  line = ref.line;
  tags = ref.tags;

  tokens = registry.decodeTokens(line, tags);
  getWords(tokens);
};

encodeLang('./python.cson', 'offset = 3\ndef fn(a,v,c):\n  a=6 + "hyhy"');
encodeLang('./js.cson', 'var t = "9"; var f = function(a, b, c){ typeof 9 }');
encodeLang('./ruby.cson', 'namespace d do \n t = kl.new \n end \ndef say_hello(name)\n   var = "Hello," + name\nreturn var\nend');


console.log('log:', _.intersection(wordSet[0], wordSet[1]));
