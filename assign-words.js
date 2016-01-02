'use strict';
import tokens from './test';
import scopesToColor from './scopes-to-color';
import ansiColor from './approximate-color';
import chalk from 'chalk';
// { value: '"',
//    scopes:
//     [ 'source.python',
//       'string.quoted.double.single-line.python',
//       'punctuation.definition.string.end.python' ] }

let mappedTokens = tokens.map(token =>{
  token.color = scopesToColor(token.scopes);
  token.ansiColor = ansiColor(token.color);
  // delete token.scopes;
  return token;
});

let colorString = '';

mappedTokens.forEach(token =>{
  colorString += chalk[token.ansiColor](token.value);
});

console.log('log:',mappedTokens);
console.log(colorString);
