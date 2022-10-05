import './contactus.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { enviarForm } from '../../redux/actions/actions';

const ContactUs = () => {
   const dispatch = useDispatch();
   const [form, setForm] = useState({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
   });

   const handleInput = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = () => {
      dispatch(enviarForm(form));
      setForm({
         nombre: '',
         email: '',
         asunto: '',
         mensaje: '',
      });
   };
   return (
      <div className='contactBg'>
         <h1 className='contactTitle'>CONTACT US</h1>
         <div className='contactForm'>
            <input
               className='contactInput'
               value={form.nombre}
               name='nombre'
               onChange={handleInput}
               placeholder='Nombre...'
            ></input>
            <input
               className='contactInput'
               value={form.email}
               name='email'
               onChange={handleInput}
               placeholder='Email...'
            ></input>
            <input
               className='contactInput'
               value={form.asunto}
               name='asunto'
               onChange={handleInput}
               placeholder='Asunto...'
            ></input>
            <input
               className='contactInput'
               value={form.mensaje}
               name='mensaje'
               onChange={handleInput}
               placeholder='Mensaje...'
            ></input>
            <button onClick={handleSubmit} className='contactButton'>
               ENVIAR
            </button>
         </div>
      </div>
   );
};

export default ContactUs;
