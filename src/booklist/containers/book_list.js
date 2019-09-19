import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
renderList() {
  return this.props.books.map((book) => {
    return(
      <li
      key={book.title}
      onClick={() => this.props.selectBook(book)}
      className="list-group-item">
      {book.title}
      </li>
    );
  });
}
  render() {
    return(
      <ul className="list-group col-sm-4" >
      {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  //show as a props
  return{
    books: state.books
  };
}
//return from this function end up as props
function mapDispatchToProps(dispatch){
  //selectbook calle resut pass to all  reducers

  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//bookist fom component to container it needs to know about
//new  dispatch,selectedbook make it avible as prop
export default connect (mapStateToProps,mapDispatchToProps)(BookList);
