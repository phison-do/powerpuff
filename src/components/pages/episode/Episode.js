import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestTvShowEpisode } from "../../../store";

import "./episode.scss";

export const Episode = ({ match }) => {
  const {
    params: { id }
  } = match;

  const { dataList, error, loading, errorMsg } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTvShowEpisode(id));
  }, [id, dispatch]);

  if (loading) return <div>loading...</div>;

  const createMarkup = summary => {
    return { __html: summary };
  };

  return (
    <div className="wrapper">
      {error && <div>Error loading data: {errorMsg}</div>}
      {dataList && (
        <div className="episode">
          {dataList.image && (
            <img className="episode-image" src={dataList.image.medium} alt="" />
          )}
          <div className="episode-content">
            <h2>{dataList.name}</h2>
            <div className="meta">
              <span>Season: {dataList.season}</span>
              <span>Episode: {dataList.number}</span>
            </div>
            <div dangerouslySetInnerHTML={createMarkup(dataList.summary)} />
          </div>
        </div>
      )}
    </div>
  );
};
