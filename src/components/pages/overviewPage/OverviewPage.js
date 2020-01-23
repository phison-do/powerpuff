import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestTvShows } from "../../../store";
import { Link } from "react-router-dom";

import "./overviewPage.scss";

export const OverviewPage = () => {
  const { dataList, error, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTvShows());
  }, [dispatch]);

  const createMarkup = genres => {
    return { __html: genres };
  };

  if (loading) return <div>loading...</div>;

  return (
    <div className="wrapper">
      {error && <div>Ooops, something went wrong.</div>}

      <h1>The Powerpuff girls</h1>

      {dataList &&
        dataList.map((data, i) => (
          <div className="tvshow" key={i}>
            <img className="tvshow-image" src={data.show.image.medium} alt="" />
            <div className="tvshow-content">
              <div className="tvshow-content-head">
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
    </div>
  );
};
