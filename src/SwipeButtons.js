import React from 'react';

import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
           <IconButton className="swipeButtons__left">
             <CloseIcon fontSize="large" />
           </IconButton>
           <IconButton className="swipeButtons__star">
             <StarRateIcon fontSize="large" />
           </IconButton>
           <IconButton className="swipeButtons__right">
             <FavoriteIcon fontSize="large" />
           </IconButton>
        </div>
    )
}

export default SwipeButtons