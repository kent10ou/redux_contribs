
export const FETCH_GITHUB = 'FETCH_GITHUB';
export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_FULLFILLED = 'FETCH_FULLFILLED';
export const REQUEST_CONTRIBS = 'REQUEST_CONTRIBS';
export const RECEIVE_CONTRIBS = 'RECEIVE_CONTRIBS';

const requestContribs = () => {
  return {
    type: REQUEST_CONTRIBS
  }
}

const receiveContribs = (json) => {
  return {
    type: RECEIVE_CONTRIBS,
    payload: json
  }
}

// thunk action creator
// somewhere in here... Check if data length returned is == 100, if it is...make another call and append data, if not stop
const fetchGithubContribs = () => {
  return (dispatch) => {
    let pageNum = 1;
    dispatch(requestContribs())
      return fetch(`https://api.github.com/repos/reactjs/redux/contributors?per_page=100&page=${pageNum}`)
        .then(response => response.json())
        .then(json => {
          return dispatch(receiveContribs(json))
        })
        .catch(err => console.log(err))
  }
}

// returns boolean T/F depending on isFetching
const shouldFetchContribs = (state) => {
  const isFetching = state.isFetching;
  if (!isFetching) {
    return true;
  } else {
    return false;
  }
}

export const fetchContribsIfNeeded = () => {
  return (dispatch, getState) => {
    const state = getState();
    // if isFetching is false -> fetch content
    if ( shouldFetchContribs(state) ) {
      return dispatch(fetchGithubContribs());
    } else {
      return Promise.resolve();
    }
  }
}

// Connect search to the redux store so search is accessible to everything
export const searchContribs = (text) =>
  ({ type: 'UPDATE_SEARCH', payload: text });

// Filter contributors
export const filterContribs = (text) =>
  (dispatch, getState) => {
    const { contribs: { allContributors, payload } } = getState();
    const filteredContributors = allContributors 
      .filter(user => {
        return user && user.login && user.login.includes(text);
      })  
    dispatch({ type: 'FILTER_CONTRIBUTORS', payload: filteredContributors });  
  };