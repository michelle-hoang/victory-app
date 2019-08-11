import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import appReducer from './redux';
import { createLogger } from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

let middleware = [
  // `withExtraArgument` gives us access to axios in our async action creators!
  // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
  thunkMiddleware.withExtraArgument({ axios }),
];
if (process.browser) {
  middleware = [...middleware, createLogger({ collapsed: true })];
}
const RESET_STORE = 'RESET_STORE';
export const resetStore = () => ({ type: RESET_STORE });
const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
    return appReducer(state, action);
  }
  return appReducer(state, action);
};

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
