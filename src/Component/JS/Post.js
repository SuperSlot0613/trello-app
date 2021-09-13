import React, { forwardRef, useEffect, useState } from "react";
import "../CSS/Post.css";
import { Avatar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_LIST } from "../../features/addCardSlice";
import EditCard from "./EditCard";
import CancelIcon from "@material-ui/icons/Cancel";

const Post = forwardRef(
  ({ id, title, name, description, message, column }, ref) => {
    const [showedit, setshowedit] = useState(false);
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
            className="avatar_icon"
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
          <div className="InputOption" onClick={() => setshowedit(true)}>
            <EditIcon className="editIcon" style={{ color: "gray" }} />
            <h4>Edit</h4>
          </div>
          <div className="InputOption" onClick={deleteCard}>
            <DeleteIcon style={{ color: "gray" }} />
            <h4>Delete</h4>
          </div>
          {showedit && (
            <EditCard
              key={id}
              id1={id}
              title1={title}
              name1={name}
              descriptipn1={description}
              message1={message}
              column1={column}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Post;
