"use strict"

const timeInput = document.querySelector('#numberInput');
const gameStart = document.querySelector('#btn1')
const playerS = document.querySelector('.player-S')
const playerL = document.querySelector('.player-L')
const result = document.querySelector('.result')
const restart = document.querySelector('.restart')
const newUlTag = document.createElement('ul')
const ulTag = document.createElement('ul')
playerS.appendChild(newUlTag)
playerL.appendChild(ulTag)

let counterL = 0;
let counterS = 0;

//Start game getting timeInput from players.. rendering result after time up
function beginGame () {
    setTimeout(()=>{
if(!timeInput.value){
    alert('please enter time to play game')
    !gameResult
}else alert('Game over')

const gameResult = () => {
    if(counterS > counterL) {
        result.innerHTML = `Player S won the game. Congrats!!`
    }
    if (counterL > counterS) {
        result.innerHTML = `Player L won the game. Congrats!!`
    }
    if (counterS === counterL) {
        result.innerHTML = `It was a tie.`
    }
}
gameResult();
},timeInput.value *1000)


}

gameStart.addEventListener('click', beginGame)

//Keypress counter
function keyPressCount (keyboardPress) {
    if(keyboardPress.key === 'l') {
        counterL++
        ulTag.innerHTML = `${counterL}`
        console.log(`${counterL}`)
    }
    if(keyboardPress.key === 's') {
        counterS++
        newUlTag.innerHTML = `${counterS}`
        console.log(`${counterS}`)
    }
     if (!timeInput.value){
        ulTag.innerHTML = null
        newUlTag.innerHTML = null
        counterS = null
        counterL = null
    }
}

document.addEventListener('keypress',keyPressCount)


//Restart section
function startOver () {
    location.reload()
}
restart.addEventListener('click',startOver);