const express = require('express')
const router = express.Router()

const productDb = require('../db/products')

router.get('/', (request, response) => {
    productDb.getProducts()
        .then(products => {
            response.json(products)
        })
        .catch(err => {
            console.log(err)
            response.status(500).json({ message: 'Something went very wrong :('})
        })
})



module.exports = router