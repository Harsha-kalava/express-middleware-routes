const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require('../util/path')

router.get('/add-products',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    // res.send('<form action="/admin/product" method="POST"><label for="title">Add Product - </label><input type="text" name="title"><br><label for="quantity">Quantity -  </label><input type="text" name="quantity"><br><button type="submit">Submit</button></form>') 
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
})


module.exports = router