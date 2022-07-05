import React from "react";

class Botones extends React.Component {
  render() {
    const { alerts } = this.props;
    return (
      <div>
        <button onClick={() => window.alert(alerts.m1)}>Módulo 1</button>
        <button onClick={() => window.alert(alerts.m2)}>Módulo 2</button>
      </div>
    );
  }
}

export default Botones;
