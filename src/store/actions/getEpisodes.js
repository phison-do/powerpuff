import { FETCH_EPISODES_DATA } from "./actionTypes";
import Axios from "axios";

export const getEpisodes = url => {
  return async dispatch => {
    return await Axios.get(url)
      .then(response => {
        dispatch(getEpisodesSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getEpisodesSuccess = data => {
  return {
    type: FETCH_EPISODES_DATA,
    payload: {
      data: data
    }
  };
};
