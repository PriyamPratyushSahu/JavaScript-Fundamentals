/*
1. Create some arrays
    Type 1
    Type 2
2. Array of strings
3. Array of mixed data
4. Array Methods
5. MUTATING ARRAYS
    Add on to end
    Add on to front
    Take off from end
    Take off from front
    Splice values
    Reverse
    Concatenate array
    Sorting arrays
6. Question : Multiply each element by 5
 */

// Create some arrays
//Type 1
const numbers = [43, 56, 33, 23, 44, 36, 5]; 
console.log(`numbers: ${numbers}`) //numbers: 43,56,33,23,44,36,5

//Type 2
const numbers2 = new Array(22, 45, 33, 76, 54);
console.log(`numbers2: ${numbers2}`) //numbers2: 22,45,33,76,54

//Array of strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
console.log(`fruits: ${fruit}`) //fruits: Apple,Banana,Orange,Pear

//Array of mixed data
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(`mixed: ${mixed}`) // mixed: 22,Hello,true,,,[object Object],Wed Feb 15 2023 10:34:06 GMT+0530 (India Standard Time)

//Array Methods

// array length
console.log(`Array length: ${numbers.length}`) //Array length: 7


// Check if is array
console.log(`Is Array: ${Array.isArray(numbers)}`); //Is Array: true

//Each individual elements
console.log(`numbers[0]: ${numbers[0]}, numbers[2]: ${numbers[2]}`) //numbers[0]: 43, numbers[2]: 33

// Insert into array
numbers[2] = 100;
console.log(`numbers: ${numbers}`) //numbers: 43,56,100,23,44,36,5


// Find index of value
console.log(`Index value of 36: ${numbers.indexOf(36)}`) //Index value of 36: 5
console.log(`Index value of 17: ${numbers.indexOf(17)}`) //Index value of 36: -1

//Using includes
console.log(`numbers.includes(36): ${numbers.includes(36)}`) //numbers.includes(36): true
console.log(`numbers.includes(17): ${numbers.includes(17)}`)//numbers.includes(17): false

// MUTATING ARRAYS
    // Add on to end
numbers.push(250);
console.log(`numbers: ${numbers}`) //numbers: 43,56,33,23,44,36,5,250

 // Add on to front
numbers.unshift(120);
console.log(`numbers: ${numbers}`) //numbers: 120,43,56,33,23,44,36,5,250

 // Take off from end
numbers.pop();
console.log(`numbers: ${numbers}`) //numbers: 120,43,56,100,23,44,36,5

// Take off from front
numbers.shift();
console.log(`numbers: ${numbers}`) //numbers: 43,56,100,23,44,36,5

 // Splice values
numbers.splice(1, 3); //To remove 56,100,23
console.log(`numbers.splice(1, 3):  ${ numbers }`); //numbers.splice(1, 3):  43,44,36,5

// Reverse
numbers.reverse();
console.log(`numbers.reverse(): ${numbers}`); //numbers.reverse(): 5,36,44,43

// Concatenate array
console.log(`Concat two arrays: ${numbers.concat(numbers2)}`) //Concat two arrays: 5,36,44,43,22,45,33,76,54

// Sorting arrays
console.log(`fruit.sort(): ${fruit.sort()}`) //fruit.sort(): Apple,Banana,Orange,Pear


// Use the "compare function"
//Ascending order
let sortMeth =  numbers.sort(function(x, y){
  return x - y;
});

/**
 Explanation:
 takes the first number and compares it to all others and then goes to the second number and compares it to all others (except the first), then it goes to the third and compares it to all others (expect the first and second) and so on.

So, in your example, here is how the compare function would actually work in the background (assuming you're using function(a,b){return a - b} like Brad was using in the lecture...

const numbers = [43, 56, 100, 33, 23, 44, 36, 5]; 

43 - 56 = -13 (sort 43 with a lower index than 56)
43 - 100 = -57 (sort 43 lower than 100)
43 - 33 = 10 (sort 43 higher than 33)
43 - 23 = 20 (sort 43 higher than 23)
43 - 44 = -1 (sort 43 lower than 44)
43 - 36 = 7 (sort 43 higher than 36)
43 - 5 = 38 (sort 43 higher than 5)

Then to the second number, but this time we don't have to compare the second number (56) to the first (43) because we already did that above...

56 - 100 = -44 (sort 56 with a lower index than 100)
56 - 33 = 23 (sort 56 higher than 33)
and so on

Then to the third number - but we can skip comparing to the first and second number since we already did that above...

100 - 33 = 67 (sort 100 with a higher index than 33)
100 - 23 = 77 (sort 100 higher than 33)
and so on

Hope that helps clear it up!
 */

console.log(sortMeth) // [5, 36, 43, 44]

// Reverse sort
let revSortMeth = numbers.sort(function(x, y){
  return y - x;
});

console.log(revSortMeth) //[44, 43, 36, 5]

// Find
function over40(num){
    return num > 40;
}


console.log(`numbers.find(over40): ${numbers.find(over40)}`); //numbers.find(over40): 44


//Question : Multiply each element by 5
const numArr = [1, 2, 3, 4, 5]

const MulBy5 = (n) => {
    return 5 * n
}
const newNumArr = new Array();
for (let i = 0; i < numArr.length; i++)
    newNumArr.push(MulBy5(numArr[i]))

console.log(newNumArr) // [5, 10, 15, 20, 25]

// 2D Array;

var StudentRecord = []; //1D Array, it will keep record in each index

//Student 1
StudentRecord[0] = [1, "Abhishek", 8, 'A'];
StudentRecord[1] = [2, "Aditya", 8, 'C'];
StudentRecord[2] = [3, "Ananya", 8, 'B'];
StudentRecord[3] = [4, "Binayak", 8, 'B'];
StudentRecord[4] = [5, "Chetan", 8, 'A'];
console.log("Students Details: ");
for (var i = 0; i < StudentRecord.length; i++){
    console.log(`Roll no: ${StudentRecord[i][0]}`);
    console.log(`Name: ${StudentRecord[i][1]}`);
    console.log(`Class: ${StudentRecord[i][2]}`);
    console.log(`Section: ${StudentRecord[i][3]}`);
    console.log('*****************\n');
}
/*
Students Details: 
Roll no: 1
Name: Abhishek
Class: 8
Section: A
*****************

Roll no: 2
Name: Aditya
Class: 8
Section: C
*****************

Roll no: 3
Name: Ananya
Class: 8
Section: B
*****************

Roll no: 4
Name: Binayak
Class: 8
Section: B
*****************

Roll no: 5
Name: Chetan
Class: 8
Section: A
*****************
 */