import React from "react";
import "./navigation.scss";

import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">overview</Link>
          <Link to="/detail">detail</Link>
        </li>
      </ul>
    </nav>
  );
};
