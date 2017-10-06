import { FETCH_GITHUB } from '../actions/index';

export default function (state={}, action) {
  console.log('action: ', action);
  switch(action.type) {
    case FETCH_GITHUB:
      console.log('REDUCER HIT');
  }
  return state;
}