// to use in reducer
// scopes the action type to avoid collisions with other components

export const UPDATE_USER = 'user:updateUser';
export const SHOW_ERROR = 'user:showError';
export const SHOW_SUCCESS = 'user:showSuccess';

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'ERROR!!'
    }
  }
}

export function showSuccess() {
  return {
    type: SHOW_SUCCESS,
    payload: {
      user: 'SUCCESS!!'
    }
  }
}