const JwtUtil = require('../utils/JwtUtil')

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const [, token] = req.headers.authorization.split(' ')

        if (!token) {
            return res.status(403).json({
                message : 'User is not authorized'
            })
        }
        req.user = JwtUtil.verify(token)
        next()
    } catch (error) {
        return res.status(403).json({
            message: 'User is not authorized'
        })
    }
}