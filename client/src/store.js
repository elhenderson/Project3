import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = compose || window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ;
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
));
            
export default store;