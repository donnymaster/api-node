const { Router } = require('express')
const ingredientController = require('../controllers/ingredientController')
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router()

router.get('/ingredients', ingredientController.index)

module.exports = router