const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const productController = require('../controllers/product')
const router = express.Router()

router.get('/contact',productController.contactPage)

router.post('/success',productController.successPage)

module.exports = router 