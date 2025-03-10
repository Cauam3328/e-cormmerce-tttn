const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST','GET','PUT','DELETE'], 
}))
const port = process.env.PORT || 8888
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
dbConnect()
initRoutes(app)

app.listen(port, () =>{
    console.log('sever running on the port: '+port );
})