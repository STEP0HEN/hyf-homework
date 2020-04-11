"use strict"



let names = [];
let whoAmI = 'What is my name';
let day = 'What day is it today'
let todo =[];
let myTodoList = 'What is on my todo'
let favDish = [];
let event = [];
let eventList = 'What am I doing this week'


function getReply(command) {
    let commandArray = command.split(' ')
    
    //Saving the person's name and returning nice to meet you plus the person's name
    if (command.startsWith('Hello') && command.includes('name')) {
          let name = commandArray[commandArray.length -1]
          
          if(names.includes(name)) {
              return `You have already introduced yourself`
        } else {
            names.push(name)    
            return `Nice to meet you ${name}`;
        }
    } 
    
    //If you ask for your name and you have introduced yourself
    if(command === whoAmI && names.length !== 0) {
        let personName = names[names.length -1]
        return `Your name is ${personName}`; 
    }
    //If you ask for your name without introducing yourself
    if (command === whoAmI && names.length === 0) {
        return `Please tell me your name and I'll remember it for next time`
    }

    //Logging out what day today is in format 30. August 2020

    if (command === day) {
        let monthsOfTheYear = ["January","February","March","April","May","June","July","August", "September","October","November", "December"];
            const today = new Date();
            const day = today.getDate();
            const month = today.getMonth();
            const year = today.getFullYear();
        
        return `Today is ${day}. of ${monthsOfTheYear[month]} ${year}`;
        
    }
    
    if (command.includes('+') && typeof(+(commandArray[2]) === Number)) {

         let x = +commandArray[2]
         let y = +commandArray[4]
         let answer = x + y
         return `${answer}`
    }  

    if (command.includes('-') && typeof(+(commandArray[2]) === Number)) {

        let x = +commandArray[2]
        let y = +commandArray[4]
        let answer = x - y
        return `${answer}`
   }

   if (command.includes('*') && typeof(+(commandArray[2]) === Number)) {

    let x = +commandArray[2]
    let y = +commandArray[4]
    let answer = x * y
    return `${answer}`
    }
    if (command.includes('/') && typeof(+(commandArray[2]) === Number)) {

    let x = +commandArray[2]
    let y = +commandArray[4]
    let answer = x / y
    return `${answer}`
    }
    //Adding things to todo
    if (command.startsWith("Add") && command.endsWith("todo")){
            let wordToAdd = commandArray[1]
            todo.push(wordToAdd);

        return `${wordToAdd} added to your todo`;
    }

    //Removing things from todo
    if (command.startsWith('Remove') && command.endsWith('todo')) {
         let wordToRemove = commandArray[1]

         todo.splice(todo.indexOf (wordToRemove),1)
        return`${wordToRemove} removed from your todo`
    }
    //Logging out todo
    if (command === myTodoList) {
         
        return `You have ${todo.join(" and ")} in your todo`;
    }
    //Saving favorite dish 
    if (command.startsWith('My favorite') && command.includes('dish')) {
            let dishWord = commandArray[commandArray.length -1]
            favDish.push(dishWord)
        return `favorite dish saved`    
    }
    //Logging out favorite dish
    if (command.startsWith('What is my') && command.endsWith('favorite dish') && favDish.length !== 0) {
            
        return `Your favorite dish is ${favDish.join( " and ")}`
    }
    //Setting timer
    if (command.startsWith('Set a timer')) {
        let counter = commandArray[5]
        let timeForAlarm = commandArray[4]
        let timeToMillisecond = timeForAlarm*60*1000
          
        //Giving out alarm when time is up
        
        setTimeout(function(){ alert("Timer done"); },  timeToMillisecond);
               
        return `Timer set for ${timeForAlarm} ${counter}` 
    }
    //Adding things to calendar
    if (command.startsWith('Add') && command.endsWith('calendar')) {
            let thingsToAddTOCalendar = commandArray[1]
            let thingsToAddTOCalendarDate = commandArray[3]
            event.push({name: thingsToAddTOCalendar, date: thingsToAddTOCalendarDate})
                
        return `${thingsToAddTOCalendar} on ${thingsToAddTOCalendarDate} added to your calendar `

    }
    //Loggging out event in calendar
    if (command === eventList && event.length !== 0) {
        
        return `You have ${event.length} event in your calendar : ${event[0].name} on ${event[0].date}`
    }
    else {
        return `Wrong input, please put in a valid input`
    }

}


console.log(getReply('What is my name')) 
console.log(getReply('Hello my name is Benjamin'))
console.log(getReply('Hello my name is Benjamin'))
console.log(getReply('What is my name')) 
console.log(getReply('What day is it today')) 
console.log(getReply('Add football to my todo')) 
console.log(getReply('Add fishing to my todo')) 
console.log(getReply('Remove fishing from my todo')) 
console.log(getReply('Add gym to my todo')) 
console.log(getReply('What is on my todo')) 
console.log(getReply('My favorite dish is Rissoto'))
console.log(getReply('What is my favorite dish'))
console.log(getReply('Set a timer for 5 minute'))
console.log(getReply('Add conference the 3/5/2019 to my calendar'))
console.log(getReply('What am I doing this week'))
console.log(getReply('what is 6 + 3'))
console.log(getReply('How are you today')) //wrong input
console.log(getReply('what is 3 - 3'))
console.log(getReply('what is 3 * 3'))
console.log(getReply('what is 3 / 3'))
console.log(getReply('Hello my name is John'))
console.log(getReply('Hello my name is John'))
console.log(getReply('What is my name'))