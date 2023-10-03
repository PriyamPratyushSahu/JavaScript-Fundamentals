console.log('Practice File')


//arrow function
const avr = (a, b, c) => {
return(Math.trunc((a + b + c)/3))
}
console.log(`Average of 3 numbers: ${avr(3, 6, 10)}` ) //Average of 3 numbers: 6

const func1 = (num = 10) => {
    return num;
}
console.log(func1(10)); //10
console.log(func1()); //10
console.log(func1(30)); // 30