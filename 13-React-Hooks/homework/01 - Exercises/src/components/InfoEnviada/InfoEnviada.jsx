import './infoenviada.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const InfoEnviada = () => {
   const [informacion, setInformacion] = useState({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
   });

   const { formulario } = useSelector((state) => {
      return state;
   });

   useEffect(() => {
      setInformacion(formulario);
   }, [formulario]);

   return (
      <div className='infoBg'>
         <h1 className='infoTitle'>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
         <h3>{informacion.nombre}</h3>
         <h3>{informacion.email}</h3>
         <h3>{informacion.asunto}</h3>
         <h3>{informacion.mensaje}</h3>
      </div>
   );
};

export default InfoEnviada;
