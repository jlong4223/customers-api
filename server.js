// requires modules
const express = require("express");
const logger = require("morgan");
const app = express();
require("dotenv").config();

// requires routes
const customerRouter = require("./routes/customers");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ message: "welcome to the application" });
});

// requiring and using routes
app.use("/", customerRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
