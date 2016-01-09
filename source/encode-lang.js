'use strict';
// var _ = require('lodash');
import path from 'path';
var GrammarRegistry, grammar, line, ref, registry, tags;

GrammarRegistry = require('first-mate').GrammarRegistry;

var encodeLang = function (grammarFile, code) {
  var tokens;
  registry = new GrammarRegistry();

  grammar = registry.loadGrammarSync(grammarFile);

  ref = grammar.tokenizeLine(code);
  line = ref.line;
  tags = ref.tags;

  tokens = registry.decodeTokens(line, tags);
  return tokens;
};

module.exports = function(fileString, language){
  if(language === 'text'){
    return fileString.split('\n').map(line => {
      return {
        scopes : ['source'],
        value : line + '\n'
      };
    });
  }
  return encodeLang(path.resolve(__dirname + '/../grammars/' + language + '.json'), fileString);
};
