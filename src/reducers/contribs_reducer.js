import { FETCH_GITHUB } from '../actions/index';

const initialState = {
  isFetching: false,
  payload: [],
  page: 1
}

export default function (state=initialState, action) {
  console.log('action: ', action);
  switch(action.type) {
    case 'REQUEST_CONTRIBS':
      return {
        ...state,
        payload: [],
        isFetching: true
      };

    case 'RECEIVE_CONTRIBS':
      return {
        ...state, 
        payload: action.payload, 
        isFetching: false
      } 

    default:
      return state;
  }
}