import { combineReducers } from 'redux';
import { resourceReducer } from './resources';
import { practiceReducer } from './practices';
import { singleResourceReducer } from './singleResource';
import { singlePracticeReducer } from './singlePractice';

// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...

const appReducer = combineReducers({
  resources: resourceReducer,
  practices: practiceReducer,
  singleResource: singleResourceReducer,
  singlePractice: singlePracticeReducer,
});

export default appReducer;
