const PostService = require('../services/posts.services'); 

// Create a new post
const createPost = async (req, res, next) => {
  try {
    const { title, text, user_id } = req.body;

    
    const newPost = await PostService.addNewPost({ title, text, user_id });

    res.status(201).json({
      status: 'success',
      message: 'Post created successfully',
      data: newPost,
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};



const getAllPosts = async (req, res, next) => {
    try {
      const posts = await PostService.fetchAllPost();
      res.status(200).json({
        status: 'success',
        message: 'Posts fetched successfully',
        data: posts,
      });
    } catch (error) {
      next(error);
    }
  };



const getUserPosts = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const userPosts = await PostService.fetchUserPosts(userId);
    res.status(200).json({
      status: 'success',
      message: 'User posts fetched successfully',
      data: userPosts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getUserPosts
};
