const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const { SALT_VALUE } = require('../../config')

const USER_PASSWORD = 'sasha123'

const userData = {
    username: 'donny',
    password: bcrypt.hashSync(USER_PASSWORD, SALT_VALUE),
    email: 'alekss.yaremko@gmail.com',
    telegram: '@donny_101',
}

const UserSeeder = async () => {
    const user = new User(userData)
    await user.save()

    console.log('\nThe User model was filled\n')
}

module.exports = UserSeeder;