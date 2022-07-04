import React from "react";

class Botones extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => alert("Ocultar")}>
          {this.props.alerts.ocultar}
        </button>
        <button onClick={() => alert("Mostrar")}>
          {this.props.alerts.mostrar}
        </button>
      </div>
    );
  }
}

export default Botones;
