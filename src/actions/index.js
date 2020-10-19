export function selectBook(book) {
  // selectBook is an Action Creator, it needs to return an action which is an object with a type property
  // an action always includes a type and sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
