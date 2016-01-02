'use strict';
import parseColor from 'parse-color';
module.exports = (color) => {
  const [h, s, l] = parseColor(color).hsl;
  if(l > 90){
    return 'white';
  }
  if(s < 15){
    return 'gray';
  }
  if( h >= 0 && h < 30){
    return 'red';
  }
  if( h >= 30 && h < 70){
    return 'yellow';
  }
  if( h >= 70 && h < 140){
    return 'green';
  }
  if( h >= 140 && h < 200){
    return 'cyan'
  }
  if( h >= 200 && h < 260){
    return 'blue';
  }
  if( h >=260 && h < 320){
    return 'magenta';
  }
  return 'red';
};
