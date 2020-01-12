// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Solution 2
// function reverse(str) {
//     let reversed = "";

    // use one of this two for loop
    // for (let index = str.length; index >= 0; index--) {
    //     reversed += str.charAt(index);
    // }
    // for (let character of str) {
    //     reversed = character+reversed;
        
    // }
    // return reversed
// }

// Solution 3
function reverse(str) {
    // use one of this return
    // return str.split('').reduce((reversed, character) => { return character + reversed; }, '')
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
