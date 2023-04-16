const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
let hasInsideArray = (arr) => arr.some(item => Array.isArray(item));


        let result = 1;
   if (hasInsideArray(arr)) {
      const newArray1 = arr.reduce((acc, cur) => acc.concat(cur), []);
      return result + this.calculateDepth(newArray1);
   };
    return result;

    };
};
  /*      let max = 0;
        for (let i = 0; i < arr.length; i++) {
            let count = 1;
            if (count >= max) {
                max = count
            }
            ;
            let b = arr[i];
            if (Array.isArray(b)) {
                count = count + 1;
                let arr5 = b;
                var flattend = [];
                (function flat(arr5) {
                    arr5.forEach(function (el) {
                        if (Array.isArray(el)) {
                            flat(el);
                            count = count + 1;
                        } else flattend.push(el);
                    });
                    if (count >= max) {
                        max = count
                    };
                })(array[i]);
                /*return
                console.log(flattend);
                console.log(count);

            }
            return (max);
         }

        //return (max);
    }
}*/
//      this.total = 0;
//      arr.forEach(el => {
//        if (Array.isArray(el)) checkArray.call(this,arr)
//      })
//      function checkArray (elem) {
//        elem.forEach(el => {
//          if (Array.isArray(el)) {
//            this.counter += 1;
//            checkArray.call(this,el)
//          }
//        });
//        this.total = this.total < this.counter ? this.counter : this.total;
//        this.counter = 0;
//      }
//     return this.total +1;
//    }
//  }







module.exports = {
  DepthCalculator
};
