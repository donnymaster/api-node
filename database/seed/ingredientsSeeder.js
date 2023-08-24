const Ingredient = require('../../models/Ingredient')
const data = require('./dates/ingredient')

const IngredientSeeder = async () => {
    for (const name of data) {
        const ingredientModel = new Ingredient({ name })
        await ingredientModel.save()
    }

    console.log('\nThe Ingredient model was filled\n')
}

module.exports = IngredientSeeder;