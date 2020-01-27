import React from "react";
import { Link } from "react-router-dom";
import { HomeSvg } from "../svg/HomeSvg";

import "./navigation.scss";

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
