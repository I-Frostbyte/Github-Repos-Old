const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


router.get('/', blogController.blog_index);

// Post request from create new blogs
router.post('/', blogController.blog_create_post);

// creating a new blog
router.get('/create', blogController.blog_create_get);


// Receiving a blog id
router.get('/:id', blogController.blog_details);

// deleting a blog

router.delete('/:id', blogController.blog_delete);


module.exports = router;