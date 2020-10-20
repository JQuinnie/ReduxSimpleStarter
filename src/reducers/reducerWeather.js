import { FETCH_WEATHER } from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // never manipulate state, return new state
  }
  return state;
}
