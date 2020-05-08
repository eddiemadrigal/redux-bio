export const UPDATE_AGE = 'user:updateAge';

export function updateAge(newAge) {
  return {
    type: UPDATE_AGE,
    payload: {
      age: newAge
    }
  }
}