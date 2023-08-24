const Category = require('../models/Category')

class categoryController {
    async index(req, res) {
        try {
            const page = req.query.page ?? 1;

            const categories = await Category.paginate({}, { page })

            res.json({ data: categories })

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }

    async create(req, res) {
        const name = req.body.name
        const category = new Category({ name })
        await category.save()

        return res.status(200).json({ message: 'created' })
    }
}

module.exports = new categoryController()