const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { SALT_VALUE } = require('../config')

class userController {
    async update(req, res) {
        const { username, password, telegram, email } = req.body
        const _id = req.user.id
        try {
            const user = User.find({ _id })

            await User.updateOne({ _id }, {
                email,
                username,
                password: bcrypt.hashSync(password, SALT_VALUE),
                telegram,
            })

            return res.json({
                message: 'Data has been updated'
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    async me(req, res) {
        const _id = req.user.id
        try {
            const user = await User.findOne({ _id }, { password: 0, __v: 0 })

            return res.json(user)
        } catch (error) {
            return res.json(500).json({
                message: error.message
            })
        }
    }
}

module.exports = new userController()