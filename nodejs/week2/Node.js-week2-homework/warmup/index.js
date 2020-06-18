const express = require('express');
const { response } = require('express');
const app = express();
const port = 3000;

app.get('/', (request,response)=>{
    response.send("WELCOME TO THE PAGE")
});

/*
GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
Example: going to localhost:3000/numbers/add?first=3&second=7 should respond with 10

Hints:

Find express documentation online.
Use req.query and req.params properties on req object.
*/
app.get('/numbers/add',(request,response)=>{
    const firstNumber = Number(request.query.first);
    const secondNumber = Number(request.query.second);
    const theSum = firstNumber + secondNumber; 
if(!firstNumber && !secondNumber){
    response.send(`Please input a number`);
}else {
    response.send(`the answer is ${theSum}`);
}
});

app.get('/numbers/multiply',(request,response)=>{
    const firstNumber = Number(request.query.first);
    const secondNumber = Number(request.query.second);
    const theProduct = firstNumber * secondNumber; 
    if(!firstNumber && !secondNumber){
        response.send(`Please input a number`);
    }else{

        response.send(`the answer is ${theProduct}`);
    };
});

app.listen(port,()=>{
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`App is listening on port ${port} at ${hours}:${minutes}:${seconds}`);
});