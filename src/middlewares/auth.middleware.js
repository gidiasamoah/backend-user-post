const jwt = require('jsonwebtoken');
const config = require('../config/env/index');
const { runQuery } = require('../config/database.config')
const { findUserbyUsername } = require('../queries/users');

const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    try {
        if (!token) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: 'Please supply token',
                data: null
            })
        }

        const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
        const { email } = decoded;
        const user = await runQuery(findUserbyUsername, [username]);
        if (user.length === 0) {
            throw {
                status: 'error',
                code: 400,
                message: 'User does not exist',
                data: null
            }
        }
        req.decoded = decoded;
        return next()
    } catch (error) {
        return next(error);
    }

}

module.exports =  {
    verifyToken
}