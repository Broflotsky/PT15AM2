import React from 'react';
import { useLocation } from "react-router-dom";

export default function Location() {
  let location = useLocation();
  console.log("Location: ", location);
  return (
    <div>
    {
      location.state
      ? <h2>State: {location.state?.extraData}</h2>
      : <h2>Query: {location.search}</h2>
    }
    </div>
  );
};
  