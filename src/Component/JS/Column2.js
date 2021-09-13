import React from "react";
import "../CSS/Column2.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Post from "./Post";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectDOING } from "../../features/addCardSlice";

function Column2() {
  const doing = useSelector(selectDOING);

  return (
    <div className="column2">
      <div className="column_container">
        <div className="column_title">
          <h1>DOING</h1>
          <IconButton className="icons">
            <MoreHorizIcon className="icons" />
          </IconButton>
        </div>
        <div className="column_post">
          {doing.map((item) => (
            <Post
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.name}
              description={item.description}
              message={item.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Column2;
