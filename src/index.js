import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// reducer functions

function productsReducer(state=[], {type, payload}) {
  switch (type) {
    case 'updateProduct':
      return payload;
    default: 
      return state;
  }
}

function userReducer(state='', {type, payload}) {
  switch (type) {
    case 'updateUser':
      return payload;
    default:
      return state;
  }
}

// combine reducer functions

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

// create and initialize the store

const store = createStore(
  allReducers, 
  {
    products:[{
      id: 1,
      name: 'Item to sell',
      sku: 123456,
      cost: 1.27,
      retail: 5.99
    }],
    user: 'Full Name'
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// view initial state of app

console.log('initial state: ', store.getState());

// update store

const updateUserAction = {
  type: 'updateUser',
  payload: {
    name: 'Erika Madrigal'
  }
}

const updateProductAction = {
  type: 'updateProduct',
  payload: {
    id: 1,
    name: 'Item to sell 2',
    sku: 1234562,
    cost: 1.272,
    retail: 5.992
  }
}

// dispatch actions

store.dispatch(updateUserAction);
store.dispatch(updateProductAction);

// view updated state of app

console.log('updated state: ', store.getState());

// output

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
