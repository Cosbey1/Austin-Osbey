// WORKING FUNCTIONS NOT NEEDED IN THE PROJECT AT THE MOMENT

// GET MOVIE INFO by SPECIFIC ID
    // Works only with hard coded url with specified query string
const getMovieInfo = async () => {
    try {
        const res = await axios.get(`https://hissing-acute-crafter.glitch.me/movies/?id=1`);
        return res.data[0];
    } catch (e) {
        return `It's broken, fix it! ${e}`;
    }

};

// ADD ALL MOVIE TILES ON PAGE
    // This works and is currently in use, however saving working copy here incase I break it while trying to fix it!
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

// FUNCTIONS TO TEST ONCLICK ATTRIBUTE OF BUTTON
const testButton = () => {
    console.log('the button click ran the function')
}

// GETS ALL THE DELETE BUTTONS AND ADDS EVENT LISTENER TO THE BUTTON
function getDelete() {
    const deleteButton = document.querySelectorAll('.cardButtonDelete')
    console.log(deleteButton)
    deleteButton[1].addEventListener('click', ()=> console.log('Hello World!'))
}

function getEdit() {
    const editButtons = document.querySelectorAll('.cardButtonEdit')
    for (let button of editButtons) {
        let movieId = button.id
        button.addEventListener("click", function () {
            console.log(movieId)
        }, false)
        //console.log(button)
    }}

//EDIT MOVIE FUNCTION - SENDS PATCH REQUEST
async function editRequest(id) {
    try {
        const director = document.querySelector("#editDirector").value;
        const title = document.querySelector('#editMovieTitle').value;
        const rating = document.querySelector('#editRating').value;
        const res = axios.post(urlGlitch/${movie.id}, {
            title: `${title}`,
            director: `${director}`,
            rating: `${rating}`
        });
        await axios.patch(`${urlGlitch}/${id}`)
        await timeout(1200)
        console.log('WINNING')
        allMoviesAdded()
    } catch (e) {
        console.log(`delete request failed, ${e}`)
    }
}






























async function fartsSmell (num) {
    // code I want to execute
    let totalStink = num * 1.75;
    return totalStink
}

fartsSmell(3);


