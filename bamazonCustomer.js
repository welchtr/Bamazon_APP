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

// Connect to the database and create a function that runs the "productChoices()" function which is a "print out" of all the products available for sale.
connection.connect(function(err) {
    if (err) throw err;
    productChoices();
})

// * --  Display all PRODUCT CHOICES available for sale. This should include the ids, names, prices, & quantity of products for sale --
var productChoices = function() {
  var query = 'SELECT * FROM Products'
  console.log("Below Are List Of Items for SALE:::::::::::::");
  connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].itemID + " || Product: " + res[i].productName + " || Department: " + res[i].departmentName + " || Price: " + res[i].price + " || Stock: " + res[i].quantity);
      }
      buyingProccess(res);
    })
};


function buyingProccess(){
    inquirer.prompt([{
			name: 'item',
			type: 'input',
			message: 'Which item would you like to purchase? (Enter the Item ID)'
		},
		{
			name: 'quantity',
			type: 'input',
			message: 'How many would you like to purchase?'

		}]).then(function(answer) {
			console.log(answer);
			var itemID = answer.item;
			console.log(itemID);
			var chosenItem = res[itemID-1];
			console.log(chosenItem);
			var newQuantity = chosenItem.quantity - answer.quantity;
			if (newQuantity >= 0) {
				connection.query('UPDATE products SET ? WHERE itemID = ?', [{ stock_quantity: newQuantity }, itemID]);
				buyingProcess();
			} else {
				console.log('There are not enough in stock for you to purchase that many.');
				buyingProcess();
			}
		})
    connection.end();
	}
