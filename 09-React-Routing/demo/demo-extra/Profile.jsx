import React, { useState } from 'react';
import { useParams, Prompt } from "react-router-dom";

export default function Profile() {
  let { id } = useParams();
  let [isBlocked, setIsBlocked] = useState(false);

  function onProfileSubmit(e) {
    e.preventDefault();
    setIsBlocked(false);
  }

  function onInputChange(e) {
    setIsBlocked(e.target.value.length > 0);
  }

  return (
    <form onSubmit={onProfileSubmit}>
      {/* <Prompt message="Are you sure you want to leave?" /> */}
      {/* <Prompt
        when={isBlocked}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      /> */}
      <Prompt
        message={location => 
          location.pathname.startsWith("/new")
            ? true
            : `Are you sure you want to go to ${location.pathname}`
        }
      />
      <h2>Profile ID: {id}</h2>
      <input placeholder="Name" onChange={onInputChange} />
      <input type="submit" value="SAVE" />
      {isBlocked && <p style={{color: 'red'}}>Changes will be lost if you leave</p>}
    </form>
  );
};
  