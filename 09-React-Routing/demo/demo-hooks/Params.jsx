import React from 'react';
import { useParams } from "react-router-dom";

export default function Params(props) {
  let { firstParam, secondParam } = useParams();

  return (
    <div>
      <h2>First Parameter: {firstParam}</h2>
      <h2>Second Parameter: {secondParam}</h2>
    </div>
  );
};
  