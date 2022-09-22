"use strict";

// URL for Glitch fake Movies API
const urlGlitch = 'https://hissing-acute-crafter.glitch.me/movies'

// GRAB MOVIE TILES CONTAINER
const movieTileContainer = document.querySelector("#movie-tiles-container");


// GET ALL MOVIE DATA
const getMoviesData = async () => {
    try {
        const res = await axios.get(urlGlitch);
        return res.data;
    } catch (e) {
        console.log("ERROR", e);
    }
};


// GET MOVIE INFO SPECIFIC ID
const getMovieInfo = async () => {
    try {
        const res = await axios.get(`https://hissing-acute-crafter.glitch.me/movies/?id=1`);
        return res.data[0].title;
    } catch (e) {
        return `It's broken, fix it! ${e}`;
    }
};
// ADD NEW DIV INTO MOVIE TILE CONTAINER
const addNewMovie = async () => {
    const movieText = await getMovieInfo();
    console.log(movieText)
    createTile.append(movieText);
    movieTileContainer.append(createTile);
};

// ADD ALL MOVIE TILES ON PAGE
const allMoviesAdded = async () => {
    const allMovieData = await getMoviesData()
    for (let movie of allMovieData) {
        const createTile = document.createElement("div")
        createTile.setAttribute("class", "card movie-tile");
        createTile.setHTML
        (`<p>${movie.title}</p>
            <p>${movie.rating}</p>
            <p>${movie.director}</p>
        `);
        movieTileContainer.append(createTile);
    }
};

allMoviesAdded();

const toggleLoading = () => {
    allMoviesAdded()
    let loader = document.querySelector('#loader-container')
    loader.classList.toggle('hidden')
}
toggleLoading()
// const showMovies = async () => {
//     await toggleLoading()
//     let movieContainer = document.querySelector('#loader-container')
//     movieContainer.classList.toggle('hidden')
// }
// showMovies();