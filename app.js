const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config.js')
const blogsControllers = require('./controllers/blogs.js')


const express = require('express')

const app = express()
app.use(express.json())

mongoose.connect(config.MONGODB_URL).then(() => {
  console.log('connected to mongodb')
}).catch(err => {
  console.log(err)
})

app.use(cors())
app.use(express.json())

app.get('/api/blogs',blogsControllers.get)

app.post('/api/blogs', blogsControllers.create)

module.exports = app