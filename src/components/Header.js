import React from "react";
import "../assests/css/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import logo from "../assests/img/logo.png";

function Header({ backButton }) {
  return (
    <div className="header">
      <span className="brand">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </span>
      <span>
        {backButton ? (
          // eslint-disable-next-line no-restricted-globals
          <IconButton onClick={() => history.back()}>
            <ArrowBackIcon fontSize="large" className="header__icon" />
          </IconButton>
        ) : (
          <IconButton>
            <PersonIcon className="header__icon" />
          </IconButton>
        )}

        <Link to="/chat">
          <IconButton>
            <ForumIcon className="header__icon" />
          </IconButton>
        </Link>
      </span>
    </div>
  );
}

export default Header;
