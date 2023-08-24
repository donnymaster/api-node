const { Router } = require('express')
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const { userValidator } = require('../utils/validators')

const router = new Router()

router.get('/user/me', authMiddleware, userController.me)
router.post('/user/update', [authMiddleware, ...userValidator], userController.update)

module.exports = router