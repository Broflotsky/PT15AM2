import { React } from "react";

export default function Contact() {
  const [input, setInput] = React.useState({
    name: "",
    correo_electronico: "",
    telefono: 0,
    asunto: "",
    mensaje: "",
  });

  function handleChange(evento) {}
  return (
    <div>
      Crear Formulario
      <form>
        <label>Nombre:</label>
        <input
          name="name"
          value={input.nombre}
          placeholder="Escribe tu nombre..."
          type=""
        />

        <label>Correo Electrónico:</label>
        <input
          name="correo_electronico"
          value={input.correo_electronico}
          placeholder="Escribe tu email..."
          type=""
        />

        <label>Teléfono:</label>
        <input
          name="telefono"
          value={input.telefono}
          placeholder="Escribe un teléfono..."
          type=""
        />

        <label>Asunto:</label>
        <input
          name="asunto"
          value={input.asunto}
          placeholder="Escribe el asunto..."
          type=""
        />

        <label>Mensaje:</label>
        <input
          name="mensaje"
          value={input.mensaje}
          placeholder="Escribe tu mensaje..."
          type=""
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
