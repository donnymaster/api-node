const { Router } = require('express')
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router()

router.get('/baskets', authMiddleware, basketController.index)
router.get('/baskets/add/:id', authMiddleware, basketController.add)
router.get('/baskets/delete/:id', authMiddleware, basketController.delete)

module.exports = router