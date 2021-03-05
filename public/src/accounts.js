// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let found = accounts.find(account => account.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((lastA, lastB) => (lastA.name.last > lastB.name.last? 1: -1))
  return sorted
}

function getTotalNumberOfBorrows(account, books,) {
  let count = 0
  return books.reduce ((prev, book) => {
    book.borrows.reduce((prev, borrow) => {
        if (account.id === borrow.id) {
          count +=1
        }
        return count
    }, 0)
    return count
  }, 0)
}


function getBooksPossessedByAccount(account, books, authors) {
  let arr1 = [];
  for (let i = 0; i < books.length; i++) {
    for (let k = 0; k < books[i].borrows.length; k++){
      if (books[i].borrows[k].id === account.id && books[i].borrows[k].returned === false) {
        let author;
        for (let j = 0; j < authors.length; j++) {
          if (authors[j].id === books[i].authorId) {
            author = {id: authors[j].id, name: authors[j].name}
          }
        }
        arr1.push({...books[i], author})
      }
    }
  }
  return arr1
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
