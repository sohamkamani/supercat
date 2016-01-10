'use strict';
import encodeLang from './encode-lang';
import scopesToColor from './scopes-to-color';
import chalk from 'chalk';

module.exports = function (fileString, language = 'text', options = {}) {
  let tokens = encodeLang(fileString, language);
  let colorString = '';
  tokens.forEach(token => {
    const color = scopesToColor(token.scopes);
    let colouredToken = token.value.split('\n').map(val => chalk[color](val)).join(chalk[color]('\n'));
    colorString += colouredToken;
  });

  //Adding line numbers
  colorString = options.linenos ? colorString.split('\n').map( (eachLine, n) => {
    return chalk.bgWhite.black(` ${n + 1} \t`) + eachLine;
  }).join('\n') : colorString;

  return colorString;
};
