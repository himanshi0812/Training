import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store  from './store';
import {createStore} from "redux";
import {counterReducer} from './reducer';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
// import * as serviceWorker from './serviceWorker';

const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("middleware");
      return next(action)
    };
  };
};



const store = createStore(counterReducer ,applyMiddleware(myLogger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
