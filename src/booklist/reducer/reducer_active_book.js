//state is  responsible for this reducers
//is not  application state
export default function(state = null, action){

switch(action.type){

  case 'BOOK_SELECTED':
    return action.payload;

}
  return state;
}
