/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    str = x.toString();
    reversedString = str.split('').reverse().join('')
    return reversedString == str;
};