
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }

  return Math.min.apply(Math.min, array);
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  return Math.max.apply(Math.max, array);
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0; 
  }

  if (array.length == 1) {
      return array[0];
  } else {
      let sum = 0;
      for(let i = 0; i <= array.length - 1; i++) {
        sum += array[i];
    }
      return sum/array.length;
  }
}
