import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";

const initalState = {
  dataList: [],
  loading: false,
  error: false
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "RECEIVE_DATA_TVSHOWS":
      return {
        ...state,
        dataList: action.dataList,
        loading: false,
        error: action.error
      };
    case "RECEIVE_DATA_TVSHOWS_EPISODES":
      return {
        ...state,
        dataList: action.dataList,
        loading: false,
        error: action.error
      };
    case "RECEIVE_DATA_TVSHOWS_EPISODE":
      return {
        ...state,
        dataList: action.dataList,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const requestTvShows = () => async dispatch => {
  try {
    const json = await axios.get(
      "http://api.tvmaze.com/search/shows?q=The%20Powerpuff%20Girls"
    );
    console.log(json);
    dispatch({
      type: "RECEIVE_DATA_TVSHOWS",
      dataList: json.data,
      error: false,
      errorMsg: ""
    });
  } catch (e) {
    dispatch({
      type: "RECEIVE_DATA_TVSHOWS",
      dataList: [],
      error: true,
      errorMsg: e
    });
  }
};

export const requestTvShowEpisodes = id => async dispatch => {
  try {
    const json = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
    dispatch({
      type: "RECEIVE_DATA_TVSHOWS_EPISODES",
      dataList: json.data,
      error: false,
      errorMsg: ""
    });
  } catch (e) {
    dispatch({
      type: "RECEIVE_DATA_TVSHOWS_EPISODES",
      dataList: [],
      error: true,
      errorMsg: e
    });
  }
};

export const requestTvShowEpisode = id => async dispatch => {
  try {
    const json = await axios.get(`http://api.tvmaze.com/episodes/${id}`);
    dispatch({
      type: "RECEIVE_DATA_TVSHOWS_EPISODE",
      dataList: json.data,
      error: false,
      errorMsg: ""
    });
  } catch (e) {
    dispatch({
      type: "RECEIVE_DATA_TVSHOWS_EPISODE",
      dataList: [],
      error: true,
      errorMsg: e
    });
  }
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
