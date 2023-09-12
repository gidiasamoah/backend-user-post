/**
 * Add New User
 */
const addUser = `
  INSERT INTO users(
    firstname,
    lastname,
    password,
    
  )
  VALUES ($1,$2,$3,$4) RETURNING id, firstname, lastname, password
`;

const findUserbyUsername = `
 SELECT id, name, email, role, password FROM users WHERE email=$1
`

module.exports = {
    addUser,
    findUserbyUsername
}