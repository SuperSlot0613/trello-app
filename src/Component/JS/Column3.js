import React from "react";
import "../CSS/Column3.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Post from "./Post";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectDONE } from "../../features/addCardSlice";
import FlipMove from "react-flip-move";

function Column3() {
  const done = useSelector(selectDONE);
  return (
    <div className="column3">
      <div className="column_container">
        <div className="column_title">
          <h1>DONE</h1>
          <IconButton className="icons">
            <MoreHorizIcon className="icons" />
          </IconButton>
        </div>
        <div className="column_post">
          <FlipMove>
            {done.map((item) => (
              <Post
                id={item.id}
                title={item.title}
                name={item.name}
                description={item.descri}
                message={item.message}
              />
            ))}
          </FlipMove>
        </div>
      </div>
    </div>
  );
}

export default Column3;
