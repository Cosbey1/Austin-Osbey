// addMovieForm.onsubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(addMovieForm)
//     console.log(data)
// }

// const addMovieSave = async () => {
//         const newMovieData =document.querySelector('#addMovieForm');
//        const data = new FormData(newMovieData);
//         console.log(data)}

// const addMovieSave = e => {
//     e.preventDefault();
//     try {
//         const res = document.querySelector('#addMovieForm').submit();
//         console.log(res)
//         console.log('hello')
//     } catch (e) {
//         return `Movie save is broken, fix it! ${e}`;
//     }
// };


// const getMovieForm = () => {document.querySelector('#addMovieForm').submit()}



// const addForm = document.getElementById('addMovieForm');
// const addFormData = new FormData(addForm);
//
// for (const [key, value] of addFormData) {
//     output.textContent += `${key}: ${value}\n`;
// }

// -- THIS WORKS, just dont need a hard coded get request
// ADD MOVIE POST REQUEST
// const postNewMovie = async () => {
//     try {
//         const res = axios.post('https://hissing-acute-crafter.glitch.me/movies/', {
//                 title: 'Fred',
//                 director: 'Flintstone',
//                 rating: `9.9`
//         });
//         return res;
//     } catch (e) {
//         return `It's broken, fix it! ${e}`;
//     }
// };
// postNewMovie();

// ADD NEW DIV INTO MOVIE TILE CONTAINER --- new thing to only add the newly added movie --- adds all the movies from the database all over again
// const addNewMovie = async () => {
//     const newMovie = await getMovieInfo();
//     const createTile = document.createElement("div")
//     createTile.setAttribute("class", "card movie-tile");
//     createTile.setHTML
//     (`<p>${newMovie.title}</p>
//             <p>${newMovie.rating}</p>
//             <p>${newMovie.director}</p>
//         `);
//     movieTileContainer.append(createTile);
// };




