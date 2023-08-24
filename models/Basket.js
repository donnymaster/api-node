const { Schema, model } = require('mongoose')

const Basket = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	product: Schema.Types.String,
	count: Schema.Types.String,
})


module.exports = model('Basket', Basket)