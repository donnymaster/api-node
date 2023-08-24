const { Router } = require('express')
const favoriteController = require('../controllers/favoriteController')
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router()

router.get('/favorites', authMiddleware, favoriteController.index)
router.get('/favorites/add/:id', authMiddleware, favoriteController.add)

module.exports = router