import { combineReducers } from 'redux';
import { crimeReducer } from './crimes';

// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...

const appReducer = combineReducers({
  crime: crimeReducer,
});

export default appReducer;
