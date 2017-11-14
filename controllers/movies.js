var Movie = require('../models/movie');

function index (req,res) {
    Movie.find({}, function(err,movies){
        res.render('movies/index', { movies })
    });
}

function newMovie (req,res) {
    res.render('movies/new');
}

function create(req,res){
if (!req.body.nowShowing) req.body.nowShowing = false;

req.body.cast = req.body.cast.replace(/\s*, \s*/g, ',');

if (req.body.cast) req.body.cast = req.body.cast.split(',');
for (var key in req.body) {
    if (req.body[key] === '') delete req.body[key];
}

var movie= new Movie(req.body);
movie.save(function(err){

    if (err) return res.render('movies/new');
    console.log(movie);

    res.redirect('/movies');
});
}

function bye (req, res){
    console.log('HELLO!!!!!!')
    Movie.findByIdAndRemove(req.params.id, function(err){
    res.redirect('/movies')
    });
    
}

function edit(req,res){
    Movie.findById(req.params.id, function(err, movie) {
        console.log('movie =', movie)
        res.render('movies/edit', { movie });
    });
    
}

function update(req, res){
    console.log('HELLLOOOOO!!!!!!')
    // Movie.findById(req.params.id, function (err, movie) {
    //     if (err) console.log('handle err', err)
    //     if (req.body.title) movie.title = req.body.title
    //     if (req.body.rating) movie.rating = req.body.rating

    //     movie.save(function (err, movie) {
    //         if (err) console.log('handle me ', err)
    //         res.redirect('/movies')
    //     })

    // });

    Movie.findByIdAndUpdate(req.params.id, req.body, function(err, movie){
        res.redirect('/movies')
    })

}

function show(req, res) {
    Movie.findById(req.params.id, function(aa,movie){
        res.render('movies/show', { movie })
    });
}

module.exports = {
    index,
    new: newMovie,
    create,
    destroy: bye,
    edit,
    update,
    show
};