import React from "react";
import { connect } from "react-redux";
import "./card.css";

export function Card({ name, price, id }) {
  return (
    <div className="cardBg">
      <h5>{name}: </h5>
      <h5>${price}</h5>
      <button className="cardBtn">X</button>
    </div>
  );
}

export function mapDispatchToProps() {}

export default connect(null, mapDispatchToProps)(Card);
