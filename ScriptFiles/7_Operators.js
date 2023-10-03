// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true


// EQUALITY OPERATOR -> ==
// STRICT EQUALITY OPERATOR -> ===

//Type Coercion - String is converted to number
console.log(`'10' == 10 -> ${'10' == 10}`) //'10' == 10 -> true
console.log(`'10' === 10 -> ${'10' === 10}`) //'10' === 10 -> false

// LOGICAL OPERATORS
const A = true; 
const B = true; 
const C = false;
console.log(`A = ${A}`) //A = true
console.log(`B = ${B}`) // B = true
console.log(`C = ${C}`) //C = false

//AND OPERATOR(&&)
console.log(`A && B -> ${A && B}`) //A && B -> true
console.log(`A && C -> ${A && C}`) //A && C -> false

//OR OPERATOR(||)
console.log(`A || B -> ${A && B}`) //27 A || B -> true
console.log(`A || C -> ${A && C}`) //A || C -> false

//NOT OPERATOR(!)
console.log(`!A -> ${!A}`) //!A -> false
console.log(`!C -> ${!C}`) //!C -> true

//TERNARY OPERATOR
console.log(`(A && C)? A : C -> ${(A && C) ? A : C}`) //(A && C)? A : C -> false
console.log(`(A || C)? A : C -> ${(A || C)? A : C}`) //(A || C)? A : C -> true