import React, { forwardRef, useEffect, useState } from "react";
import "../CSS/Post.css";
import { Avatar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_LIST } from "../../features/addCardSlice";

const Post = forwardRef(({ id, title, name, description, message },ref) => {
  const [seed, setseed] = useState("");
  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);

  const dispatch = useDispatch();

  const deleteCard = () => {
    console.log(id);
    dispatch(REMOVE_FROM_LIST(id));
  };

  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        ></Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <div className="InputOption">
          <EditIcon className="editIcon" style={{ color: "gray" }} />
          <h4>Edit</h4>
        </div>
        <div className="InputOption" onClick={deleteCard} >
          <DeleteIcon style={{ color: "gray" }} />
          <h4>Delete</h4>
        </div>
      </div>
    </div>
  );
});

export default Post;
