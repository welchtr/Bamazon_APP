DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (itemID int AUTO_INCREMENT, productName varchar(150) NOT NULL, departmentName varchar(100) NOT NULL, price varchar(100) NOT NULL, quantity int NOT NULL, PRIMARY KEY(itemID) );
describe Products;
select * from Products;


INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("Indian Homemade Flower Pot", "Home & Garden", 50.75, 25);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("iFlip Waffle Maker", "Home & Garden", 15.50, 12);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("DIY Ice Cream Machine", "Home & Garden", 99.00, 10);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("Black Panther: Inside Wakanada - The Video Game", "Toys, Kids & Baby", 70.99, 13);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("Monopoly", "Toys, Kids & Baby", 21.97, 25);
INSERT INTO Products (ProductName, DepartmentName, price, quantity) VALUES ("Matching Gold 18K Neckless & Ring Jewlery Combo", "Clothing, Shoes & Jewelry", 59.99, 30);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("Whole Wood Shoe Rack", "Clothing, Shoes & Jewelry", 225.00, 4);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("Vita Coco Coconut Water with Pineapple", "Beauty, Health & Grocery", 3.70, 300);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("Mackbook Pro 2019", "Electronics & Computers", 4449.95, 47);
INSERT INTO Products (productName, departmentName, price, quantity) VALUES ("Apple Watch 2019", "Electronics & Computers", 149.95, 50);


select * from Products;
