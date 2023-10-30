require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

const forExport = {
  PORT,MONGODB_URL
}

module.exports = forExport

