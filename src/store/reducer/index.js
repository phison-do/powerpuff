import { combineReducers } from "redux";
import getShowsReducer from "./getShowsReducer";
import getEpisodeReducer from "./getEpisodeReducer";
import getEpisodesReducer from "./getEpisodesReducer";

export default combineReducers({
  shows: getShowsReducer,
  episode: getEpisodeReducer,
  episodes: getEpisodesReducer
});
