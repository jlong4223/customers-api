// storing database info here
    // root is the default user
require('dotenv').config()

module.exports = {
    HOST: 'localhost',
    USER: 'root', 
    PASSWORD: process.env.PASSWORD,
    DB: 'customer_api'
}