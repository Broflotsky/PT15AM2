import React from 'react';
import { useParams } from "react-router-dom";

export default function Profile(props) {
  let { id } = useParams();

  return (
    <div>
      <h2>Profile ID: {id}</h2>
    </div>
  );
};
  