import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { animals } = this.props;
    return (
      <div>
        {animals?.map((animal, key) => (
          <div key={key}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt="img not found" width="300px" />
            <br />
            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}
