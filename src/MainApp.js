import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reduxThunk from 'redux-thunk';

import AppBlink from './blink_app/blink';
import Ani from './animation/components/Ani';
import List from "./List";
import './App.css';
import Game from './tictac/tic';
import Name from './namelist/Name';
import Ajax from './ajax/ajax';

import Book from './booklist/components/Book';
import reducer from './booklist/reducer';

import reducers from "./blog/reducers";
import PostsIndex from "./blog/components/posts_index";
import PostsNew from "./blog/components/posts_new";
import PostsShow from "./blog/components/posts_show";

import Thunk from './thunk/components/app';
import reducerT from './thunk/reducerT';

import Main from './modal/components/main';
import reducersM from './modal/reducersm';

const createStoreWithMiddlewareM = applyMiddleware()(createStore);

export const store = createStoreWithMiddlewareM(reducersM);

const createStoreWithMiddlewareT = applyMiddleware(reduxThunk)(createStore);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const createStoreWithMiddlewareB = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <div>
        <Router  >
          <div>
            <div>
              <Route exact path="/" component={List} />
              <Route path="/blink_app/blink" component={AppBlink} />
              <Route path="/animation/components/Ani" component={Ani} />
              <Route path="/tictac/tic" component={Game} />
              <Route path="/namelist" component={Name} />
              <Route path="/ajax" component={Ajax} />
            </div>

            <div>
              <Provider store={createStoreWithMiddleware(reducers)}>
                <Switch>
                  <Route path="/posts/new" component={PostsNew} />
                  <Route path="/posts/:id" component={PostsShow} />
                  <Route path="/post" component={PostsIndex} />
                </Switch>
              </Provider>
            </div>

            <div>
              <Provider store={createStoreWithMiddlewareB(reducer)}>
                <Route path="/book" component={Book} />
              </Provider>
            </div>
            <div>
              <Provider store={createStoreWithMiddlewareT(reducerT)}>
                <Route path="/thunk" component={Thunk} />
              </Provider>
            </div>
            <div>
              <Provider store={store}>
              <Route path="/modal" component={Main} />
              </Provider>
            </div>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;