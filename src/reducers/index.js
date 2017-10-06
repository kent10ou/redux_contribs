import { combineReducers } from 'redux';
import ContribsReducer from './contribs_reducer';

const rootReducer = combineReducers({
  contribs: ContribsReducer
});

export default rootReducer;