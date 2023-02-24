// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 1.Created a function called myTemp and passed number as a variabe
//              2.Conditonal statement that checks if the number is below the boiling point
//              3.Conditonal statement that checks if the number is above the boiling point
//              4.Conditonal statement that checks if the number is at the boiling point
//              5.Checks all conditions if input is a number
//              6.Invoked the function myTemp and passed the temp1
//              7.Invoked the function myTemp and passed the temp2
//              8.Invoked the function myTemp and passed the temp3
const temp1 = 42 
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"
const myTemp = (number) => {
    if (number < 212) { 
    return `${number} is below boiling point`} 
    else if (number > 212 ) {
        return `${number} is above boiling point`}
    else if (number === 212) {
        return `${number} is at the boiling point` } 
    else {
    return "Error,not a number"
    } 
    
    }
   
console.log(myTemp(temp1))
console.log(myTemp(temp2))
console.log(myTemp(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 1. Created a variable called runs to return the the length of both arrays listed 
//              2. Used concat to merge the two arrays to form one array
//              3. Invoked variable 'runs and used .length to output the number of elements in the array.


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
let runs = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(runs.length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 1.Created a variable called string to change the string into an array using .split
//              2.Invoked variable 'string' and used .reverse to reverse the array 
//              3.Used .join to convert the array into one string

const currentCohort = "Alpha 2023"
const string = currentCohort.split("")
console.log(string.reverse("").join(""))
// Expected output: "3202 ahplA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: 1. Invoked variable 'myNumbers' with the method .lastIndexOf and entered the value (42) to output the last index of the given value

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(42))
// Expected output: 7

//             2. Invoked variable 'myNumbers' with the method .lastIndexOf and entered the value (10) to output the last index of the given value

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(10))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: 1.Invoked the variable and used .sort
//              2. Because the elemets in the array is a number, had to include (a,b) => b - a to order it from largest to smallest. 
//              If it was (a,b) => a - b the order would return from smallest to largest


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort((a,b)=> b - a))
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort((a,b)=> b - a))
// Expected output: [68, 67, 66, 66, 62, 59, 59]
