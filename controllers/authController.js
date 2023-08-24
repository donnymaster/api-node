const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { StatusCodes } = require('http-status-codes')
const JwtUtil = require('../utils/JwtUtil')
const { SALT_VALUE } = require('../config')
const { validationResult } = require('express-validator')

class authController {
    async register(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(StatusCodes.BAD_REQUEST).json(errors)
            }

            const { username, password, telegram, email } = req.body
            const candidate = await User.findOne({ username })

            if (candidate) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: 'User with this name exists!'
                })
            }

            const hashPassword = bcrypt.hashSync(password, SALT_VALUE)
            const user = new User({ email, username, password: hashPassword, telegram })
            await user.save()

            const token = JwtUtil.generateAccessToken(user._id)
            return res.json({ token })

        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: error.message,
                nameError: error.name,
            })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })

            if (!user) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: 'User not found'
                })
            }
            const isValidPassword = bcrypt.compareSync(password, user.password)
            if (!isValidPassword) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: 'Wrong password'
                })
            }

            const token = JwtUtil.generateAccessToken(user._id)
            return res.json({ token })

        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: error.message,
                nameError: error.name,
            })
        }
    }
}

module.exports = new authController()