// to use in reducer
// scopes the action type to avoid collisions with other components

export const UPDATE_USER = 'user:updateUser';

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}