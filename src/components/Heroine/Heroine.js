import React from "react";
import "./Heroine.css";

const Heroine = props => (
  <div className="card">
    <div className="img-container">
      <img className = "character" alt={props.name} src={require(`../images/${props.name}.jpg`)} 
      onClick={() => props.rememberHeroine(props.id)} />
    </div>
    <div className="content">
      <ul>
        <li>
        </li>
      </ul>
    </div>
  </div>
);

export default Heroine;
