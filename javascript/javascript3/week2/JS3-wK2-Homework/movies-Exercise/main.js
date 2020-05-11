"use strict"


//Movies exercise

const moviesUrl = `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`

fetch(moviesUrl)
.then(res => res.json())
.then( result => {
    console.log(result)
    const badMovies = result.filter(movie => movie.rating < 5)
    console.log(badMovies)
    
    const badMoviesSince2000 = badMovies.filter(film => film.year > 2000)
    console.log(badMoviesSince2000)
}) 