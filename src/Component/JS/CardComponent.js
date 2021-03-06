import React from "react";
import '../CSS/CardComponent.css'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Post from "./Post";
import { IconButton } from "@material-ui/core";

function CardComponent({mtitle,title,id,name,description,message}) {
  return (
      <div className="column_container">
        <div className="column_title">
          <h1>{mtitle}</h1>
          <IconButton className="icons">
            <MoreHorizIcon className="icons" />
          </IconButton>
        </div>
        <div className="column_post">
          <Post 
           id={id}
           title={title}
           name={name}
           description={description}
           message={message}
           />
        </div>
    </div>
  );
}

export default CardComponent;
