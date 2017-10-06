import { FETCH_GITHUB } from '../actions/index';

export default function (state={}, action) {
  console.log('action: ', action);
  switch(action.type) {
    case 'FETCH_GITHUB_PENDING':
      return {
        ...state,
        payload: [],
        isPending: true
      };

    case 'FETCH_GITHUB_FULFILLED':
      return {
        ...state, 
        payload: action.payload, 
        isPending: false
      } 

    default:
      return state;
  }
}