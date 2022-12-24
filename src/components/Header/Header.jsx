import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.wrapper}>
      <Link to="/">
        <h2>Books Library</h2>
      </Link>

      <Link>
        <p>My books</p>
      </Link>

      <div>
        <Link to="/login">
            <button>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
