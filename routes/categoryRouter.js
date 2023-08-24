const { Router } = require('express')
const categoryController = require('../controllers/categoryController')
const authMiddleware = require('../middleware/authMiddleware')
const { categoryValidator } = require('../utils/validators')

const router = new Router()

//router.get('/categories', authMiddleware, categoryController.index)
router.get('/categories', categoryController.index)
router.post('/categories', [authMiddleware, ...categoryValidator], categoryController.create)

module.exports = router