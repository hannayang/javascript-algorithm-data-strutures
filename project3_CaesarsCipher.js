//freeCodeCamp JavaScript Algorithms and Data Structures Project 3: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

function rot13(str) {
    var frontRegex = /[A-M]/;
    var backRegex =  /[N-Z]/; 

    // Function to get the the code changed to normal letter. 
    function changeCode(character) {
        if(frontRegex.test(character) === true) {
            character = String.fromCharCode(character.charCodeAt(0)+13); 
        } else if (backRegex.test(character) === true) {
            character = String.fromCharCode(character.charCodeAt(0)-13); 
        }
        return character; 
    }
    // console.log(changeCode("E")); 
    // Function done. 

    var splitStrArr = str.split(""); 
    // console.log(splitStrArr); 
    var resultArr = []; 
    for (var i = 0; i < splitStrArr.length; i++) {
        resultArr.push(changeCode(splitStrArr[i])); 
    }
    return resultArr.join(""); 
  }


const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const E = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('');
const dictionary = {};
for (var i = 0; i < 26; i++) {
  const l = L[i];
  const e = E[i];
  dictionary[l] = e;
}
console.log(dictionary); 
const rot13_ = (str) => {
  return str.split('').map((s) => {
      if (dictionary[s]) {
          return dictionary[s];
      } else {
          return s;
      }
  }).join('');
}
console.log(rot13_("SERR PBQR PNZC!"));

