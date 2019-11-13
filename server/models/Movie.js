const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MovieSchema = new Schema ({
    id: Number,
    title: String,
    rating: Number,
    poster: String
})

const Movie = mongoose.model("movie", MovieSchema)
         
module.exports = Movie