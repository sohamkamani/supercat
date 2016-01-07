'use strict';
import encodeLang from './encode-lang';
import scopesToColor from './scopes-to-color';
import chalk from 'chalk';

module.exports = function (fileString, language) {
  let tokens = encodeLang(fileString, language);
  let colorString = '';
  tokens.forEach(token => {
    var color = scopesToColor(token.scopes);
    colorString += chalk[color](token.value);
  });

  return colorString;
};
