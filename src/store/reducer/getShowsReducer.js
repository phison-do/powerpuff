import { FETCH_SHOW_DATA } from "../actions/actionTypes";

export default function getShowsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SHOW_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
