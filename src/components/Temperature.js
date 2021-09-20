import React from "react";
import "./Temperature.css";
import { Card  } from "react-bootstrap";

const Temperature = (props) => {
  return (
    <Card className="m-auto text-center d-block w-lg-50 w-50">
      <Card.Header>{props.city}</Card.Header>
      <Card.Body>
        <Card.Title>{Math.round(props.temp)}</Card.Title>
        <Card.Text>{props.description.toUpperCase()}</Card.Text>
        <h4 class="high-low">
          <span>H:{Math.round(props.high)}</span>
          <span>L:{Math.round(props.low)}</span>
        </h4>
      </Card.Body>
    </Card>
  );
};

export default Temperature;
