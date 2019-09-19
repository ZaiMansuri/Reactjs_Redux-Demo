import './App.css';
import React, { Component } from 'react';


class List extends Component {
    render(){

        return(
        <div className="App">
             <p style={{fontSize:'35px'}}> List of Reactjs demo Apps with redux </p>
          <div className="App-header">
            <a href="/blink_app/blink" className="App-link">Blink App</a>
            <a href="/animation/components/Ani" className="App-link">Animation App</a>
            <a href="/tictac/tic" className="App-link"> Tic-tac-teo App</a>           
            <a href="/Book" className="App-link"> Book List App</a>
            <a href="/post" className="App-link">Blog</a>
            <a href="/namelist" className="App-link"> Search Name</a>
            <a href="/ajax" className="App-link"> Ajax approches</a> 
            <a href="/thunk" className="App-link">Redux Thunk</a>  
          </div>
        </div>
        );
    }
}
export default List;