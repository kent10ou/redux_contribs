
export const FETCH_GITHUB = 'FETCH_GITHUB';
export const REQUEST_CONTRIBS = 'REQUEST_CONTRIBS';
export const RECEIVE_CONTRIBS = 'RECEIVE_CONTRIBS';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';

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
const fetchGithubContribs = (pageNum) => {
  return (dispatch, getState) => {
    dispatch(requestContribs())
      return fetch(`https://api.github.com/repos/reactjs/redux/contributors?per_page=10&page=${pageNum}`)
        .then(response => response.json())
        .then(json => {
          const addVotesProperty = json.map((item) => { // [{}, {}, ... {}]
            // add votes property to each contributor
            return { ...item, votes: 0 }; 
          })
          return dispatch(receiveContribs(addVotesProperty))
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

export const fetchContribsIfNeeded = (pageNum) => {
  return (dispatch, getState) => {
    const state = getState();
    // if isFetching is false -> fetch content
    if ( shouldFetchContribs(state) ) {
      return dispatch(fetchGithubContribs(pageNum));
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

export const upvote = (user) => {

  return (dispatch, getState) => {
    // modify payload here
    const { contribs: { payload, filteredContributors } } = getState();
    console.log('payload: ', payload);
    let arrCopy = [...filteredContributors]; // copy filteredContributors
    const upvotedcontrib = arrCopy.find((contrib => {
      return contrib.login === user
    }))
    upvotedcontrib.votes += 1;
    dispatch({ type: 'UPVOTE', payload: arrCopy }); // still working on passing the upvoted contributor
  }
}

// this would be similar to upvote, once it's working
export const downvote = (user) => {
  return {
    type: DOWNVOTE,
    user
  }
}
