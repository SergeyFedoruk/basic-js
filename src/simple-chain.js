const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currencyChain: [],
  getLength() {
    return this.currencyChain.length;

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
  this.currencyChain.push(`( ${value} )`);
  return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.__checkIntNumber(position)) {
      if (position < 1  ||  position > this.getLength()){
        this.__delChain();
        throw new Error('You can\'t remove incorrect link!');
      }
      const index = position - 1;
      this.currencyChain.splice(index,1);
      return this;
    }
    this.__delChain();
    throw new Error('You can\'t remove incorrect link!');
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.currencyChain.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const chain = this.__getJoinChain();
    this.__delChain();
    return chain;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  __delChain(){
    this.currencyChain.length = 0;
  },
  __checkIntNumber(num){
    return typeof num === 'number' && (num ^ 0) === num;
  },
  __getJoinChain(){
    return this.currencyChain.join('~~');
  },
};

module.exports = {
  chainMaker
};
