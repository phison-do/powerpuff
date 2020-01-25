import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShows } from "../../../store/actions/getShows";

import "./episode.scss";
import { PageLayout } from "../../pageLayout/PageLayout";

export const Episode = ({ match }) => {
  const {
    params: { id }
  } = match;

  const { shows } = useSelector(state => state);
  const dispatch = useDispatch();
  const url = `http://api.tvmaze.com/episodes/${id}`;

  useEffect(() => {
    dispatch(getShows(url));
  }, [url, dispatch]);

  const createMarkup = summary => {
    return { __html: summary };
  };

  return (
    <PageLayout>
      {shows && (
        <div className="episode">
          {shows.image && (
            <img className="episode-image" src={shows.image.medium} alt="" />
          )}
          <div className="episode-content">
            <h2>{shows.name}</h2>
            <div className="meta">
              <span>Season: {shows.season}</span>
              <span>Episode: {shows.number}</span>
              <div dangerouslySetInnerHTML={createMarkup(shows.summary)} />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};
