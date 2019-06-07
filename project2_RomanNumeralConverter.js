//freeCodeCamp JavaScript Algorithms and Data Structures Project 2: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter 
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case. https://www.mathsisfun.com/roman-numerals.html

// convertToRoman(2) should return "II".
// convertToRoman(12) should return "XII".
// convertToRoman(649) should return "DCXLIX". 
// convertToRoman(3999) should return "MMMCMXCIX". 

function convertToRoman(num) {
    //Change the number into an array with single digits. e.g.:[3, 4, 5, 4]
    var digitArr = (""+num).split("").map(Number); 
    console.log(digitArr); 
    //Change the array into any array that add up to the num.  e.g.: [3000, 400, 50, 4]
    var numArr = []; 
    for (var i = 0; i < digitArr.length; i++) {
        var item = digitArr[i]; 
        numArr.push(item * Math.pow(10, (digitArr.length - 1 - i))); 
    }
    // console.log(numArr); 
    //Construct the map for the matching. 
    const convertMap = {
        0: "", 
        1: "I", 
        2: "II", 
        3: "III", 
        4: "IV", 
        5: "V", 
        6: "VI", 
        7: "VII", 
        8: "VIII", 
        9: "IX", 
        10: "X", 
        20: "XX", 
        30: "XXX", 
        40: "XL", 
        50: "L", 
        60: "LX", 
        70: "LXX", 
        80: "LXXX", 
        90: "XC", 
        100: "C", 
        200: "CC", 
        300: "CCC", 
        400: "CD", 
        500: "D", 
        600: "DC", 
        700: "DCC", 
        800: "DCCC", 
        900: "CM", 
        1000: "M", 
        2000: "MM", 
        3000: "MMM" 
    }; 
    var newArr = numArr.map((item) => convertMap[item]); 
    return newArr.join(""); 
}


console.log(convertToRoman(3054));