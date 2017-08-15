import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxLogger from 'redux-logger';
import thunk from 'redux-thunk'; // allows you to fire off more than one action
import persistState from 'redux-localstorage';
import reducer from './reducers';

const middleware = applyMiddleware(thunk, ReduxLogger);
const enhancer = compose(persistState());

export default createStore(reducer, composeWithDevTools(middleware), enhancer);
