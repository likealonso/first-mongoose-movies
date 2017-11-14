var Movie = require('../../models/movie');

function getAllMovies (req, res) {
    Movie.find({}, function(err, movies) {
        res.status(200).json(movies);
    })    
}

function getOneMovie (req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        res.status(200).json(movie);
    })
}

function createMovie (req, res) {
    Movie.create(req.body, function(err, movie) {
        res.status(201).json(movie)
    });
}

function updateMovie (req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, movie) {
        res.status(200).json(movie);
    })
}

function deleteMovie (req, res) {
    Movie.findByIdAndRemove(req.params.id, function(err, movie){
        res.status(200).json(movie);
    })
}

module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    updateMovie,
    deleteMovie
}