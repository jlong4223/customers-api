const mysql = require('mysql')
const dbConfig = require('../config/db-config.js')

// creating the connection
const connection = mysql.createConnection({
    host: dbConfig.HOST, 
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

// opening/starting the connection
connection.connect(error =>{
    if(error){
        console.log(error)
    } else{
        console.log("Successfully connected to mySQL")
    }
})

module.exports = connection