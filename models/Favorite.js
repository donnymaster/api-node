const { Schema, model } = require('mongoose')

const Favorite = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	recipe: {
		type: Schema.Types.ObjectId,
		ref: 'Recipe'
	}
})


module.exports = model('Favorite', Favorite)