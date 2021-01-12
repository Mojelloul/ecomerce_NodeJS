const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouters = require('./routes/auth')
const braintreeRouters = require('./routes/braintree')
const userRouters = require('./routes/user')
const categoryRouters = require('./routes/categories')
const productRouters = require('./routes/products')
const orderRouters = require('./routes/orders')


const expressValidator = require('express-validator')
const app = express();
const cookieParser = require('cookie-parser')

require('dotenv').config();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=> console.log('db Connect'))
.catch(()=> console.log('not connect to db'))

app.use(express.json())
app.use(cors())
app.use(expressValidator())
app.use(cookieParser())

app.use('/api',authRouters);
app.use('/api/user',userRouters);
app.use('/api/category',categoryRouters);
app.use('/api/product',productRouters);
app.use('/api/braintree',braintreeRouters);
app.use('/api/order',orderRouters);
const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`port : ${port}`))