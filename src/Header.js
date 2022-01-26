import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExploreIcon from '@material-ui/icons/Explore';
import { Link, useHistory } from "react-router-dom";
import ViewDayIcon from '@material-ui/icons/ViewDay';
function Header({ backButton }) {
   const history = useHistory();
    return (
        <div className="header">
          {backButton ? (
             <IconButton onClick={() => history.replace(backButton)}>
              <ArrowBackIosIcon fontSize="larg" className="header__back" />
             </IconButton>
           ) : (
            <Link to="/logout">
              <IconButton>
                <PersonIcon className = "header__icon" fontSize="large"/>
              </IconButton>
            </Link>
           )}
          <Link to="/people">
           <IconButton>
             <ExploreIcon className = "header__icon" fontSize="large"/>
           </IconButton>
         </Link>
        <Link to="/">
          <IconButton>
             <ViewDayIcon className = "header__icon" fontSize="large"/>
          </IconButton>
        </Link>
        <Link to="/chat">
          <IconButton>
            <ForumIcon className = "header__icon" fontSize="large"/>
          </IconButton>
        </Link>
        </div>
    )
}
export default Header;