/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    let arr1 = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    let arr2 = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    
      return arr1 === arr2;
    
}

module.exports = anagrams;
