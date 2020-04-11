"use strict"

const timeInput = document.querySelector('#numberInput');
const gameStart = document.querySelector('#btn1')
const playerS = document.querySelector('.player-S')
const playerL = document.querySelector('.player-L')
const result = document.querySelector('.result')
const restart = document.querySelector('.restart')

let counterL = 0;
let counterS = 0;

//Start game getting timeInput from players.. rendering result after time up
function beginGame () {
    setTimeout(()=>{
if(!timeInput.value){
    alert('please enter time to play game')
}else alert('Game over')

const gameResult = () => {
    if(counterS > counterL) {
        result.innerHTML = `Player S is the fastest typer on the planet. Congrats!!`
    }
    if (counterL > counterS) {
        result.innerHTML = `Player L is the fastest typer on the planet. Congrats!!`
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
        playerS.innerHTML = `${counterL}`
        console.log(`${counterL}`)
    }
    if(keyboardPress.key === 's') {
        counterS++
        playerS.innerHTML = `${counterS}`
        console.log(`${counterS}`)
    }
}

document.addEventListener('keypress',keyPressCount)


//Restart section
function startOver () {
    location.reload()
}
restart.addEventListener('click',startOver)