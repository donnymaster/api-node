const Category = require('../../models/Category')

const data = [
    'Заготовки',
    'Випічка та десерти',
    'Основні страви',
    'Сніданки',
    'Салати',
    'Супи',
    'Паста і піца',
    'Закуски',
    'Сендвічі',
    'Різотто',
    'Напої',
    'Соуси і маринади',
    'Бульйони',
]

const CategorySeeder = async () => {
    for (const name of data) {
        const categoryModel = new Category({ name })
        await categoryModel.save()
    }
    console.log('\nThe Category model was filled\n')
}

module.exports = CategorySeeder;
