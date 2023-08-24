const { Schema, model } = require('mongoose')

const User = new Schema({
    username: {
        type: Schema.Types.String,
        unique: true,
        required: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    telegram: {
        type: Schema.Types.String,
        required: true,
    },
    position: {
        type: Schema.Types.Mixed,
    },
    email: {
        type: Schema.Types.String,
        required: true,
    },
    favoriteRecipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
})

module.exports = model('User', User)