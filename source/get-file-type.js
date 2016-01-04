'use strict';
import _ from 'lodash';

module.exports = filename => {
  const exts = require('../exts.json');
  let ext = filename.split('.');
  ext = ext[ext.length - 1];
  console.log('extt', ext);
  let filtered = exts.filter(info =>{
    return _.contains(info.exts, ext);
  });
  return filtered[0].name;
};
