'use strict';
import encodeLang from './encode-lang';
import scopesToColor from './scopes-to-color';
import chalk from 'chalk';

module.exports = function (fileString, language) {
  let tokens = encodeLang(fileString, language);
  let colorString = '';
  tokens.forEach(token => {
    const color = scopesToColor(token.scopes);
    let colouredToken = token.value.split('\n').map(val => chalk[color](val)).join(chalk[color]('\n'));
    // console.log('log:',token.value, colouredToken);
    colorString += colouredToken;
  });

  //Adding line numbers
  // console.log('log:',tokens);
  let colorStringLineNos = colorString.split('\n').map( (eachLine, n) => {
    return chalk.bgWhite.black(` ${n + 1} \t`) + eachLine;
  }).join('\n');

  return colorStringLineNos;
};
