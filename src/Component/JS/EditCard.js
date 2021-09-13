import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "../CSS/EditCard.css";
import { useDispatch } from "react-redux";
import {
  DOING,
  DONE,
  REMOVE_FROM_LIST,
  TODO,
} from "../../features/addCardSlice";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

function EditCard({ id1, title1, name1, description1, message1, column1 }) {
  const [name, setName] = useState(name1);
  const [title, setTitle] = useState(title1);
  const [description, setDescri] = useState(description1);
  const [message, setMessage] = useState(message1);
  const [column, setColumn] = useState(column1);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Validate = (data) => {
    console.log(data);
    setName(name);
    setTitle(title);
    setDescri(description);
    setMessage(message);
    console.log(column);
    dispatch(REMOVE_FROM_LIST(id1));
    setId(`${Math.floor(Math.random() * 5000)}`);
    if (column == 1) {
      dispatch(TODO({ id, name, title, description, message, column }));
    } else if (column == 2) {
      dispatch(DOING({ id, name, title, description, message, column }));
    } else if (column == 3) {
      dispatch(DONE({ id, name, title, description, message, column }));
    }
    history.push("/");
  };

  return (
    <div className="editcard">
      <h1>EDIT CARD</h1>
      <form onSubmit={handleSubmit(Validate)}>
        <div className="txt_field">
          <input
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            {...register("name", {
              required: true,
              maxLength: 20,
              value: name,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.name?.type === "required" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              This field is required
            </p>
          )}
          {errors?.name?.type === "maxLength" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              name cannot exceed 20 characters
            </p>
          )}
          {errors?.name?.type === "pattern" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              Alphabetical characters only
            </p>
          )}
          <span></span>
          <label>name</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            {...register("title", {
              required: true,
              maxLength: 20,
              value: title,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.name?.type === "required" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              This field is required
            </p>
          )}
          {errors?.name?.type === "maxLength" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              name cannot exceed 20 characters
            </p>
          )}
          {errors?.name?.type === "pattern" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              Alphabetical characters only
            </p>
          )}
          <span></span>
          <label>Title</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            // value={description}
            // onChange={(e) => setDescri(e.target.value)}
            {...register("description", {
              required: true,
              maxLength: 25,
              value: description,
            })}
          />
          {errors?.description?.type === "required" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              This field is required
            </p>
          )}
          {errors?.description?.type === "maxLength" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              description cannot exceed 25 characters
            </p>
          )}
          <span></span>
          <label>Description</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            {...register("message", {
              required: true,
              maxLength: 25,
              value: message,
            })}
          />
          {errors?.message?.type === "required" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              This field is required
            </p>
          )}
          {errors?.message?.type === "maxLength" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              message cannot exceed 25 characters
            </p>
          )}
          <span></span>
          <label>Messsage</label>
        </div>
        <div className="txt_field">
          <select
            value={column}
            onChange={(e) => setColumn(e.target.value)}
            className="browser-default custom-select"
          >
            <option value="">.....</option>
            <option value="1">Column 1</option>
            <option value="2">Column 2</option>
            <option value="3">Coulmn 3</option>
          </select>
        </div>
        <input type="submit" className="addcard_btn" value="EDIT CARD" />
      </form>
    </div>
  );
}

export default EditCard;
