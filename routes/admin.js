const express = require('express')
const path = require('path')
const productController = require('../controllers/product')
const router = express.Router()


router.get('/add-products',productController.addProdcuts)

router.post('/product',productController.showProducts)


module.exports = router