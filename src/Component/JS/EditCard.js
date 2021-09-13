import { Button } from "@material-ui/core";
import React, { useState } from "react";
import '../CSS/EditCard.css'
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


function EditCard() {
    
  const todo = useSelector(selectTODO);
  const doing = useSelector(selectDOING);
  const done = useSelector(selectDONE);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [descri, setDescri] = useState("");
  const [message, setMessage] = useState("");
  const [column, setColumn] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="editcard">
      <h1>ADD CARD</h1>
      <form>
        <div className="txt_field">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span></span>
          <label>name</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <span></span>
          <label>Title</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            onChange={(e) => setDescri(e.target.value)}
            required
          />
          <span></span>
          <label>Description</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
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
        <Button className="addcard_btn" onClick={Validate}>
          ADD CARD
        </Button>
      </form>
    </div>
  );
}

export default EditCard;
