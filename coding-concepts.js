// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: indigo will be added to the end of the array ["tangerine", "magenta", "lilac", "daffodil',"indigo"]
// b) Verify and explain: The output was 5, it added a value at the end of the array so adding "indigo" changed it to 5 names inside the array

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: The output will consist of the number of characters in "LEARN 2023" with space included. The output should be 10
// b) Verify and explain: The output was 10 so I was correct in my prediction.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: I believe the output will be "l" as that is the [4] character in the string ""Hello World!""
// b) Verify and explain: The correct output was o as the proper index for the string starts at an index of 0

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: I believe the output will be "Ruby" as it is the second name in that array which equals 1
// b) Verify and explain:I was correct in my assesment as "Ruby" was the correct output
// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: output will be ["SATURDAY", "SUNDAY"] as the built in method of .toUpperCase changes the strings to uppercase.
// b) Verify and explain: The output was an error based off weekendDays.toUpperCase is not a function. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: The built in method of .length will count the characters inside that array which will be 3
// b) Verify and explain: The output was number, by thinking the length was 3 I believe it returned the number based of the order of the array.
