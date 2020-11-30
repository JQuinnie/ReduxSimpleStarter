import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks';
import ActiveBookReducer from './reducerActiveBook';
import WeatherReducer from './reducerWeather';
import PostsReducer from './reducerPosts';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  weather: WeatherReducer,
  posts: PostsReducer,
});

export default rootReducer;
