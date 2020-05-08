import { UPDATE_AGE } from '../actions/age-action';

export default function userReducer(state='', {type, payload}) {
  switch (type) {
    case UPDATE_AGE:
      return payload.age;
    default:
      return state;
  }
}