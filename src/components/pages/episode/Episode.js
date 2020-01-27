import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEpisode } from "../../../store/actions/getEpisode";
import { PageLayout } from "../../pageLayout/PageLayout";
import { Header } from "../../header/Header";

import "./episode.scss";

export const Episode = ({ match }) => {
  const {
    params: { id }
  } = match;

  const { episode } = useSelector(state => state);
  const dispatch = useDispatch();
  const url = `http://api.tvmaze.com/episodes/${id}`;

  useEffect(() => {
    dispatch(getEpisode(url));
  }, [url, dispatch]);

  const createMarkup = summary => {
    return { __html: summary };
  };

  return (
    <PageLayout>
      <Header title="The Powerpuff girls" />

      {episode && (
        <div className="episode">
          {episode.image && (
            <img className="episode-image" src={episode.image.medium} alt="" />
          )}
          <div className="episode-content">
            <h2>{episode.name}</h2>
            <div className="meta">
              <span>Season: {episode.season}</span>
              <span>Episode: {episode.number}</span>
              <div dangerouslySetInnerHTML={createMarkup(episode.summary)} />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};
