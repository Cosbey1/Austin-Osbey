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
const movieTile = document.querySelector("movie-tiles-container");

// GET ALL MOVIE DATA AND CONSOLE LOG
const getMoviesData = async () => {
    try {
        const res = await axios.get(urlGlitch);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR", e);
    }
};

getMoviesData();

// GET MOVIE INFO BY ID
const getMovieInfo = async () => {
    try {
        const res = await axios.get(`https://hissing-acute-crafter.glitch.me/movies/?id=260`);
        return res.data.title;
    } catch (e) {
        return "It's broken, fix it!";
    }
};


const addNewMovie = async () => {
    const movieText = await getMovieInfo();
    const createTile = document.createElement("div");
    createTile.append(movieText);
    movieTile.append(createTile);
};
