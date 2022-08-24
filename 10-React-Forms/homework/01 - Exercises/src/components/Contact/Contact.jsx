import React from "react";

export default function Contact() {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  function handleChange(evento) {}
  return (
    <div>
      Crear Formulario
      <form>
        <label>Nombre:</label>
        <input
          name="name"
          value={input.name}
          placeholder="Escribe tu nombre..."
          type="text"
        />

        <label>Correo Electrónico:</label>
        <input
          name="email"
          value={input.email}
          placeholder="Escribe tu email..."
          type="text"
        />

        <label>Teléfono:</label>
        <input
          name="phone"
          value={input.telefono}
          placeholder="Escribe un teléfono..."
          type="number"
        />

        <label>Asunto:</label>
        <input
          name="subject"
          value={input.asunto}
          placeholder="Escribe el asunto..."
          type="text"
        />

        <label>Mensaje:</label>
        <input
          name="message"
          value={input.mensaje}
          placeholder="Escribe tu mensaje..."
          type="text"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
