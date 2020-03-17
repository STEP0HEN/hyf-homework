"use strict"

//what to wear

function whatToWear(temperature) {
    if (temperature <= 0) {
        return 'it is extremely cold outside wear some good warm clothes'
    }
    else if(temperature <= 10) {
        return 'it\'s cold outside wear warm clothes'
    }
    else if(temperature <= 15) {
        return 'sweaters and trousers'
    }
    else {
        return 'it\'s gonna be a sunny day, put on some shirt and shorts and enjoy the beautiful day'
    }
 }

 const todaysApparel = (whatToWear(18));
 console.log(todaysApparel);