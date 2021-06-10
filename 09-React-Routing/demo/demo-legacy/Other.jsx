import React from 'react';

export default function Other({ match, location, history }) {
  return (
    <div>
      <h2>Parameter: {match.params.paramOne}</h2>
    </div>
  );
};
  