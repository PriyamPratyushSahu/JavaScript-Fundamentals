/*
1. Number to string
    //Type 1 String Conversion: String()
    //Type 2 String Conversion: .toString()
//2. String to Number
    //Type 1 Numeric Conversion: Number()
    //Type 2 Numeric Conversion: parseInt(),parseFloat()
*/

let val;

//1. Number to string
//Type 1 String Conversion: String()
val = 5;
console.log(val) //5
console.log(typeof (val)) //number

val = String(5)
console.log(val) //5
console.log(typeof (val)) //string

// Date to String
val = String(new Date())
console.log(val) // Mon Feb 13 2023 10:27:30 GMT+0530 (India Standard Time)
console.log(typeof (val)) //string

val = String([1, 2, 3, 4])
console.log(val) // 1,2,3,4
console.log(typeof (val)) //string

//Type 2 String Conversion: .toString()
val = (5).toString(); // also works with (5).toString
console.log(val) // 5
console.log(typeof (val)) //string


//2. String to Number
//Type 1 Numeric Conversion: Number()
console.log(Number('5')); //5
console.log(typeof (Number('5'))); //number
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number('Hi')); // NaN
console.log(Number([1,2,3,4])); // NaN

//Type 2 Numeric Conversion: parseInt(),parseFloat()
console.log(parseInt('5')); //5
console.log(typeof (parseInt('5'))); //number
console.log(parseFloat('10.3')); //10.3
console.log(typeof (parseFloat('10.3'))); //number

//Type 3 Using + sybmbol
val = '22';
console.log(typeof val) //string
val = +val
console.log(typeof val) //number