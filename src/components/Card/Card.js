import React from "react";
import Styles from "./Card.module.css";
import {Chip,Tooltip} from "@mui/material";

function Card({ data, type }) {
  const createCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, songs } = data;
        return (
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>  
          <div className={Styles.wrapper}>
            <div className={Styles.card}>
              <img src={image} alt="album" />
              <div className={Styles.banner}>
                <Chip 
                  label={`${follows} Follows`}
                  size= "small"
                  className={Styles.chip}
                />
              </div>
            </div>
              <div className={Styles.titleWrapper}>
                <p>{title}</p>
              </div>
          </div>
       </Tooltip> 
        );
      }
      default:
        return <></>;
    }
  };
  return createCard(type);
}

export default Card;