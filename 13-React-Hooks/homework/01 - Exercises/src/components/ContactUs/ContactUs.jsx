import React from "react";

const ContactUs = () => {
  return (
    <div className="contactBg">
      <input name="nombre"></input>
      <input name="email"></input>
      <input name="asunto"></input>
      <input name="mensaje"></input>
      <button>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
