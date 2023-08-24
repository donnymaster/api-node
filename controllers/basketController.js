const Recipe = require('../models/Recipe')
const { Schema } = require('mongoose')
const Basket = require('../models/Basket')

class basketController {
	async index(req, res) {
		const _id = req.user.id

		try {
			const baskets = await Basket.find({user: _id})

			return res.json({
				baskets
			})
		} catch (error) {
            return res.status(500).json(error)
       }
		
	}
	
	async add(req, res) {
		const _id = req.params.id
		const userId = req.user.id
		
		try {
            const recipe = await Recipe.findOne({ _id }, { __v: 0 })
			 const products = recipe.ingredients
			 
			 for (let iter = 0; iter < products.length; ++iter) {
				await Basket.create({
					user: userId,
					product: products[iter].ingredient,
					count: products[iter].count,
				 })
				 
			 }
			 
			 return res.json({
				'message': 'Продукти були додані в кошик'
			 })
        } catch (error) {
            return res.status(500).json(error)
        }
	}
	
	async delete(req, res) {
		const _id = req.params.id
		
		try {
           await Basket.deleteOne({_id})
			 return res.json({
				'message': 'Продукт був видалений'
			 })
        } catch (error) {
            return res.status(500).json(error)
        }
	}
}

module.exports = new basketController()