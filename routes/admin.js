const express = require('express')

const router = express.Router()

router.get('/add-products',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><label for="title">Add Product - </label><input type="text" name="title"><br><label for="quantity">Quantity -  </label><input type="text" name="quantity"><br><button type="sbumit">Submit</button></form>') 
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


module.exports = router