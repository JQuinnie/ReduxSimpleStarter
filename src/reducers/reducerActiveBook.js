import { BOOK_SELECTED } from '../actions/constants';

// state argument is not app state, only the state this reducer is responsible for
// when app first boots up, there is no state, so a default has to be in place
export default function(state = null, action) {
  switch(action.type) {
    case BOOK_SELECTED:
      return action.payload;
  }
  return state;
}
