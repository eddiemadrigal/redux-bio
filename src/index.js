import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// add thunk middleware to store enhanceers

import thunk from 'redux-thunk';

// reducer functions

import ageReducer from './reducers/age-reducer';
import userReducer from './reducers/user-reducer';

// combine reducer functions

const allReducers = combineReducers({
  user: userReducer,
  age: ageReducer
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
    user: '',
    age: 0
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

const updateAgeAction = {
  type: 'updateAge',
  payload: {
    age: 40
  }
}

// dispatch actions

store.dispatch(updateUserAction);
store.dispatch(updateAgeAction);

// view updated state of app

// console.log('updated state: ', store.getState());

// output

ReactDOM.render(
    <Provider store={store}>
      <App aRandomProp = "123" />
    </Provider>,
  document.getElementById('root')
);
