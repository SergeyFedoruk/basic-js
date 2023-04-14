const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = n.toString().split('');
  let sum = 0;
  for (i=0; i<array.length; i++){
    sum+=+array[i];

  }
  if (sum===10) {
    return 1;
  }
  if (sum<10) {
    return sum;
  }
  for (let sum1=0;sum>10;sum=sum1){
    let array1 = sum.toString().split('');
       for (j=0; j<array1.length; j++){
      sum1+=+array1[j];
       }
    if (sum1===10) {
      return 1;
    }
    if (sum1<10) {
      return sum1;
      break;
    }
  }
  }

module.exports = {
  getSumOfDigits
};
