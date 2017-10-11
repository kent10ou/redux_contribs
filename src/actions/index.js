
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
  return (dispatch) => {
    dispatch(requestContribs())
      return fetch(`https://api.github.com/repos/reactjs/redux/contributors?per_page=10&page=${pageNum}`)
        .then(response => response.json())
        .then(json => {
          const addVotesProperty = json.map((item) => {
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
  console.log('user: ', user);
  return (dispatch, getState) => {
    // modify payload here
    console.log('getState: ', getState())
    const { contribs: { allContributors, payload } } = getState();
    const upvotedcontrib = payload.map(contrib => {
      if (contrib.login == user) {
        return Object.assign({}, contrib, {votes: contrib.votes + 1})
      }
    })
    dispatch({ type: UPVOTE, payload: upvotedcontrib });
  }

}

export const downvote = (user) => {
  return {
    type: DOWNVOTE,
    user
  }
}