//Startup name generator
const firstWord = ["Easy", "Awesome", "Smart", "Corporate", "Creative"];
const secondWord = ["Ventures", "Insurance", "Financing", "Solutions", "Deliveries"];


const randomValue1 = firstWord[Math.floor(Math.random() * firstWord.length)] //selects a random word from firstword
const randomValue2 = secondWord[Math.floor(Math.random() * secondWord.length)] //selects a random word from  second 
const startUpName = "Hurray! your new startup name is: " + randomValue1 + ' ' + randomValue2 + " and it contains " + (+randomValue1.length +  +randomValue2.length) + " characters"
console.log(startUpName)
