const categoryRouter   = require('./categoryRouter')
const recipeRouter     = require('./recipeRouter')
const ingredientRouter = require('./ingredientRouter')
const userRouter       = require('./userRouter')
const scanRouter       = require('./scanRouter')
const favoriteRouter   = require('./favoriteRouter')
const basketRouter   = require('./basketRouter')

module.exports = [
    categoryRouter,
    recipeRouter,
    ingredientRouter,
    userRouter,
    scanRouter,
    favoriteRouter,
	basketRouter,
]