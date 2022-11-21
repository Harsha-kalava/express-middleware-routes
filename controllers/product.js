
const path = require('path')
const rootDir = require('../util/path')

exports.addProdcuts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.showProducts = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
}

exports.contactPage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}

exports.successPage = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}

exports.errorPage = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','404.html'))
}