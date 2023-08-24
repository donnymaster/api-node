const Recipe = require('../models/Recipe')

class ingredientController {
    async index(req, res) {
        try {
            const ingredients = await Recipe.find({}, { ['ingredients.name']: 1 }).distinct('ingredients.name')
            return res.json(ingredients)
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

module.exports = new ingredientController()