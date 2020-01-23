import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestTvShowEpisodes } from "../../../store";
import { Link } from "react-router-dom";

import "./episodeList.scss";

export const EpisodeList = ({ match }) => {
  const {
    params: { id }
  } = match;

  const { dataList, error, loading, errorMsg } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTvShowEpisodes(id));
  }, [id, dispatch]);

  if (loading) return <div>loading...</div>;

  return (
    <div className="wrapper">
      {error && <div>Error loading data: {errorMsg}</div>}
      <ul className="episodes">
        {dataList &&
          dataList.map((show, i) => (
            <li key={i}>
              {show.image && <img src={show.image.medium} alt="" />}
              <div className="episode-content">
                <h3 className="episode-name">{show.name}</h3>
                <div className="meta">
                  <span>Season: {show.season}</span>
                  <span>Episode: {show.number}</span>
                </div>
                <Link className="btn" to={`/episode/${show.id}`}>
                  Readmore
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
