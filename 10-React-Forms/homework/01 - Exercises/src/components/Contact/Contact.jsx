import React from "react";

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});
  function handleChange(evento) {
    setInputs({
      ...inputs,
      [evento.target.name]: evento.target.value,
    });
  }
  return (
    <div>
      Crear Formulario
      <form>
        <label>Nombre:</label>
        <input
          name="name"
          value={inputs.name}
          placeholder="Escribe tu nombre..."
          type="text"
          onChange={handleChange}
        />

        <label>Correo Electrónico:</label>
        <input
          name="email"
          value={inputs.email}
          placeholder="Escribe tu email..."
          type="text"
          onChange={handleChange}
        />

        <label>Teléfono:</label>
        <input
          name="phone"
          value={inputs.phone}
          placeholder="Escribe un teléfono..."
          type="number"
          onChange={handleChange}
        />

        <label>Asunto:</label>
        <input
          name="subject"
          value={inputs.subject}
          placeholder="Escribe el asunto..."
          type="text"
          onChange={handleChange}
        />

        <label>Mensaje:</label>
        <textarea
          name="message"
          value={inputs.message}
          placeholder="Escribe tu mensaje..."
          type="text"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
