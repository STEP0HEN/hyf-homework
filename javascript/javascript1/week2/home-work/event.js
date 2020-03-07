"use strict"


// Event Application

 
 
function getEventWeekday(days) {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + days);
    console.log(eventDate);
  }
  getEventWeekday(3);

