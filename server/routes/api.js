const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')
const request = require("request")
const apiKey = "5bb8146f0252abc6e5b24ae35e939485"

router.get('/test', function (req, res) {
    res.send("Hello")
})


//getting a json about a movie
router.get('/movie/:movieName', function (req, res) {
    let movieName = req.params.movieName

    request(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`, function (err, response) {
        let movieData = JSON.parse(response.body)
        let filteredData = movieData.results
        res.send(filteredData)
    })
})


//show favorites movies
router.get('/movies', async function (req, res) {
    const movies = await Movie.find({})
    res.send(movies)
})


//save a movie to DB --favorite movie
router.post('/movie', async function (req, res) {
    let body = req.body
    let m1 = new Movie(body)
    await m1.save()
    res.send(`Movie: ${m1.title} saved in DB`)
})


//deleting from favorite db
router.delete('/movie/:MovieID', async function (req, res) {
    let movieID = req.params.MovieID
       let deleteMovie = await Movie.remove({
        id: movieID
    })
    res.send(`Movie: ${deleteMovie.id} deleted from DB`) 
})



 
module.exports = router   