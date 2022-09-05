import React from "react";
import "./Contact.modules.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (inputs.phone <= 0) {
    errors.phone = "Sólo números positivos";
  }
  if (!inputs.subject) {
    errors.subject = "Se requiere un asunto";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(evento) {
    setInputs({
      ...inputs,
      [evento.target.name]: evento.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [evento.target.name]: evento.target.value,
      })
    );
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    setErrors(validate(errors));
    if (Object.keys(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: "",
      });
      setErrors(validate({ ...inputs, errors: "" }));
    } else {
      alert("Debes llenar todos los campos");
    }
  }
  return (
    <div>
      Crear Formulario
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          name="name"
          value={inputs.name}
          placeholder="Escribe tu nombre..."
          type="text"
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        {errors.name && <p className="danger">{errors.name}</p>}

        <label>Correo Electrónico:</label>
        <input
          name="email"
          value={inputs.email}
          placeholder="Escribe tu email..."
          type="text"
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        {errors.email && <p className="danger">{errors.email}</p>}

        <label>Teléfono:</label>
        <input
          name="phone"
          value={inputs.phone}
          placeholder="Escribe un teléfono..."
          type="number"
          onChange={handleChange}
          className={errors.phone && "warning"}
        />
        {errors.phone && <p className="danger">{errors.phone}</p>}

        <label>Asunto:</label>
        <input
          name="subject"
          value={inputs.subject}
          placeholder="Escribe el asunto..."
          type="text"
          onChange={handleChange}
          className={errors.subject && "warning"}
        />
        {errors.subject && <p className="danger">{errors.subject}</p>}

        <label>Mensaje:</label>
        <textarea
          name="message"
          value={inputs.message}
          placeholder="Escribe tu mensaje..."
          type="text"
          onChange={handleChange}
          className={errors.message && "warning"}
        />
        {errors.message && <p className="danger">{errors.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
