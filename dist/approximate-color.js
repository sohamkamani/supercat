'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _parseColor = require('parse-color');

var _parseColor2 = _interopRequireDefault(_parseColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (color) {
  var _parseColor$hsl = _slicedToArray((0, _parseColor2.default)(color).hsl, 3);

  var h = _parseColor$hsl[0];
  var s = _parseColor$hsl[1];
  var l = _parseColor$hsl[2];

  if (l > 90) {
    return 'white';
  }
  if (s < 15) {
    return 'gray';
  }
  if (h >= 0 && h < 30) {
    return 'red';
  }
  if (h >= 30 && h < 70) {
    return 'yellow';
  }
  if (h >= 70 && h < 140) {
    return 'green';
  }
  if (h >= 140 && h < 200) {
    return 'cyan';
  }
  if (h >= 200 && h < 260) {
    return 'blue';
  }
  if (h >= 260 && h < 320) {
    return 'magenta';
  }
  return 'red';
};