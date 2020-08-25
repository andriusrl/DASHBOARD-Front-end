import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "./reducers";
import { routerMiddleware } from "connected-react-router";
import Router from "./containers/Router";
import styled from "styled-components";
import Headers from './containers/Header';

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

const Main = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #E7E7E7;
`
const Bottom = styled.div`
  background-color: #515A60;
  color: #E3EFE7;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16pt;
`

ReactDOM.render(
  <Provider store={store}>
    <Main>
      <Headers />
        <Router history={history} />
        <Bottom>
          My FrontEnd Test © 2020
        </Bottom>
    </Main>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
