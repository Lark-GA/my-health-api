require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.get('/', function(req, res) {
    res.send('hello, world')
})

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})