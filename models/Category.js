const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Category = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        maxlength: 100,
    }
})

Category.plugin(mongoosePaginate)

module.exports = model('Category', Category)