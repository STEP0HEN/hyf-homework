"use strict"

//Cool api

//This api's data structure is an object of strings(key & value pairs).It has strings as keys, then numbers,strings and booleans as values.
// It takes a users ip address as input and logs their location and what devices they're browing on.
//It is public and you don't need an api key to use it. 
const locationUrl = `http://ip-api.com/json/`
fetch(locationUrl)
.then(response => response.json())
.then(result => console.log(result))



//Giphy api

const bodyTag = document.querySelector("body")
const searchInput = document.querySelector("#searchword")
const searchButton = document.querySelector(".search-button")
const imageField = document.querySelector(".imagefield")
const gifDisplayNumbers = document.querySelector("#gifdisplayNumbers")


function searchGiphy () {
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=QKwVcuiXw4O37g5TZ2t3ZU1MEtRB2h93&q=${searchInput.value}&limit=${gifDisplayNumbers.value}&offset=0&rating=G&lang=en`
    fetch(giphyUrl)
    .then(response => response.json())
    .then(giphyData => {
        const giphyArray = giphyData.data;
        const gifImages = giphyArray.map(fetchImagePreview => {
            return fetchImagePreview.images.preview_gif.url
        }).forEach(imagesPreview => {
            const createImageTag = document.createElement("img")
            createImageTag.setAttribute("src",imagesPreview);
            imageField.appendChild(createImageTag)
        })
    })
}

searchButton.addEventListener("click",searchGiphy)