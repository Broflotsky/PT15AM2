import React from "react";

const DivButtons = null;
const Buttons = null;

export default class Botones extends React.Component {
  render() {
    const { alerts } = this.props;
    return (
      <div>
        <button onClick={() => window.alert(alerts.m1)}>Módulo 1</button>
        <button onClick={() => window.alert(alerts.m2)}>Módulo 2</button>
      </div>
    )
  }
}

//Esto lo exportamos para los tests
export { DivButtons, Buttons };
