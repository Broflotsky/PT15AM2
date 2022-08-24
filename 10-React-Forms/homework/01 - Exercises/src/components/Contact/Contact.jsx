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
          type=""
        />

        <label>Correo Electrónico:</label>
        <input
          name="correo_electronico"
          value={state.inputs.email}
          placeholder="Escribe tu email..."
          type=""
        />

        <label>Teléfono:</label>
        <input
          name="telefono"
          value={state.inputs.phone}
          placeholder="Escribe un teléfono..."
          type=""
        />

        <label>Asunto:</label>
        <input
          name="asunto"
          value={state.inputs.subject}
          placeholder="Escribe el asunto..."
          type=""
        />

        <label>Mensaje:</label>
        <input
          name="mensaje"
          value={state.inputs.message}
          placeholder="Escribe tu mensaje..."
          type=""
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
