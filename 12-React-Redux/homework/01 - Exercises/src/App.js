import React from "react";

export default function App() {
  const [input, setInput] = React.useState("");

  function handleChange(e) {
    e.preventDefault();
    setInput();
  }

  function handleAddList(e) {}

  return (
    <div>
      <label>Ingresa un item:</label>
      <input value={input} onChange={handleChange} />
      <button>Agregar</button>
    </div>
  );
}
