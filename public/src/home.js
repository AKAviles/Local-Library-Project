// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let counter = 0
  for (let i = 0; i < books.length; i++) {
    for (let k = 0; k < books[i].borrows.length; k++) {
        if (books[i].borrows[k].returned === false) {
          counter += 1
        }
      }
    }
  return counter
}



function getMostCommonGenres(books) {
  let arr1 = [];
  let count = 0
  for (let i = 0; i < books.length; i++) {
    let genreIndex = -1
    let book = books[i]
    for(let k = 0; k < arr1.length; k++){
    if (book.genre === arr1[k].name) {
      genreIndex = k
    }
  }
      if (genreIndex < 0 ) {
        if (arr1.length < 5){
        arr1.push({name: book.genre, count: 1});
        }
      } else {
        arr1[genreIndex].count = arr1[genreIndex].count +1
      }
    }
    arr1.sort((countA, countB) => (countA.count > countB.count? -1: 1))
    return (arr1)
  }
  

function getMostPopularBooks(books) {
  let arr1 = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    arr1.push({name: book.title, count: book.borrows.length})
    }
    arr1.sort((countA, countB) => (countA.count > countB.count? -1: 1));
    let arr2 = arr1.slice(0, 5)
    return arr2
  }
  
 

  function getMostPopularAuthors(books, authors) { 
    const authorCounts = {}
  
    books.forEach((book) => {
      const { authorId, borrows } = book;
      if(!authorCounts.hasOwnProperty(authorId)){
        authorCounts[authorId] = borrows.length
      } else{
        authorCounts[authorId] += borrows.length
        }
    })
     
    let mostPopular ={}
     
    for(const authorId of Object.keys(authorCounts)){
      for(let i=0;i<authors.length;i++){
        if(authorId == authors[i].id){
          mostPopular[`${authors[i].name.first} ${authors[i].name.last}`] = authorCounts[authorId]
         }
      }
    }
   
   return Object
      .entries(mostPopular) 
      .sort((a, b) => {
        return b[1] - a[1];
      })
      .slice(0,5)
      .map(authorID => {
        return {
          name: authorID[0],
          count: authorID[1]
        };
      }) 
   
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
