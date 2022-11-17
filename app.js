const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:true}))
app.use('/admin', adminRoutes)
app.use('/shop',shopRoutes)

// app.use('/kummu',(req,res)=>{
//     res.send('<h1>Macha ela vunnav?</h1>')
// })  Instead of app.use we can write app.get() also

app.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})



app.listen(3000)