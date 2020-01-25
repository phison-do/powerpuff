import { combineReducers } from "redux";
import getShowsReducer from "./getShowsReducer";

export default combineReducers({
  shows: getShowsReducer
});
