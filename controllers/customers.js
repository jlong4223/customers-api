const Customer = require("../models/customer.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request and make sure there is content
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Customer
  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active,
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};

exports.getAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "there was an error somewhere",
      });
    } else res.send(data);
  });
};

exports.getOne = (req, res) => {
  Customer.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.updateOne = (req, res) => {
  // make sure its a valid request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
  }
  Customer.updateUsingId(req.params.id, new Customer(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: `No customer found with id: ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: "error updating customer with id: " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  // the below delete by id is coming form the model
  Customer.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: `Customer with id: ${req.params.id} not found`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete customer with id: " + req.params.id,
        });
      }
    } else
      res.send({ message: `Customer with id: ${req.params.id} was deleted` });
  });
};
//  deleteAll
