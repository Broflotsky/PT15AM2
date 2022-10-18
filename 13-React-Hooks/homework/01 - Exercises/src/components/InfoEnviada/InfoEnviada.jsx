import './infoenviada.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const InfoEnviada = () => {
   const [informacion, setInformacion] = React.useState({
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
         {informacion.nombre && (
            <div>
               <li className='infoText'>{informacion.nombre}</li>
               <li className='infoText'>{informacion.email}</li>
               <li className='infoText'>{informacion.asunto}</li>
               <li className='infoText'>{informacion.mensaje}</li>
            </div>
         )}
      </div>
   );
};

export default InfoEnviada;
