import React from "react";

export default function Contact() {
  const [state, setState] = React.useState({
    errors: {},
    inputs: {
      name: "",
      email: "",
      phone: 0,
      subject: "",
      message: "",
    },
  });

  function handleChange(evento) {}
  return (
    <div>
      Crear Formulario
      <form>
        <label>Nombre:</label>
        <input
          name="name"
          value={state.inputs.name}
          placeholder="Escribe tu nombre..."
          type="text"
        />

        <label>Correo Electrónico:</label>
        <input
          name="email"
          value={state.inputs.email}
          placeholder="Escribe tu email..."
          type="text"
        />

        <label>Teléfono:</label>
        <input
          name="phone"
          value={state.inputs.phone}
          placeholder="Escribe un teléfono..."
          type="number"
        />

        <label>Asunto:</label>
        <input
          name="subject"
          value={state.inputs.subject}
          placeholder="Escribe el asunto..."
          type="text"
        />

        <label>Mensaje:</label>
        <input
          name="message"
          value={state.inputs.message}
          placeholder="Escribe tu mensaje..."
          type="text"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
