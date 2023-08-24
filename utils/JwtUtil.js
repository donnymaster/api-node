const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { secret, expiresIn } = require('../config')

class JwtUtil {
    static verify(token) {
        return jwt.verify(token, secret)
    }

    static generateAccessToken(id) {
        return jwt.sign({ id }, secret, { expiresIn })
    }
}

module.exports = JwtUtil