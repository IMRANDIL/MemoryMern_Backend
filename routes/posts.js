const { getAllPosts, createPosts, updatePosts } = require('../controllers/posts');

const router = require('express').Router();



router.route('/').get(getAllPosts).post(createPosts);

router.route('/:id').get().patch(updatePosts).delete();








module.exports = router;