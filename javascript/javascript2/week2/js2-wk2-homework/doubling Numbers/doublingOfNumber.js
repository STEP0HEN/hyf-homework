"use strict"

let numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter(OddNumbers => OddNumbers % 2 !== 0).map(multiplyOddNumbers => multiplyOddNumbers * 2);
console.log(newNumbers)

