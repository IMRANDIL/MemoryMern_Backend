const { getAllPosts, createPosts } = require('../controllers/posts');

const router = require('express').Router();



router.route('/').get(getAllPosts).post(createPosts);

router.route('/:id').get().patch().delete();








module.exports = router;