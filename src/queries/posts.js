const addPost = `
    INSERT INTO posts(
        title,
        text,
        user_id
    ) VALUES ($1, $2, $3, $4) RETURNING id, title, text, user_id
`;

const fetchAllPost = `
SELECT * FROM posts;
`;


const fetchUserPost = `
SELECT * FROM posts WHERE user_id = $4;


`

const editPost = `
UPDATE posts
SET title = $1, text = $2 WHERE id = $3 AND user_id = $4
RETURNING id, title, text, user_id;



`

const deletePost = `
DELETE FROM posts
WHERE id = $1 AND user_id = $2;


`



module.exports = {

    addPost,
    fetchAllPost,
    fetchUserPost,
    editPost,
    deletePost
}


