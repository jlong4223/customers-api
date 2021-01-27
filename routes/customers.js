const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers.js");

// Create a new customer route
router.post("/customers", customersCtrl.create);

module.exports = router;
