const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date   ) {
  //throw new NotImplementedError('Not implemented');
  if (date == null) return('Unable to determine the time of year!');
  if (date instanceof  Date) {
    if (Object.getOwnPropertyNames(date)[0] === 'toString') throw new Error('Invalid date!');
if (date.getMonth()===0) return 'winter';
    if (date.getMonth()===1) return 'winter';
    if (date.getMonth()===11) return 'winter';
    if (date.getMonth()===2) return 'spring';
    if (date.getMonth()===3) return 'spring';
    if (date.getMonth()===4) return 'spring';
    if (date.getMonth()===5) return 'summer';
    if (date.getMonth()===6) return 'summer';
    if (date.getMonth()===7) return 'summer';
    if (date.getMonth()===8) return 'autumn';
    if (date.getMonth()===9) return 'autumn';
    if (date.getMonth()===10) return 'autumn';
    }
  throw new Error('Invalid date!');
}
module.exports = {
  getSeason
};
