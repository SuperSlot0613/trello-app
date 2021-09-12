import React from "react";
import { useSelector } from "react-redux";
import { TODO } from "../../features/addCardSlice";
import "../CSS/Column1.css";
import CardComponent from "./CardComponent";

function Column1() {
  const todo = useSelector(TODO)
  return (
    <div className="column1">
        <CardComponent title="TO DO"/>
    </div>
  );
}

export default Column1;
