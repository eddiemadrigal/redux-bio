import React from 'react';  
import { connect } from 'react-redux'
import { updateUser } from './actions/user-action';
import './App.css';

const App = props => {
  // console.log(props)

  function onUpdateUser(e) {
    props.onUpdateUser(e.target.value);
  }

  return (
    <div className="App">
      <input onChange={onUpdateUser} /><br />
      {props.user}
    </div>
  );
}

// mapStateToProps receives the state of the store
// and then decide what props to use in a component
// props automatically gets data from state
// state.products & state.user => destructure to ({products, user})

const mapStateToProps = ({products, user}) => ({
  products,
  user
});

// mapActionsToProps allows actions to be dispatched from components easily
// no dispatch in the components themselves is required
// functions will automatically dispatch actions to the store

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps, 
  mapActionsToProps
  )(App);
