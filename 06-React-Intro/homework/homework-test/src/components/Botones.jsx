import React from "react";

class Botones extends React.Component {
  render() {
    const { alerts } = this.props;
    return (
      <div>
        <button onClick={() => alert(alerts.ocultar)}>Ocultar</button>
        <button onClick={() => alert(alerts.mostrar)}>Mostrar</button>
      </div>
    );
  }
}

export default Botones;
