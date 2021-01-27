// requires modules
const express = require('express')
const logger = require('morgan')
const app = express()
require('dotenv').config()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))


app.get('/', (req, res) =>{
    res.json({message: "welcome to the application"})
})

const port = 3000
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})