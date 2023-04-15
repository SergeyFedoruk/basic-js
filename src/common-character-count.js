const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let stroke1 = s1.split('');
  let stroke2 = s2.split('');
  let result = 0;
  while (stroke1.length>0){
    let array = stroke1.splice(0,1);
    console.log(stroke1);
    console.log(array);
    let elem = stroke2.find((el)=>el===array[0]);
    console.log(elem);
    if (array[0]===elem){
      let array1 = stroke2.splice((stroke2.indexOf(elem)),1);
      result = result+1;
    }

  }
  return result;

}

module.exports = {
  getCommonCharacterCount
};
