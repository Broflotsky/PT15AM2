import React from 'react';
import { useLocation } from "react-router-dom";

export default function New() {
  let location = useLocation();

  return (
    <div>
    {
      location.state && location.search
      ? <>
          <h2>State: {location.state?.name}</h2>
          <h2>Query: {location.search}</h2>
        </>
      : <h2>New missing parameters</h2>
    }
    </div>
  );
};
  