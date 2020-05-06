"use strict"

const timeInput = document.querySelector('#numberInput');
const gameStart = document.querySelector('#btn1')
const playerS = document.querySelector('.player-S')
const playerL = document.querySelector('.player-L')
const result = document.querySelector('.result')
const restart = document.querySelector('.restart')
const playerSUlTag = document.querySelector('.player-s-count')
const PlayerLUlTag = document.querySelector('.player-l-count')
const alertMessage = document.querySelector('.alert-message')

let counterL = 0;
let counterS = 0;

//Start game getting timeInput from players.. rendering result after time up
function beginGame () {
    setTimeout(()=>{
if(!timeInput.value){
    alertMessage.innerHTML = 'please enter time to play game'
    !gameResult
}else {
    alertMessage.innerHTML = 'Game over'
}

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
        PlayerLUlTag.innerHTML = `${counterL}`
        console.log(`${counterL}`)
    }
    if(keyboardPress.key === 's') {
        counterS++
        playerSUlTag.innerHTML = `${counterS}`
        console.log(`${counterS}`)
    }
     if (!timeInput.value){
        playerSUlTag.innerHTML = null
        PlayerLUlTag.innerHTML = null
        counterS = null
        counterL = null
    }
}

document.addEventListener('keypress',keyPressCount)
