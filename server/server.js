const express = require('express')
const server = express()
const path = require('path')
const productRoutes = require('./routes/products')

server.use(express.static(path.join(__dirname, 'public')))
//server.use(express.static('public')) // if public is in the project root
server.use(express.json())

server.use('/api/products', productRoutes)
module.exports = server