import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MyWatchList</Link>
          </div>
          <div className="nav-links">
            <li>
              <Link to="/" className="btn">
                Search
              </Link>
            </li>
            <li>
              <Link to="/favourites">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
