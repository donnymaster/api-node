const Favorite = require('../models/Favorite')
const Recipe = require('../models/Recipe')

class favoriteController {
    async index(req, res) {
		const userId = req.user.id
		try {
           const values = await Favorite.find({user: userId})
		   
			const recipes = []
			
			for(let iter = 0; iter < values.length; ++iter) {
				const recipe = await Recipe.findOne({_id: values[iter].recipe})
				recipes.push(recipe)
			}
			
			 return res.json({
				data: recipes
			 })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async add(req, res) {
		const _id = req.params.id
		const userId = req.user.id
		
		try {
			const count = await Favorite.count({
				user: userId,
			   recipe: _id
			})
			
			if (count > 0) {
				return res.json({
					message: 'Ви вже додали цей рецепт'
				 })
			}
			
           await Favorite.create({
			   user: userId,
			   recipe: _id
		   })
			
			 return res.json({
				message: 'Рецепт був доданий в обране'
			 })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new favoriteController()