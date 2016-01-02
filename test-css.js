'use strict';
var css = require('css');
var _ = require('lodash');
var fs = require('fs');
var cssStr = fs.readFileSync('./atom-dark-syntax/atom-dark-syntax.css','utf-8');
var obj = css.parse(cssStr);
var rules = obj.stylesheet.rules;
var selectorMappings = [];
rules.forEach(rule =>{
  var selectors = _.unique(rule.selectors.join('.').trim().split('.')).map(selector => selector.trim());
  var color = _.result(_.filter(rule.declarations, {property:'color'}), '[0].value', 'none');
  selectorMappings.push({
    color, selectors
  });
});

console.log('log:',selectorMappings);
