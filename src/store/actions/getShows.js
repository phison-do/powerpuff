import { FETCH_SHOW_DATA } from "./actionTypes";
import Axios from "axios";

export const getShows = url => {
  return async dispatch => {
    return await Axios.get(url)
      .then(response => {
        console.log(response.data);
        dispatch(getShowsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getShowsSuccess = data => {
  return {
    type: FETCH_SHOW_DATA,
    payload: {
      data: data
    }
  };
};
