const { Router } = require('express')
const recipeController = require('../controllers/recipeController')
const authMiddleware = require('../middleware/authMiddleware')
const { recipeValidator } = require('../utils/validators')

const router = new Router()

router.get('/recipes', authMiddleware, recipeController.index)
router.get('/recipes/:id', authMiddleware, recipeController.show)
router.post('/recipes/create', [authMiddleware, ...recipeValidator], recipeController.create)

module.exports = router