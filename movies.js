"use strict";

function testButton() {
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

// GRAB ADD MOVIE FORM
const addForm = document.querySelector('#addMovieForm')

const refreshMovieList = async () => {
    await getAddValues();
    // await deleteMovie()
    //await movieTileContainer.setHTML('');
    await allMoviesAdded();
    await addForm.reset();

};
// ADD MOVIE DATA TO SERVER (POST REQUEST)
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
    movieTileContainer.setHTML(``);
    let allMovieData = await getMoviesData()
    for (let movie of allMovieData) {
        console.log('loop')
        const createTile = document.createElement("div")
        createTile.setAttribute("class", "card movie-tile");
        createTile.setHTML
        (` <div class="container">
                        <div class="cardcontainer">
                            <div class="photo">
                                <!--movie info section-->
                                <div class="content">
                                    <h1 class="title">${movie.title}</h1>
                                    <h4 class="director">${movie.director}</h4>
                                </div>
                                <div class="footer">
             <button class="cardButton ms-1" type="button">
                  <i class="fa-solid fa-wand-magic-sparkles"></i> Edit</button>
             <button class="cardButtonDelete" id="${movie.id}" onclick="deleteRequest(movie.id)" type="button"><i class="fa-solid fa-trash-can"></i>Delete</button>
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
        button.addEventListener("click", function () {
            deleteRequest(movieId)
        }, false)
        //console.log(button)
    }


// SHOW/HIDE LOADER AND MOVIES
// TIMEOUT FUNCTION
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

// HIDE LOADER
    const toggleLoading = async () => {
        await timeout(1200)
        let loader = document.querySelector('#loader-container')
        loader.classList.add('hidden')
    }


// SHOW MOVIE CONTAINER
    const showMovies = async () => {
        // await timeout(1300)
        let movieContainer = document.querySelector('#movie-container')
        movieContainer.classList.remove('hidden')
    }

    const mainFunc = async () => {
        await toggleLoading();
        await showMovies();
    }

    mainFunc()
// END SHOW / HIDE LOADER & MOVIES


//DELETE MOVIE FUNCTION
    async function deleteRequest(id) {
        try {
            await axios.delete(`${urlGlitch}/${id}`)
            await timeout(1200)
            console.log('WINNING')
            allMoviesAdded()
        } catch (e) {
            console.log(`delete request failed, ${e}`)
        }
    }
}





