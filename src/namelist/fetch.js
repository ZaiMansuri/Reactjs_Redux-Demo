import React from 'react';
import './Name.css';

const SearchBar = (props) => {
  return(
    <div>
      <input className="searchBar" type="text" placeholder="Search User" onChange={props.searchFunc}/>
    </div>
  )
}

export default SearchBar;
