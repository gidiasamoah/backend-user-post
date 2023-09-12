const { addNewPost, fetchAllPost} = require('../queries/posts');
const { runQuery } = require('../config/database.config');



// Add a new post
const addNewPost = async (body) => {
    try {
      const { title, text, user_id } = body;
  
      const newPost = await db.one(
        'INSERT INTO posts(title, text, user_id) VALUES ($1, $2, $3) RETURNING *',
        [title, text, user_id]
      );
  
      return newPost;
    } catch (error) {
      // Handle any errors, e.g., database errors or validation errors
      throw error;
    }
  };



  const fetchAllPost = async () => {
    try {
 
      const posts = await db.any('SELECT * FROM posts');
  
      return posts;
    } catch (error) {
      
      throw error;
    }
  };


  const fetchUserPosts = async (userId) => {
    try {
      // Query the database to get a user's posts by user ID
      const userPosts = await db.any('SELECT * FROM posts WHERE user_id = $1', [userId]);
  
      return userPosts;
    } catch (error) {
    
      throw error;
    }
  };

  
  module.exports = {
    addNewPost,
    fetchAllPost,
    fetchUserPosts
  };
  