import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), thunkMiddleware)(createStore);

// allows redux to know about our store, for debugging redux
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancers)}>
    <App />
  </Provider>, document.querySelector('.container')
);


