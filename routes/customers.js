const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers.js");

// Create a new customer route
router.post("/customers", customersCtrl.create);
router.get("/customers", customersCtrl.getAll);
module.exports = router;
