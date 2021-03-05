// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let found = authors.find(author => author.id === id)
  return found
}

function findBookById(books, id) {
  let found = books.find(book => book.id === id)
  return found
}


function partitionBooksByBorrowedStatus(books) {  
  let arr1 = books.filter((book) => book.borrows[0].returned === false);
  let arr2 = books.filter((book) => book.borrows[0].returned !== false)
  return [arr1,arr2 ] 
}


function getBorrowersForBook(book, accounts) {   
 let arr1 = [];
 let books = Object.values(book.borrows);
 for ( let i = 0; i < accounts.length; i++) {
   for (let k = 0; k < books.length; k++) {
     if (accounts[i].id === books[k].id) {
       let returned = books[k].returned;
       if (arr1.length < 10){
       arr1.push({...accounts[i], returned})
       }
     }
   }
 }
 return arr1 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
