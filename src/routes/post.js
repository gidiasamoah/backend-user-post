const express = require('express');
const router = express.Router();
const PostController = require('../controllers/posts.controller'); // Import your controller module here

// Define the route for creating a new post
router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getAllPosts);
router.get('/user/:userId/posts', PostController.getUserPosts);

module.exports = router;
