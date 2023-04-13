const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let stroke = str.split('');
  console.log(stroke);
  let res = [];
  let counter = 1;
  for (let i = 0; i < stroke.length; i++) {
    if (stroke[i] === stroke[i + 1]) {
      counter++;
    } else {
      res.push(counter, stroke[i]);
      counter = 1;
      console.log(res);

     }
  }
  let arr1=res;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]===1) {
  let del = [];
  del.push(arr1.splice(i, 1));

    }

  }
  return arr1.join('');
}
module.exports = {
  encodeLine
};
