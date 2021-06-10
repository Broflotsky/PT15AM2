import React from 'react';
import { useParams } from 'react-router-dom';

export default function Mostrar() {
    let params = useParams();
    console.log("Params: ", params);
    return (<span>Estoy en la ciudad {params.ciudadId}</span>)
};