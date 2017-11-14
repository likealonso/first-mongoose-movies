var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies')
/* GET users listing. */

// GET /movies
router.get('/', moviesCtrl.index);
//GET/movies/new
router.get('/new', moviesCtrl.new);
// POST /movies
router.post('/', moviesCtrl.create);
// DELETE /movies/:id
router.delete('/:id', moviesCtrl.destroy);
// GET /movies/:id/edit
router.get('/:id/edit', moviesCtrl.edit);
//PUT /movies/:id
router.put('/:id', moviesCtrl.update);

router.get('/:id', moviesCtrl.show);

module.exports = router;
