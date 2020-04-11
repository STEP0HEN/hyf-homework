"Use strict"


//Warm up One (logOut a text after 2.5 seconds)
const logout = function () {
setTimeout(()=>{console.log('called after 2.5 seconds')} ,2500)
};
logout();



//Warm up TWo (Function that takes two parameters delay & string to log)
function delayStringOutput(delay, stringToLog) {
    setTimeout(()=>{console.log(`${stringToLog}`)}, delay * 1000)
}

delayStringOutput(5,`This logs after 5 seconds`)
delayStringOutput(3,`This logs after 3 seconds`)



//Warm Up Three (button in html that logs out text after some seconds)
document.getElementById('btn').addEventListener('click', logout)





//Warm up four ( earth Logger, saturn logger & planet flogger functions)
const earthLogger = function () {
    console.log('Earth')
};
earthLogger();
const saturnLogger = function () {
    console.log('Saturn')
};
saturnLogger();

const planetLogFunction = function (planetLog) { planetLog()};
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);




//Log location button
const succes = function (pos) {
    let crd = pos.coords;
    console.log(`This is the Latitude : ${crd.latitude}`);
    console.log(`This is the Longitude: ${crd.longitude}`);

    const renderLocation = function () {
        ulTag.innerHTML = `This is the Latitude ${crd.latitude}, This is the Longitude: ${crd.longitude}`
    }
    renderLocation();

}
const userLocation = () => navigator.geolocation.getCurrentPosition(succes)
const bodyTag = document.querySelector('body');
const buttontag = document.createElement('button');
buttontag.innerHTML = 'Log Location'
bodyTag.appendChild(buttontag)

const ulTag = document.createElement('ul')
bodyTag.appendChild(ulTag)
buttontag.addEventListener('click',userLocation);



//WarmUp 7 (Runafterdelay Function)

function runAfterDelay (delay, callback) {
    setTimeout (()=>{callback()}, delay*1000)
}
runAfterDelay(6,()=>{console.log(`run after 6 seconds`)});
runAfterDelay(10,()=>{console.log(`run after 10 seconds`)});




//Warmup 8 ( check for double click)
const checkForDoubleClick = () => console.log('Double Click!');
document.addEventListener('dblclick',checkForDoubleClick); 




//Warm up Nine (JOKE CREATOR FUNCTION)

function logFunnyJoke() {
    const funnyJokes = ['what type of shoes do frogs wear : open toad', 'why can\'t a bike stand on it own : because it\'s two tired','why can\'t you trust an atom : because they make up everything' ]
    const randomFunnyJokes = Math.floor(Math.random() * funnyJokes.length)
    console.log(funnyJokes[randomFunnyJokes])
}

function logBadJoke() {
    const badJokes = ['This is a bad joke', 'this is another bad joke','and here goes the last bad joke']
    const randomBadJokes = Math.floor(Math.random() * badJokes.length)
    console.log(badJokes[randomBadJokes])
}
function jokeCreator(shouldTellFunnyJoke,logFunnyJoke, logBadJoke) {
    
    
    if(shouldTellFunnyJoke) {
        return logFunnyJoke();
    } else {
        return logBadJoke();
    }
}
jokeCreator(false, logFunnyJoke,logBadJoke);
jokeCreator(true, logFunnyJoke,logBadJoke);




//FUNCTIONS AS VARIABLES

//Calling functions in an array
const arrayOfFunctions = [

    function func1 () {
        console.log('I am array function one')
    },

    function func2 () {
        console.log( 'I am array function 2')
    },

    function func3 () {
        console.log('I am array function 3')
    }
]

arrayOfFunctions.forEach(logfunctions => logfunctions())



//Functions as const and normal function
const funcAsAConst = function () {
    console.log('I am a function as a constant variable')
}

function normalCreatedFunction () {
    console.log('I am a normal function')
}

funcAsAConst();
normalCreatedFunction();




//WarmUp 9 (Creating an object whose value is a function)

const keyWithFunctionValue = {key:()=>console.log('I am function as value to a key object')};
keyWithFunctionValue.key();