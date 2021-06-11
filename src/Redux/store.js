import { createStore } from 'redux';

const initialState = [];

function reducer(state = initialState, action) {
  if (action.type === 'ADD_BASKET') {
    console.log(state);
    return [...state, action.data];
  } else if (action.type === 'REMOVE_BASKET') {
    state.splice(
      state.findIndex(product => product.id === action.data.id),
      1
    );
    console.log(state);
    return state;
  }

  return state;
}
export default createStore(reducer);
