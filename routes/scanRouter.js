const { Router } = require('express')
const scanController = require('../controllers/scanController')
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router()

router.get('/scan', authMiddleware, scanController.find)

module.exports = router