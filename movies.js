"use strict";


// URL for Glitch fake Movies API
const urlGlitch = 'https://hissing-acute-crafter.glitch.me/movies'

// GRAB MOVIE TILES CONTAINER
const movieTileContainer = document.querySelector("#movie-tiles-container");

// GRAB ADD MOVIE FORM
const addForm = document.querySelector('#addMovieForm')

//REFRESH MOVIE RUNS ON THE CLICK OF 'SAVE' IN ADD NEW MOVIE
const refreshMovieList = async () => {
    await getAddValues(); // post request for the new movie
    // await deleteMovie()
    //await movieTileContainer.setHTML('');
    await allMoviesAdded(); // get all movie data and populate cards
    await addForm.reset(); // resets the form so fields empty

};

// ADD NEW MOVIE DATA TO SERVER (POST REQUEST)
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

// GET ALL MOVIE DATA -- GET REQUEST FOR ALL MOVIE DATA FROM GLITCH
const getMoviesData = async () => {
    try {
        const res = await axios.get(urlGlitch);
        return res.data; // res = an array with each movie as an object
    } catch (e) {
        console.log("ERROR", e);
    }
};

// ADD ALL MOVIE TILES ON PAGE
const allMoviesAdded = async () => {
    movieTileContainer.setHTML(``);
    let allMovieData = await getMoviesData() // runs get request for all movies from glitch
    for (let movie of allMovieData) {
        console.log('loop')
        const createTile = document.createElement("div") //creates a div for every movie in the datalist
        createTile.setAttribute("class", "card movie-tile"); //sets attributes for card
        createTile.setHTML // sets all html inside new moviecard div
        (` <div class="container">
                        <div class="cardcontainer">
                            <div class="photo">
                                <!--movie info section-->
                                <div class="content">
                                    <h1 class="title">${movie.title}</h1>
                                    <h4 class="director">${movie.director}</h4>
                                </div>
                                <div class="footer">
             <button class="cardButtonEdit ms-1" id="edit${movie.id}" type="button">
                  <i class="fa-solid fa-wand-magic-sparkles"></i> Edit</button>
             <button class="cardButtonDelete" id="${movie.id}" type="button"><i class="fa-solid fa-trash-can"></i>Delete</button>
</div>`
        );
        movieTileContainer.append(createTile) // adds all the new creatTile divs into the movie til container
    }
    getDelete(); // running the get delete here associates the movie id with its button
};

allMoviesAdded(); // initial call to retrieve all the movie data and populate the cards


function getDelete() { // this adds the event listener to each particular button and passes the deleterequest function with the id as a parameter
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





