'use strict';
import encodeLang from './test';
import scopesToColor from './scopes-to-color';
import ansiColor from './approximate-color';
import chalk from 'chalk';


module.exports = function (fileString) {
  let tokens = encodeLang(fileString);
  let mappedTokens = tokens.map(token => {
    token.color = scopesToColor(token.scopes);
    token.ansiColor = ansiColor(token.color);
    // delete token.scopes;
    return token;
  });

  let colorString = '';

  mappedTokens.forEach(token => {
    colorString += chalk[token.ansiColor](token.value);
  });

  return colorString;
};
