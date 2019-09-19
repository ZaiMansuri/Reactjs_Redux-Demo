export function selectBook(book) {
//  console.log('book has been seleceted', book.title);
//step 2 : selectbook ia an action creter ,returnan action
//an object eith a tpe property

return{
  type: 'BOOK_SELECTED', //keyword
  payload: book
};
}
