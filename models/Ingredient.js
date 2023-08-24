const { Schema, model } = require('mongoose')

const Ingredient = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        maxlength: 100,
    }
})

module.exports = model('Ingredient', Ingredient)