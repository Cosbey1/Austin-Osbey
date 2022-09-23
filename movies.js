"use strict";
function testButton () {
    try {
        console.log('the button click ran the function')
    } catch (e) {
        console.log(`delete button onclick, ${e}`)
    }
}
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
        console.log('loop')
        const createTile = document.createElement("div")
        createTile.setAttribute("class", "card movie-tile");
        createTile.setHTML
        (`<p>${movie.title}</p>
            <p>${movie.rating}</p>
            <p>${movie.director}</p>
            <div>
             <button class="cardButton ms-1" type="button">
                  <i class="fa-solid fa-wand-magic-sparkles"></i> Edit</button>
             <button class="cardButtonDelete" id="${movie.id}" onclick="deleteRequest(movie.id)" type="button">Delete</button>
</div>`
        );
        movieTileContainer.append(createTile)
    }
    getDelete(); // running the get delete here successfully gets all the buttons
};

allMoviesAdded();


function getDelete() {
    const deleteButtons = document.querySelectorAll('.cardButtonDelete')
    for (let button of deleteButtons) {
        let movieId = button.id
        button.addEventListener("click", deleteRequest(movieId))
        console.log(button)
    }};


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
        const res = axios.post(urlGlitch, {
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
"use strict";
function testButton () {
    try {
        console.log('the button click ran the function')
    } catch (e) {
        console.log(`delete button onclick, ${e}`)
    }
}
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
        console.log('loop')
        const createTile = document.createElement("div")
        createTile.setAttribute("class", "card movie-tile");
        createTile.setHTML
        (`<p>${movie.title}</p>
            <p>${movie.rating}</p>
            <p>${movie.director}</p>
            <div>
             <button class="cardButton ms-1" type="button">
                  <i class="fa-solid fa-wand-magic-sparkles"></i> Edit</button>
             <button class="cardButtonDelete" id="${movie.id}" onclick="deleteRequest(movie.id)" type="button">Delete</button>
</div>`
        );
        movieTileContainer.append(createTile)
    }
    getDelete(); // running the get delete here successfully gets all the buttons
};

allMoviesAdded();


function getDelete() {
    const deleteButtons = document.querySelectorAll('.cardButtonDelete')
    for (let button of deleteButtons) {
        let movieId = button.id
        button.addEventListener("click", deleteRequest(movieId))
        console.log(button)
    }};


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
        const res = axios.post(urlGlitch, {
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
    // await deleteMovie()
    movieTileContainer.setHTML(``);
    allMoviesAdded();
};

const deleteRequest = async (id) => {
    try {
        console.log(`${urlGlitch}/${id}`)
        // const res = axios.delete(`${urlGlitch}/${id}`)
        //     console.log('WINNING')
        //     return res.status
    } catch (e) {
        console.log(`delete request failed, ${e}`)
    }
}