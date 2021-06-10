import React from 'react';

export default function Location({ location }) {
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
  