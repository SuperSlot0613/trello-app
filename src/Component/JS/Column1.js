import React from "react";
import { useSelector } from "react-redux";
import { selectTODO, TODO } from "../../features/addCardSlice";
import "../CSS/Column1.css";
import Post from "./Post";
import { IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Column1() {
  const todo = useSelector(selectTODO);
  return (
    <div className="column1">
      <div className="column_container">
        <div className="column_title">
          <h1>TO DO</h1>
          <IconButton className="icons">
            <MoreHorizIcon className="icons" />
          </IconButton>
        </div>
        <div className="column_post">
          {todo.map((item) => (
            <Post
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.name}
              description={item.description}
              message={item.message}
              column={item.column}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Column1;
