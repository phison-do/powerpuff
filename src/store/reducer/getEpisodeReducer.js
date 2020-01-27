import { FETCH_EPISODE_DATA } from "../actions/actionTypes";

export default function getEpisodeReducer(state = [], action) {
  switch (action.type) {
    case FETCH_EPISODE_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
