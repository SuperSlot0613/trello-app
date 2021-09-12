import React from "react";
import "../CSS/Post.css";
import { Avatar } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import InputOption from "./InputOption";

function Post() {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src=""></Avatar>
        <div className="post_info">
          <h2>Saurabh</h2>
          <p>This is Project Work</p>
        </div>
      </div>
      <div className="post_body">
        <p>Hi guesss</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={EditIcon} title="Edit" color="gray" />
        <InputOption Icon={DeleteIcon} title="Delete" color="gray" />
      </div>
    </div>
  );
}

export default Post;
