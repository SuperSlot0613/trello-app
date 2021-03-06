import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import AddCard from "./Component/JS/AddCard";
import Column1 from "./Component/JS/Column1";
import Column2 from "./Component/JS/Column2";
import Column3 from "./Component/JS/Column3";
import CancelIcon from "@material-ui/icons/Cancel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [showForm, setshowForm] = useState(false);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          {showForm && (
            <div className="Card_add">
              <CancelIcon
                className="cross_btn"
                onClick={() => setshowForm(false)}
              >
                ADD CARD
              </CancelIcon>
            </div>
          )}
          {!showForm && (
            <div className="Card_add">
              <Button className="add_btn" onClick={() => setshowForm(true)}>
                ADD CARD
              </Button>
            </div>
          )}
          {showForm && <AddCard className="appcard" />}
          <div className="app_body">
            <Column1 />
            <Column2 />
            <Column3 />
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
