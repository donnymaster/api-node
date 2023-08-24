const mongoose = require('mongoose');
const { connectionUrl } = require('../config');
const CategorySeeder = require('./seed/categorySeeder')
const IngredientSeeder = require('./seed/ingredientsSeeder')
const UserSeeder = require('./seed/userSeeder')
const { isAsyncFunction } = require('../utils/isFunction')

const seeder = [
    CategorySeeder,
    // IngredientSeeder,
    UserSeeder,
];

(async () => {
    await mongoose.connect(connectionUrl)

    console.clear()
    console.info('\n\nSeeders start...')

    for (const seed of seeder) {
        isAsyncFunction(seed) ? await seed() : null
    }

    console.log('The seeds have been fulfilled!')
    process.exit()
})()

