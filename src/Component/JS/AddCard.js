import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  DOING,
  DONE,
  selectDOING,
  selectDONE,
  selectTODO,
  TODO,
} from "../../features/addCardSlice";
import "../CSS/AddCard.css";
import { useForm } from "react-hook-form";

function AddCard() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescri] = useState("");
  const [message, setMessage] = useState("");
  const [column, setColumn] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Validate = (data) => {
    console.log(data);
    // data = JSON.stringify(data);
    // console.log(data);
    console.log(data.name)
    setName(data.name);
    setTitle(data.title);
    setDescri(data.description);
    setMessage(data.message);
    console.log(name, title, description, message);
    setId(`${Math.floor(Math.random() * 5000)}`);
    if (column == 1) {
      dispatch(TODO({ id, name, title, description, message, column }));
    } else if (column == 2) {
      dispatch(DOING({ id, name, title, description, message, column }));
    } else if (column == 3) {
      dispatch(DONE({ id, name, title, description, message, column }));
    }
  };
  return (
    <div className="addcard">
      <h1>ADD CARD</h1>
      <form onSubmit={handleSubmit(Validate)}>
        <div className="txt_field">
          <input
            type="text"
            {...register("name", {
              required: true,
              maxLength: 10,
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
            {...register("title", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.title?.type === "required" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              This field is required
            </p>
          )}
          {errors?.title?.type === "maxLength" && (
            <p style={{ color: "red", fontSize: "20px", fontWeight: "700" }}>
              title cannot exceed 20 characters
            </p>
          )}
          {errors?.title?.type === "pattern" && (
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
            {...register("description", {
              required: true,
              maxLength: 25,
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
            {...register("message", {
              required: true,
              maxLength: 25,
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
        <input type="submit" value="ADD CARD" className="addcard_btn" />
      </form>
    </div>
  );
}

export default AddCard;
