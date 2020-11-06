import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import {Link , useHistory} from "react-router-dom";
//import logo from "./logo2.png";

function Header ({backButton}) {
    return(
        <div className = "header">
            {backButton ? (
                // eslint-disable-next-line no-restricted-globals
                <IconButton onClick={() => history.back()}>
                <ArrowBackIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}


            
            <Link to="/chat">
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
            
        </div>
    );
}

export default Header;