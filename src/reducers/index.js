import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks';
import ActiveBookReducer from './reducerActiveBook';
import WeatherReducer from './reducerWeather';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  weather: WeatherReducer
});

export default rootReducer;
