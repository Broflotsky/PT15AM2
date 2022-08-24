import { React } from "react";

export default function Contact() {
  const [input, setInput] = React.useState({
    nombre: "",
    correo_electronico: "",
    telefono: 0,
    asunto: "",
    mensaje: "",
  });
  return (
    <div>
      Crear Formulario
      <form>
        <label>Nombre:</label>
        <input
          name="nombre"
          value=""
          placeholder="Escribe tu nombre..."
          type=""
        />

        <label>Correo Electrónico:</label>
        <input
          name="correo_electronico"
          value=""
          placeholder="Escribe tu email..."
          type=""
        />

        <label>Teléfono:</label>
        <input
          name="telefono"
          value=""
          placeholder="Escribe un teléfono..."
          type=""
        />

        <label>Asunto:</label>
        <input
          name="asunto"
          value=""
          placeholder="Escribe el asunto..."
          type=""
        />

        <label>Mensaje:</label>
        <input
          name="mensaje"
          value=""
          placeholder="Escribe tu mensaje..."
          type=""
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
