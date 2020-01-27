import { combineReducers } from "redux";
import getShowsReducer from "./getShowsReducer";
import getEpisodesReducer from "./getEpisodesReducer";

export default combineReducers({
  shows: getShowsReducer,
  episodes: getEpisodesReducer
});
