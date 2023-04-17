const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr) === false)throw new Error('\'arr\' parameter must be an instance of the Array!');
  if (arr.length===0) return (arr);
  let arr1= arr.flatMap((currentValue, index, array) => {
    if (array[-1] === '--discard-next') return [];
    if (array[1] === '--discard-prev') return [];
    if (array[-1] === '--double-next') return [];
    if (array[1] === '--double-prev') return [];
    if (array[index - 1] === '--discard-next' && array[index + 1] === '--double-prev') return [];
    if (array[index - 1] === '--double-next' && array[index + 1] === '--double-prev') return [currentValue, currentValue, currentValue];
    if (array[index - 1] === '--discard-next' && array[index + 1] === '--discard-prev') return [];
    if (array[index - 1] === '--double-next' && array[index + 1] === '--discard-prev') return [currentValue];
    if (array[index - 1] === '--discard-next') return [];
    if (array[index + 1] === '--discard-prev') return [];
    if (array[index - 1] === '--double-next') return [currentValue, currentValue];
    if (array[index + 1] === '--double-prev') return [currentValue, currentValue];

    if (currentValue.toString().startsWith('--discard-prev')) return [];
    if (currentValue.toString().startsWith('--double-prev')) return [];
    if (currentValue.toString().endsWith('--double-next')) return [];
    if (currentValue.toString().endsWith('--discard-next')) return [];
    return currentValue;
  });
return arr1;
}

module.exports = {
  transform
};
