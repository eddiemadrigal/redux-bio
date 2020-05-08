import React from 'react';  
import { connect } from 'react-redux'
import { updateUser } from './actions/user-action';
import { updateAge } from './actions/age-action';
import './App.css';

const App = props => {

  function onUpdateUser(e) {
    props.onUpdateUser(e.target.value);
  }

  function onUpdateAge(e) {
    props.onUpdateAge(e.target.value);
  }

  let text = <p>My name is {props.user} and I am {props.age} years old.</p>

  return (
    <div className="App">
      <div>
        <p>Name: <input onChange={onUpdateUser} /></p>
        <p>Age: <input onChange={onUpdateAge} /></p>
      </div>
      <div>
        {text}        
      </div>
    </div>
  );
}

// mapStateToProps receives the state of the store
// and then decide what props to use in a component
// props automatically gets data from state
// state.products & state.user => destructure to ({products, user})

const mapStateToProps = ({user, age}) => {
  // console.log(props);
  return {
    user,
    age
  }
  
};

// mapActionsToProps allows actions to be dispatched from components easily
// no dispatch in the components themselves is required
// functions will automatically dispatch actions to the store

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onUpdateAge: updateAge
};

// merge props
// propsFromState => whatever we return from maptStateToProps
// propsFromDispatch => what we return from mapActionsToProps
// ownProps => the passed in props

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {}
// }

export default connect(
  mapStateToProps, 
  mapActionsToProps
  )(App);
