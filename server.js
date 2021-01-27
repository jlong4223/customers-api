// requires modules
const express = require("express");
const logger = require("morgan");
const app = express();
require("dotenv").config();

// requires routes
const homeRouter = require("./routes/welcome");
const customerRouter = require("./routes/customers");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// Using routes
app.use("/", homeRouter);
app.use("/", customerRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
