import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BooksReducer from './reducerBooks';
import ActiveBookReducer from './reducerActiveBook';
import WeatherReducer from './reducerWeather';
import PostsReducer from './reducerPosts';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
