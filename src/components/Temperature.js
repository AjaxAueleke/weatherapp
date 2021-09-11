import React from "react";
import "./Temperature.css";

const Temperature = (props) => {
  return (
    <div className ="temperature">
      <h1 className="city">{props.city}</h1>
      <h4 className="main">{props.description.toUpperCase()}</h4>
      <h1 className="main-temp">{Math.round(props.temp)}</h1>
      <h4 class="high-low">
        <span>H:{Math.round(props.high)}</span>
        <span>L:{Math.round(props.low)}</span>
      </h4>
    </div>
  );
};

export default Temperature;