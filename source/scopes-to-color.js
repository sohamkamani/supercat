import cssRules from './css-rules.json';
import _ from 'lodash';

module.exports = function(scopes){
  let maxSimilarity = -1;
  let color = 'none';
  const selectors = scopes.join('.').trim().split('.');
  cssRules.forEach(rule => {
    let similarity = _.intersection(selectors, rule.selectors).length;
    if(similarity > maxSimilarity ){
      maxSimilarity = similarity;
      color = rule.color;
    }
  });
  return color;

};
