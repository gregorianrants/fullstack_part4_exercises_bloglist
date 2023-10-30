const BlogModel = require('../models/Blog.js')

const get =  (request, response) => {
  BlogModel
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
}

const create = (request, response) => {
  const blog = new BlogModel(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
}

const forExport = {
  get,create
}

module.exports = forExport