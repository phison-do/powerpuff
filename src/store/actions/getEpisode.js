import { FETCH_EPISODE_DATA } from "./actionTypes";
import Axios from "axios";

export const getEpisode = url => {
  return async dispatch => {
    return await Axios.get(url)
      .then(response => {
        dispatch(getEpisodeSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getEpisodeSuccess = data => {
  return {
    type: FETCH_EPISODE_DATA,
    payload: {
      data: data
    }
  };
};
