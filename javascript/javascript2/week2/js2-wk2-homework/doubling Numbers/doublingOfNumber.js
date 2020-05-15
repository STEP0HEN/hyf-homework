"use strict"

let numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter(num => num % 2 !== 0).map(Num => Num * 2);
console.log(newNumbers)

