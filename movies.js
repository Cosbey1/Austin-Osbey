"use strict";

// URL for Glitch fake Movies API
const urlGlitch = 'https://hissing-acute-crafter.glitch.me/movies'

// GRAB MOVIE TILES CONTAINER
const movieTileContainer = document.querySelector("#movie-tiles-container");


// GET ALL MOVIE DATA
const getMoviesData = async () => {
    try {
        const res = await axios.get(urlGlitch);
        return res.data; // res = an array with each movie as an object
    } catch (e) {
        console.log("ERROR", e);
    }
};
// ??? Need to save res from above as a global variable so I can write an if stmt that checks if its a repeat, and displays if its not.

// ADD ALL MOVIE TILES ON PAGE
const allMoviesAdded = async () => {
    let allMovieData = await getMoviesData()
    for (let movie of allMovieData) {
        const createTile = document.createElement("div")
        createTile.setAttribute("class", "card movie-tile");
        createTile.setHTML
        (`<p>${movie.title}</p>
            <p>${movie.rating}</p>
            <p>${movie.director}</p>
            <div>
             <button class="cardButton ms-1" type="button">
                                        <i class="fa-solid fa-wand-magic-sparkles"></i> Edit</button>
                                    <button class="cardButton" type="button">
                                        <i class="fa-solid fa-trash-can"></i> Delete</button>
</div>
        `);
        movieTileContainer.append(createTile);
    }
};

allMoviesAdded();

// SHOW/HIDE LOADER AND MOVIES
// TIMEOUT FUNCTION
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// HIDE LOADER
const toggleLoading = async () => {
    await timeout(1200)
    let loader = document.querySelector('#loader-container')
    loader.classList.toggle('hidden')
}
toggleLoading();

// SHOW MOVIE CONTAINER
const showMovies = async () => {
    await timeout(1300)
    let movieContainer = document.querySelector('#movie-container')
    movieContainer.classList.toggle('hidden')
}
showMovies();
// END SHOW / HIDE LOADER & MOVIES


// ADD NEW MOVIE FORM -- adds new movie to database, does not show up on page until reload though
const getAddValues = async () => {
    try {
        const director = document.querySelector("#director").value;
        const title = document.querySelector('#movieTitle').value;
        const rating = document.querySelector('#rating').value;
        const res = axios.post(`glitchURL`, {
                title: `${title}`,
                director: `${director}`,
                rating: `${rating}`
        });
        console.log(`you did it`)
        return res;
    } catch (e) {
        return `add Movie is broken, fix it! ${e}`
    }
};

const refreshMovieList = async () => {
    await getAddValues();
    movieTileContainer.setHTML(``);
    allMoviesAdded();
}

const deleteMovie = async () => {

}




