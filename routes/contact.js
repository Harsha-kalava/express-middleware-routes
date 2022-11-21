const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
})

router.post('/success',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
})

module.exports = router 