const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let arrayAdress =  email.split('').reverse();
  console.log(arrayAdress);
  //let result = [];
  for (let i=0; i<arrayAdress.length; i++){
    console.log(i);
    if (arrayAdress[i]==="@"){
      let res = arrayAdress.splice(0, i);
      console.log(res);
      let q = res.reverse().join('');
      console.log(q);
      return (q);
    };

  };
}

module.exports = {
  getEmailDomain
};
