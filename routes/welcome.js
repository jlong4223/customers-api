const express = require("express");
const router = express.Router();
const homeCtrl = require("../controllers/welcome");

router.get("/", homeCtrl.welcome);

module.exports = router;
