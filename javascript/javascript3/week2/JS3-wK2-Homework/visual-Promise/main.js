//Moving element with 

const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');



const translateOnebyOne = () => {
    return new Promise(() => {
        moveElement(redBox, {x: 20, y: 300})
        .then(() => {
            console.log('red element has been moved');
            return moveElement(blueBox,{x: 400, y: 300})
        })
        .then(() => {
            console.log('Blue element has been moved');
            return moveElement(greenBox, {x: 400, y: 20})
        .then(() => {console.log('Green lement has been moved');
        });
    })
});
};
                
translateOnebyOne()


   //Using promise.all to move boxes
   
const translateAllAtOnce = () => {
       const redCircleTarget = moveElement(redBox, {x: 20, y: 300}); 
       const blueCircleTarget = moveElement(blueBox, {x: 400, y: 300});
       const greenCircleTarget = moveElement(greenBox, {x: 400, y: 20});
       return Promise.all([redCircleTarget,blueCircleTarget,greenCircleTarget])
}

translateAllAtOnce()
.then(()=> console.log("elements moved to target"))