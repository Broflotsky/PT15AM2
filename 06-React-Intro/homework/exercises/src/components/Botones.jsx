import React from "react";

class Botones extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => alert(this.props.alerts.ocultar)}>Ocultar</button>
        <button onClick={() => alert(this.props.alerts.mostrar)}>Mostrar</button>
      </div>
    );
  }
}

export default Botones;