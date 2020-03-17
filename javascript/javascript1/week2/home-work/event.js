"use strict"


// Event Application

 const weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
 
function getEventWeekday(event) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const day = (currentDay + event) % 7;
    return `${weekdays [day]}` ;
    
  }
  console.log(getEventWeekday(5));
