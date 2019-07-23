import { combineReducers } from 'redux';
import { projectReducer } from './projects';
import { interestReducer } from './interests';
// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...

const appReducer = combineReducers({
  projects: projectReducer,
  interests: interestReducer,
});

export default appReducer;
