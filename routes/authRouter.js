const { Router } = require('express')
const authController = require('../controllers/authController')
const { userValidator } = require('../utils/validators')

const router = new Router()

router.post('/register', userValidator, authController.register)
router.post('/login', authController.login)

module.exports = router