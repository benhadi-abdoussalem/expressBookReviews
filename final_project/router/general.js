const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    return res.send(JSON.stringify({books}, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  // Extract the isbn parameter from the request URL
  const isbn = req.params.isbn;
  // Filter the books array to find books whose isbn matches the extracted isbn parameter
  let filtered_books = books.filter((book) => book.isbn === isbn);
  // Send the filtered_book array as the response to the client
  res.send(filtered_books);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return   // Extract the email parameter from the request URL
  const email = req.params.email;
  // Filter the users array to find users whose email matches the extracted email parameter
  let filtered_users = users.filter((user) => user.email === email);
  // Send the filtered_users array as the response to the client
  res.send(filtered_users);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
