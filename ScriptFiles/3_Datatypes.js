/*
1. Primitive Datatype
2. Reference Types - Objects
3. Dynamically Typed
*/

//Primitive Datatype

//String
const fullName = 'Priyam Pratyush Sahu'
console.log(`fullName: ${fullName}`) //fullName: Priyam Pratyush Sahu
console.log(`typeof (fullName): ${typeof (fullName)}`) //typeof (fullName): string

//Number
const age = 23
console.log(`age: ${age}`) //age: 23
console.log(`typeof (age): ${typeof (age)}`) //typeof (age): number

//Boolean
const isMarried = false
console.log(`isMarried: ${isMarried}`) //isMarried: false
console.log(`typeof (isMarried): ${typeof (isMarried)}`) //typeof (isMarried): boolean

//Null
console.log(`typeof (null): ${typeof (null)}`) //typeof (null): object

//Undefined
let a
console.log(`a: ${a}`) //a: undefined
console.log(`typeof (a): ${typeof (a)}`) //typeof (a): undefined
console.log(`typeof (undefined): ${typeof (undefined)}`) //typeof (undefined): undefined

//Symbol
const sym = Symbol();
console.log(sym) //Symbol()

//Reference Types - Objects

//Array
const hobbies = ['reading', 'music', 'cooking']
console.log(`hobbies: ${hobbies}`) //hobbies: reading,music,cooking
console.log(`typeof (hobbies): ${typeof (hobbies)}`) //typeof (hobbies): object

//Object Literal
const address = {
    state: 'Odisha',
    country: 'India'
}
console.log(address) //{state: 'Odisha', country: 'India'}
console.log(`typeof (address): ${typeof (address)}`) //typeof (address): object

//Dynamically Typed

let dynamicVar

dynamicVar = 1;
console.log(`dynamicVar: ${dynamicVar}\ntypeof (dynamicVar): ${typeof (dynamicVar)}`)
//dynamicVar: 1
//typeof (dynamicVar): number
dynamicVar = "Hi"
console.log(`dynamicVar: ${dynamicVar}\ntypeof (dynamicVar): ${typeof (dynamicVar)}`)
//dynamicVar: Hi
//typeof (dynamicVar): string

dynamicVar = true
console.log(`dynamicVar: ${dynamicVar}\ntypeof (dynamicVar): ${typeof (dynamicVar)}`)
//dynamicVar: true
//typeof (dynamicVar): boolean

dynamicVar = null
console.log(`dynamicVar: ${dynamicVar}\ntypeof (dynamicVar): ${typeof (dynamicVar)}`)
//dynamicVar: null
//typeof (dynamicVar): object

dynamicVar = [1, 2, 3, 4]
console.log(`dynamicVar: ${dynamicVar}\ntypeof (dynamicVar): ${typeof (dynamicVar)}`)
//dynamicVar: 1,2,3,4
//typeof (dynamicVar): object