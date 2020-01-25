import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getShows } from "../../../store/actions/getShows";
import { PageLayout } from "../../pageLayout/PageLayout";

import "./episodeList.scss";

export const EpisodeList = ({ match }) => {
  const {
    params: { id }
  } = match;

  const { shows } = useSelector(state => state);
  const dispatch = useDispatch();
  const url = `http://api.tvmaze.com/shows/${id}/episodes`;

  useEffect(() => {
    dispatch(getShows(url));
  }, [url, dispatch]);

  return (
    <PageLayout>
      <ul className="episodes">
        {shows.length > 0 &&
          shows.map((show, i) => (
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
    </PageLayout>
  );
};
