import React from 'react';

export default function Params(props) {
  return (
    <div>
      <h2>First Parameter: {props.match.params.firstParam}</h2>
      <h2>Second Parameter: {props.match.params.secondParam}</h2>
    </div>
  );
};
  