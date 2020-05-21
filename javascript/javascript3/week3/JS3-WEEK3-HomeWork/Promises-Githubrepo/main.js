"use strict"

const bodyTag = document.querySelector("body");

const render = (item) => {
  const liTag = document.createElement("li");
  liTag.textContent = (item);
  bodyTag.appendChild(liTag)
};

const githubApi1 = `https://api.github.com/search/repositories?q=user:STEP0HEN`
const githubApi2 = `https://api.github.com/search/repositories?q=user:AkoAyukngat`
const githubApi3 = `https://api.github.com/search/repositories?q=user:DeepthiDukka`


const stephenApi = fetch(githubApi1)
const johnApi = fetch(githubApi2)
const deepthiApi = fetch(githubApi3)
const classmatesApi = [stephenApi, johnApi, deepthiApi]

const myClassmatesApi = () => {
    return Promise.all(classmatesApi)
    .then(response => {
        const jsonResponse1 = response[0].json();
        const jsonResponse2 = response[1].json();
        const jsonResponse3 = response[2].json();

        return Promise.all([jsonResponse1,jsonResponse2,jsonResponse3]);
    });
};

myClassmatesApi()
.then(result =>{
    const stepheninfo = [`Full name : ${result[0].items[0].full_name}`,
    `hyf-homework repo url : ${result[0].items[0].url}`,
     `Full name : ${result[0].items[1].full_name}`,
     `STEP-HEN repo url : ${result[0].items[1].url}`,
     `Full Name : ${result[0].items[2].full_name}`,
    `hyf-classwork repo url : ${result[0].items[2].url}`,
     `Owner : ${result[0].items[0].owner.login}`];

     const renderStephen = stepheninfo.forEach(render);
    
    const johnInfo = [`Full name : ${result[1].items[0].full_name}`,
    ` hyf-homework repo url : ${result[1].items[0].url}`, 
    `Owner : ${result[1].items[0].owner.login}`];

    const renderJohn = johnInfo.forEach(render);
    
    
    const deepthiInfo = [` Full name : ${result[2].items[0].full_name}`,
    `hyf-homework repo url : ${result[2].items[0].url}`,
    `Full Name : ${result[2].items[1].full_name}`,
    `deepthi repo url : ${result[2].items[1].url}`,
    `Owner: ${result[2].items[0].owner.login}`];

    const renderDeepthi = deepthiInfo.forEach(render)
     
   console.log(result)
}).catch(err => console.log("error", err));


