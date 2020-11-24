const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store;

// Obtenemos el elemento con el id `valor`.
var valor;

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':

}

// Ejecutamos la funcion 'renderContador':



// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:



// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente: