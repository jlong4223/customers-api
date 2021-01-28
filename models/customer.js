const e = require("express");
const sql = require("./db.js");

// constructor (export to make sure this works)
const Customer = function (customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};

// newCustomer is the query question mark
Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.getAll = (result) => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
    } else {
      console.log("customers: ", res);
      result(null, res);
    }
  });
};

Customer.findById = (id, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: " + err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // if not found
    result({ kind: "not_found" }, null);
  });
};

Customer.updateUsingId = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET email = ?, name=?, active=? WHERE id=?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // no customer found
        result({ kind: "not_found" }, null);
        return;
      }
      //  spreading out the customer instead of typing everything out
      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

module.exports = Customer;
