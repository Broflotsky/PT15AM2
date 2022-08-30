import React from "react";
import "./Contact.modules.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPhone = /^[0-9]+$/;

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});

  function validate(inputs) {
    let errors = {};
    console.log(inputs);
    if (!inputs.name) {
      errors.name = "Se requiere un nombre";
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = "Debe ser un correo electrónico";
    } else if (!regexPhone.test(inputs.phone)) {
      errors.phone = "Solo números";
    } else if (!inputs.subject) {
      errors.subject = "Se requiere un asunto";
    } else if (!inputs.message) {
      errors.message = "Se requiere un mensaje";
    }

    return errors;
  }
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

  function handleSubmit() {}
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
          className={errors.name && "warning"}
        />
        <p className="danger">{errors.name}</p>

        <label>Correo Electrónico:</label>
        <input
          name="email"
          value={inputs.email}
          placeholder="Escribe tu email..."
          type="text"
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        <p className="danger">{errors.email}</p>

        <label>Teléfono:</label>
        <input
          name="phone"
          value={inputs.phone}
          placeholder="Escribe un teléfono..."
          type="number"
          onChange={handleChange}
          className={errors.phone && "warning"}
        />
        <p className="danger">{errors.phone}</p>

        <label>Asunto:</label>
        <input
          name="subject"
          value={inputs.subject}
          placeholder="Escribe el asunto..."
          type="text"
          onChange={handleChange}
          className={errors.subject && "warning"}
        />
        <p className="danger">{errors.subject}</p>

        <label>Mensaje:</label>
        <textarea
          name="message"
          value={inputs.message}
          placeholder="Escribe tu mensaje..."
          type="text"
          onChange={handleChange}
          className={errors.message && "warning"}
        />
        <p className="danger">{errors.message}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
