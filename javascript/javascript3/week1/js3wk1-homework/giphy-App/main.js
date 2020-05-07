"use strict"

//Giphy api

const bodyTag = document.querySelector("body")
const searchInput = document.querySelector("#search-word")
const searchButton = document.querySelector(".search-button")
const imageField = document.querySelector(".image-field")
const gifDisplayNumbers = document.querySelector("#gif-display-numbers")


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