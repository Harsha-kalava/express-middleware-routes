// before running run npm init

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')
const path = require('path')
const productController = require('./controllers/product')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)

// app.use('/kummu',(req,res)=>{
//     res.send('<h1>Macha ela vunnav?</h1>')
// })  Instead of app.use we can write app.get() also
//  app.post is used to write on the website

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})

app.use(productController.errorPage)



app.listen(3000)