const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let height = arr.filter(element => element != -1);
  let sortedHeight = height.sort((a,b)=>a-b);
  let answerArray=[];
  let t=0;
  for (let j=0; j<arr.length; j++){
    if (arr[j]===-1){
      answerArray.push(arr[j]);
    }else{
      t<sortedHeight.length;
      answerArray.push(sortedHeight[t]);
      t=t+1;
    }

  }

  return(answerArray);
}

module.exports = {
  sortByHeight
};
