//freeCodeCamp JavaScript Algorithms and Data Structures Project 4: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//1 555 555 5555


function telephoneCheck(str) {
    var testRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 
    return testRegex.test(str); 
}


console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555")); 

// ^ denotes the beginning of the string.
// (1\s?)? allows for “1” or “1 ” if there is one.
// \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
// x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
// Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.