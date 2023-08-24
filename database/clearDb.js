const mongoose = require('mongoose');
const { connectionUrl } = require('../config');

(async () => {
    await mongoose.connect(connectionUrl)
    const collections = await mongoose.connection.db.collections()

    console.info('%c Database shredder was started ☠️ \n\n', 'color:red;font-size:24px;')

    for (let collection of collections) {
        console.info(`Now delete the entity: ${collection.collectionName}`)
        await collection.deleteMany()
        console.info('The entity has been removed!\n')
    }

    console.log('%c \n\nAll entities have been deleted from the database!', 'color:red;font-size:24px')
    process.exit()
})()