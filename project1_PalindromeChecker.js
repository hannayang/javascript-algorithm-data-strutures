//freeCodeCamp JavaScript Algorithms and Data Structures Project 1: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// palindrome("eye") should return true.  
// palindrome("A man, a plan, a canal. Panama") should return true.  
// palindrome("almostomla") should return false. 
// palindrome("1 eye for of 1 eye.") should return false.

function palindrome(str) {
    var newStr = str.trim().toLowerCase().split(/[\W_]/).join(""); 
    console.log(newStr); 
    for (var i = 0; i < newStr.length; i++) {
        if(newStr[i] !== newStr[newStr.length - 1- i]) {
            return false; 
        }
    }
    return true; 
}


console.log(palindrome("_1_ eye for of 1 eye."));
console.log(palindrome("almostomla")); 
