import React from "react";

export default class Animals extends React.Component {
  render() {
    const { animals } = this.props;
    console.log(animals);
    return (
      <div>
        <h2>Animals</h2>
        <ul>
          {animals.map((animal, key) => (
            <li key={key}>{animal.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
