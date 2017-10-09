/*
const KEYS = {
  id: '9683c68e0c0e8ebf0ceb',
  secret: 'ab38e7a382c59d62a0c25f9094048fe2b6d6dca8'
}
*/

export const FETCH_GITHUB = 'FETCH_GITHUB';
export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_FULLFILLED = 'FETCH_FULLFILLED';
export const REQUEST_CONTRIBS = 'REQUEST_CONTRIBS';
export const RECEIVE_CONTRIBS = 'RECEIVE_CONTRIBS';

function requestContribs () {
  return {
    type: REQUEST_CONTRIBS
  }
}

function receiveContribs (json) {
  return {
    type: RECEIVE_CONTRIBS,
    payload: json // do something with the data here
  }
}

// thunk action creator
// somewhere in here... Check if data length returned is == 100, if it is...make another call and append data, if not stop
function fetchGithubContribs () {
  return (dispatch) => {
    let pageNum = 1; 
    dispatch(requestContribs())
    return fetch(`https://api.github.com/repos/reactjs/redux/contributors?anon=1&per_page=100&page=${pageNum}`)
      .then(response => response.json())
      .then(json => {
        // if length is equal to 100, fire another fetch with page++ 
        
        return dispatch(receiveContribs(json))})
      .catch(err => console.log(err))
  }
}

function shouldFetchContribs (state) {
  const isFetching = state.isFetching;
  if (!isFetching) {
    return true;
  } else {
    return false;
  }
}

export function fetchContribsIfNeeded () {
  return (dispatch, getState) => {
    const state = getState();
    if ( shouldFetchContribs(state) ) {
      return dispatch(fetchGithubContribs());
    } else {
      return Promise.resolve();
    }
  }
}
