"use strict";
// URL for Glitch fake Movies API
const urlGlitch = 'https://hissing-acute-crafter.glitch.me/movies'

// Example of creating an options object - best practice may be to make one for each type of request we are attempting.
const options = {
    method: 'POST', // this changes to get post or get or put or patch
    headers: {
        'Content-Type': 'application/json', // leave this header alone for all the options objects we make
    },
    body: JSON.stringify(blogPost), // blogPost will change to include details about what we are stringifying
};