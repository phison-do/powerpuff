import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getShows } from "../../../store/actions/getShows";
import { PageLayout } from "../../pageLayout/PageLayout";
import { Header } from "../../header/Header";

import "./homePage.scss";

export const HomePage = () => {
  const { shows } = useSelector(state => state);
  const dispatch = useDispatch();
  const url = "http://api.tvmaze.com/search/shows?q=The%20Powerpuff%20Girls";

  useEffect(() => {
    dispatch(getShows(url));
  }, [dispatch]);

  const createMarkup = genres => {
    return { __html: genres };
  };

  return (
    <PageLayout>
      <Header title="The Powerpuff girls" />

      {shows.length > 0 &&
        shows.map((data, i) => (
          <div className="show" key={i}>
            <img className="show-image" src={data.show.image.medium} alt="" />
            <div className="show-content">
              <div className="show-content-head">
                <h2>{data.show.name}</h2>
                {data.show.rating.average && (
                  <span className="rating">
                    Rating: {data.show.rating.average}
                  </span>
                )}
                <ul className="genres">
                  {Object.values(data.show.genres).map((genre, i) => (
                    <li key={i}>{genre}</li>
                  ))}
                </ul>
              </div>

              <div dangerouslySetInnerHTML={createMarkup(data.show.summary)} />

              <Link className="btn" to={`/episodes/${data.show.id}`}>
                All Episodes
              </Link>
            </div>
          </div>
        ))}
    </PageLayout>
  );
};
