"use strict"

const bodyTag = document.querySelector("body");


const url = `https://api.github.com/search/repositories?q=user:`;

const names = ['STEP0HEN', 'AkoAyukngat','DeepthiDukka']

const promises = [];

const fetchData = (name)=> {
    promises.push(fetch(`${url}${name}`))
}

names.map(fetchData)
console.log(promises)

const myClassmatesApi = () => {
    return Promise.all(promises)
    .then(responses => {
        const data = responses.map(response => response.json())
        console.log(responses)
        return Promise.all(data);
    });
};

myClassmatesApi()
.then((result) => {
  const info = result.map((res) => res.items[0]);
  console.log(info);
  info.forEach((data) => {
    const liTag = document.createElement("li");
    bodyTag.appendChild(liTag);
    liTag.textContent =`Full name : ${data.full_name}, repos url : ${data.owner.repos_url}, owner : ${data.owner.login}`;
  });
})
.catch(err => console.log("error", err));
