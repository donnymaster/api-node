const express = require('express')
const mongoose = require('mongoose')
const showRoutes = require('express-list-endpoints')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const routes = require('./routes')

const {
    PORT,
    connectionUrl,
    API_VERSION,
} = require('./config')

const app = express()

app.use(fileUpload({
    createParentPath: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 10000 }))
app.use(express.static('public'))
app.use(cors())

app.use('/auth', authRouter)
app.use(`/api/${API_VERSION}`, routes)

const start = async () => {
    try {
        await mongoose.connect(connectionUrl)
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
            if (process.env.NODE_ENV === 'development' && process.env.ROUTE === 'show') {
                console.table(showRoutes(app))
            }
        })
    } catch (error) {
        console.log(error)
    }
}

start()