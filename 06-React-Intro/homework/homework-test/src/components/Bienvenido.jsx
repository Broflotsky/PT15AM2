import React from "react";

const saludo = 'Bienvenidos a la magia';
const tiposMagia = ['fuego', 'rayo', 'aire', 'metal','veneno','celestial', 'transformación', 'elemental', 'alquímica', 'escritura', 'armadura', 'estelar', 'hadas']

export default function Bienvenido(){
    
    return <div>
                <h1>{saludo}</h1>
                <p>Tipos de magia:</p>
                <ul>
                    {tiposMagia.map(t => <li>{t}</li>)}
                </ul>
            </div>
}