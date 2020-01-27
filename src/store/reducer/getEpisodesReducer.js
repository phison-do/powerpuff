import { FETCH_EPISODES_DATA } from "../actions/actionTypes";

export default function getEpisodesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_EPISODES_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
