const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedMovies` array in User.js
const movieSchema = new Schema({
    // saved movie id from IMDB 
    movieId: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    description: {
    type: String,
    required: true,
    },

    image: {
        type: String,
    },
    //***might not need? */
    link: {
        type: String,
    },

});

module.exports = movieSchema;
