const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Recipe = Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    //backgroundUrl: Schema.Types.String,
    timePreparing: {
        type: Schema.Types.String,
        required: true,
    },
    shortDescription: {
        type: Schema.Types.String,
        maxlength: 700,
        default: 'Опис відсутній',
    },
    ingredients: [
        {
            count: {
                type: Schema.Types.String,
                required: true,
            },
            ingredient: {
                type: Schema.Types.String,
                required: true,
            }
        }
    ],
	steps: Schema.Types.Array,
    categories: {
        type: Schema.Types.Array,
    }
})

Recipe.plugin(mongoosePaginate)

module.exports = model('Recipe', Recipe)