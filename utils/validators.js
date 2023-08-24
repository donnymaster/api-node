const { check, body } = require('express-validator');
const { validationResult } = require('express-validator')

const checkError = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    next()
}

module.exports = {
    userValidator: [
        check('username').isLength({
            max: 12,
            min: 3
        }),
        check('password').isLength({
            max: 16,
            min: 6
        }),
        check('telegram').matches(/.*\B@(?=\w{5,64}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/),
        check('email').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        checkError,
    ],
    categoryValidator: [
        check('name').isLength({
            max: 60,
            min: 4
        }),
        checkError,
    ],
    recipeValidator: [
        check('name').isLength({
            max: 40,
            min: 5
        }),
        check('shortDescription').isLength({
            max: 700,
            min: 20
        }).optional(),
        check('timePreparing').isString(),
        checkError,
    ],
}