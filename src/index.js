import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// add thunk middleware to store enhanceers

import thunk from 'redux-thunk';

// reducer functions

import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

// combine reducer functions

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

// apply redux-thunk

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
  allStoreEnhancers
);

// view initial state of app

// console.log('initial state: ', store.getState());

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

// console.log('updated state: ', store.getState());

// output

ReactDOM.render(
    <Provider store={store}>
      <App aRandomProp = "123" />
    </Provider>,
  document.getElementById('root')
);
