//Promise that resolves after set time

const PromiseloggedAfterSetTime = (resolveAfter) => {
    return new Promise (resolve => setTimeout(resolve, resolveAfter * 1000)
       )
}

PromiseloggedAfterSetTime(3)
.then(()=> console.log('I am called asynchronously'));

async function PromiseloggedAfterSetTimeWithAsync () {
    await PromiseloggedAfterSetTime(7)
    return
};
PromiseloggedAfterSetTimeWithAsync()
.then(()=> console.log("I'm called asynchronously too"))



//Rewrite time

const setTimeoutPromise = (resolveAfter) => {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve()
        },resolveAfter)
    })
}

setTimeoutPromise(3000)
.then(() => {
    console.log(`Called after 3 seconds`);
});



   const getCurrentLocation = () => {
       return new Promise((resolve, reject) => {
           navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    };

    getCurrentLocation()
    .then((position) => console.log(position))
    .catch((error) => console.log(error));
  
    
//Fetching and waiting

const boredUrl = `http://www.boredapi.com/api/activity/`

fetch(boredUrl)
.then(response => response.json())
.then(result => {    
    return new Promise (resolve => {
        setTimeout(() => resolve(result), 3000)
    })
})
.then((result => console.log(result)))

// Fetching and waiting with async/ await

const boredUrlAsync = async () => {
    try {
        const response = await fetch(boredUrl)
        const result = await response.json()
         setTimeout(()=>console.log(result), 3000)
        
    } catch (error) {
        console.log("oops something went wrong", error)
    }
}
boredUrlAsync()