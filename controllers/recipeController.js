const Recipe = require('../models/Recipe')
const { v4: uuid } = require('uuid')
const path = require('path')

class recipeController {
    async index(req, res) {
        try {
            const page = req.query.page ?? 1;
            const categories = req.query?.categories ? { categories: req.query.categories } : {};

            const recipes = await Recipe.find(categories)
            return res.json({
                data: recipes
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async show(req, res) {
        const _id = req.params.id
        try {
            const recipe = await Recipe.findOne({ _id }, { __v: 0 })
            return res.json(recipe)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req, res) {
			/*if (!req.files.background) {
				res.json(400).json({
					message: 'Background was not loaded'
				})
			}*/
	
        const { name, shortDescription, ingredients, timePreparing, categories, steps } = req.body

        /*const backgroundUrl = `${req.user.id}/${uuid() + path.extname(req.files.background.name)}`
        const filePath = path.join(
            __dirname,
            '../public/images',
            backgroundUrl,
        )*/

        //req.files.background.mv(filePath)

        const ingredientsVal = []

        for (const ingredientItem of ingredients.split(';1-)32;')) {
            const [count, ingredient] = ingredientItem.split(',')
            ingredientsVal.push({ count, ingredient })
        }

        await Recipe.create({
            name,
            shortDescription,
            ingredients: ingredientsVal,
            timePreparing,
            categories: categories.split(','),
		     steps: steps.split(','),
        })

        return res.json({
            message: 'recipe created'
        })
    }
}

module.exports = new recipeController()