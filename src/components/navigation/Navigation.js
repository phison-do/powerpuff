import React from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";
import { HomeSvg } from "../svg/HomeSvg";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <HomeSvg />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
