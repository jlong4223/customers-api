const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers.js");

// Full CRUD routes
router.post("/customers", customersCtrl.create); //create

router.get("/customers", customersCtrl.getAll); //gets all
router.get("/customers/:id", customersCtrl.getOne); //gets one by id

router.put("/customers/:id", customersCtrl.updateOne); //updates one by id

// router.delete("/customers/:id", customersCtrl.deleteOne); //deletes one by id

// // DANGER ZONE: use with caution (deletes all customers)
// router.delete("/customers", customersCtrl.deleteAll);

module.exports = router;
