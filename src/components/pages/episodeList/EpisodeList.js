import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEpisodes } from "../../../store/actions/getEpisodes";
import { PageLayout } from "../../pageLayout/PageLayout";
import { Header } from "../../header/Header";

import "./episodeList.scss";

export const EpisodeList = ({ match }) => {
  const {
    params: { id }
  } = match;

  const { episodes } = useSelector(state => state);
  const dispatch = useDispatch();
  const url = `http://api.tvmaze.com/shows/${id}/episodes`;

  useEffect(() => {
    dispatch(getEpisodes(url));
  }, [url, dispatch]);

  return (
    <PageLayout>
      <Header title="The Powerpuff girls" />

      <ul className="episodes">
        {episodes.length > 0 &&
          episodes.map((show, i) => (
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
