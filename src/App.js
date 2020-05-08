import React, { useEffect } from 'react';  
import { connect } from 'react-redux'
import { updateUser, apiRequest } from './actions/user-action';
import { bindActionCreators } from 'redux';
import './App.css';

const App = props => {
  // console.log(props)

  useEffect(() => {
    setTimeout(() => {
      props.onApiRequest();
    }, 2000)
  }, [props])

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

const mapStateToProps = ({products, user}, props) => {
  // console.log(props);
  return {
    products,
    user,
    userAndProps: `${user} ${props.aRandomProp}`
  }
  
};

// mapActionsToProps allows actions to be dispatched from components easily
// no dispatch in the components themselves is required
// functions will automatically dispatch actions to the store

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
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
