const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.json({message: "welcome to the application"})
})

const port = 3000
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})