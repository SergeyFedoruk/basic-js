const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let matrixFlated = matrix.flat();
  let howMach = 0;
  console.log(matrixFlated);
  for (let i =0; i<matrixFlated.length; i++){
    if(matrixFlated[i]==="^^"){
      howMach = howMach+1;
    }
   }
  return howMach;
}

module.exports = {
  countCats
};
