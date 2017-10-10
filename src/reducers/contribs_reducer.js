import { FETCH_GITHUB } from '../actions/index';

const initialState = {
  isFetching: false,
  payload: [],
  page: 1,
  searchTerm: '',
  allContributors: [],
  filteredContributors: []
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
        allContributors: action.payload,
        filteredContributors: action.payload,
        isFetching: false
      }
    
    // Filtered the contributors
    case 'FILTER_CONTRIBUTORS':
      return {
        ...state, 
        filteredContributors: action.payload, 
      }
    
    // Updating the search component
    case 'UPDATE_SEARCH':
      return {
        ...state, 
        searchTerm: action.payload, 
      }

    default:
      return state;
  }
}