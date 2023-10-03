const today = new Date();

//0=January, 1=February etc.
console.log(today.getMonth()); //1

//getDate() returns the day of the month (from 1 to 31) of a date:
console.log(today.getDate()); //14

//getDay() method returns the day of the week (from 0 to 6) of a date.
console.log(today.getDay());

//getFullYear() returns the year with four digits:
console.log(today.getFullYear()); // 2023

//getHours() returns the hour (from 0 to 23) of a date:
console.log(today.getHours()); // 15

//getMinutes() returns the minutes of a date:
console.log(today.getMinutes()); //43

//getSeconds() returns the seconds of a date:
console.log(today.getSeconds()); //45

//getMilliseconds() returns the milliseconds of a date:
console.log(today.getMilliseconds()); // 519

//getTime() returns the number of milliseconds since January 1, 1970:
console.log(today.getTime());

let birthday = new Date('9-10-1981 11:25:00'); //type 1
birthday = new Date('September 10 1981'); //type 2
birthday = new Date('9/10/1981'); //type 3
console.log(birthday); //Thu Sep 10 1981 00:00:00 GMT+0530 (India Standard Time)
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday); //Tue Mar 12 1985 03:30:25 GMT+0530 (India Standard Time)

//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date