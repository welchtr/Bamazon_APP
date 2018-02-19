// Required npm packages for this project
var mysql = require('mysql');
var inquirer = require('inquirer');

// Create a SQl connection via node using server and daatabase credentials created in mySQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", //no password
    database: "bamazon"
})

// Connect to the database and create a function that runs the "displayProducts()" function which contains all the products organized in a table
connection.connect(function(err) {
    if (err) throw err;
    productChoices();
})

// * --  Display all PRODUCT CHOICES for sale. This should include the ids, names, prices, & quantity of products for sale --
var productChoices = function() {
  var query = 'SELECT * FROM Products'
  console.log("Below Are List Of Items for SALE:::::::::::::");
  connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].itemID + " || Product: " + res[i].productName + " || Department: " + res[i].departmentName + " || Price: " + res[i].price + " || Stock: " + res[i].quantity);
      }
      // shoppingCart();
    })
};
