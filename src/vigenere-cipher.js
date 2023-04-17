const { NotImplementedError } = require('../extensions/index.js');
let englishAlphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let massiveAlphabet=[
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A'],
  ['C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B'],
  ['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C'],
  ['E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D'],
  ['F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E'],
  ['G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F'],
  ['H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G'],
  ['I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H'],
  ['J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I'],
  ['K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J'],
  ['L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K'],
  ['M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L'],
  ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'],
  ['O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N'],
  ['P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'],
  ['Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'],
  ['R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'],
  ['S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'],
  ['T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S'],
  ['U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'],
  ['V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'],
  ['W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'],
  ['X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'],
  ['Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'],
  ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'],
    ]
let START_POSITION_CHARCODE = 65;
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirection = true) {
    this._reversed = !isDirection;
  };

encrypt (message, key) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
  let key1 = key.toUpperCase();
  let key1Dried = key1.replace(/\s/g, '');
  let message1 = message.toUpperCase();
  let message1Dried = message1.trim();
  let res = [];
  let keyLength = key1Dried.length;
  let msgLength = message1Dried.length;

  for (let i = 0, n = 0; i < msgLength; i += 1, n += 1) {
    let messageChar = message1Dried[i];
    if (!~englishAlphabet.indexOf(messageChar)) {
      res.push(messageChar);
      n--;
      continue;
    }
    let messageCharCode = messageChar.charCodeAt(0);
    let shiftedRangeIndex = key1Dried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;
    let shiftedCharIndex = messageCharCode - START_POSITION_CHARCODE;
    res.push(massiveAlphabet[shiftedRangeIndex][shiftedCharIndex]);
  }
  if (this._reversed === true) return res.reverse().join('');
  return res.join('');
};

decrypt(encryptedMessage, key)  {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

  let key2 = key.toUpperCase();
  let key2Dried = key2.replace(/\s/g, '');
  let encryptedMessage2 = encryptedMessage.toUpperCase();
  let encryptedMessage2Dried = encryptedMessage2.trim();
  let keyLength = key2Dried.length;
  let msgLength = encryptedMessage2Dried.length;
  let res = [];

  for (let i = 0, n = 0; i < msgLength; i ++, n ++) {
    let encryptedMessageChar = encryptedMessage2Dried[i];
    let rangeIndex = key2Dried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;
    let range = massiveAlphabet[rangeIndex];

    if (!~englishAlphabet.indexOf(encryptedMessageChar)) {
      res.push(encryptedMessageChar);
      n--;
      continue;
    }
    let  targetIndex = range.indexOf(encryptedMessageChar);
    let unshiftedRange = massiveAlphabet[0];
    let trueChar = unshiftedRange[targetIndex];
    res.push(trueChar)
  }
  if (this._reversed === true) return res.reverse().join('');
  return res.join('');
};
}


module.exports = {
  VigenereCipheringMachine
};
