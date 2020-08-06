import { combineReducers } from 'redux';

import filterReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducers = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer
});

export default rootReducers;