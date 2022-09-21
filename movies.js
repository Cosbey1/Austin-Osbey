"use strict";

// URL for Glitch fake Movies API
const urlGlitch = 'https://hissing-acute-crafter.glitch.me/movies'

// Example of creating an options object - best practice may be to make one for each type of request we are attempting.
// const options = {
//     method: 'POST', // this changes to get post or get or put or patch
//     headers: {
//         'Content-Type': 'application/json', // leave this header alone for all the options objects we make
//     },
//     body: JSON.stringify(blogPost), // blogPost will change to include details about what we are stringifying
// };

// GRAB MOVIE TILES CONTAINER
const movieTileContainer = document.querySelector("#movie-tiles-container");
const createTile = document.createElement("div");


// GET ALL MOVIE DATA
const getMoviesData = async () => {
    try {
        const res = await axios.get(urlGlitch);
        return res.data;
    } catch (e) {
        console.log("ERROR", e);
    }
};

const allMovieData = getMoviesData();

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

const allMoviesAdded = async () => {
        const movieText = await getMoviesData();
        for (let movie of allMovieData) {
            createTile.append(movieText)
            movieTileContainer.append(createTile);
        }
};