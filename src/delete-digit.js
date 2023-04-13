const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
/* throw new NotImplementedError('Not implemented');*/
    let digit = n;
    let string = digit.toString();
    let array = (string.split(''));
    let newArray = [0,0];
    let newArray1 = [0,0];
    let max=0;
//let min = array.length?array[0]:0;
//console.log(array);
    let array1= array;
    for (let i=0; i<array.length; i++){

      let arr=array1.splice(i, 1);
      //console.log(array1);
      let il = +array1.join('');
      let array = array1.splice(i,0,arr);
      //console.log(array);
      //console.log(il);

      if (il>=max){
        max=il;
      }
      let newArray1 = newArray.splice(i,0,`$il`);
      //console.log(newArray1);
      console.log(max);

    }
    return(max);

}

module.exports = {
  deleteDigit
};
