import React from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};
