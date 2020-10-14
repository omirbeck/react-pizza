import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducers from './reducers/index';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  rootReducers, 
  composeEnhancer(applyMiddleware(thunk)));

window.store = store; 

export default store;