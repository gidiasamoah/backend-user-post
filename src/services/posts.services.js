const { addPost, fetchAllPost} = require('../queries/posts');
const { runQuery } = require('../config/database.config');




const addNewPost = async (userId, postTitle, postText) => {
  try {
    
    const result = await runQuery(addPost, [postTitle, postText, userId]);

    return result;
  } catch (error) {
    
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
  