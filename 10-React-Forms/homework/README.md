# React Forms

## Instrucciones para correr el proyecto

Desde la carpeta raíz `homework` se pueden ejecutar los siguientes comandos:

```shell
npm install
```

Instala todas las dependecias necesarias para correr el proyecto correctamente

```shell
npm start
```

Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a http://localhost:3000

No es necesario volver a correr el proyecto cada vez que se realice un cambio sino que se verá automáticamente reflejando en el navegador.

## Ejecutar los Tests

```shell
npm run test
```

## Formulario Conectado/controlado

En este homework vamos a usar React Hooks para hacer un pequeño formulario conectado. También vamos a validar los inputs antes de submitear.

> Qué el formulario este conectado o controlado quiere decir que los inputs están bindeados al estado del componente, que en este caso vamos a crear usando Hooks.

### Primera Parte

En la primera parte, vamos a concentrarnos en lo que vemos en nuestra aplicación con:

`npm start`

En la segunda parte, vamos a modificar un poco de código para pasar los tests.

Nuestra tarea va a ser construir este formulario:

![](./public/formulario.png)

Va a tener:

* Username: El userName tiene que ser un email, si no, tiene que mostrar un error.
* Password: El password tiene que contener por lo menos un número, si no debe mostrar un error.

> Ya te dejamos el css necesario para que sólo te concentres en el formulario. Lo econtrarás en `index.css`

#### Estructura

Vamos a trabajar en el archivo `Form.jsx` que está en la carpeta `src`.

Comenzamos agregando el formulario per se, usando JSX. En el código vamos a crear un componente funcional llamado `Form`. Este va a retonar un `<form />`, que contenga un `<label />` y un `<input />` para el Username y el Password, respectivamente.

Te dejamos un ejemplo de cómo quedaría sólo con el input para el username.

```js
// Form.jsx

export default function  Form() {
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      ...
    </form>
  )
}
```

Bien, ahora debes agregar al código el input del Password, y el botón submit!

#### Estado

El siguiente paso es agregar comportamiento a nuestro componente, para eso vamos a agregarle un estado. Como vamos a usar hooks vamos a agregar:

```js
// Form.jsx

export default function Form() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    ...
};

```

Con esto, estamos agregando estado al componente.

Genial! ahora tenemos estado, pero tenemos que *conectarlo* con el formulario. Para eso vamos a poner como `value` del input el estado correspondiente.

```js
// Form.jsx
    ...
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={username}/>
      </div>
      ...

}
```

Por ahora, el input toma el valor del estado, pero cuando se cambia el input el estado no cambia, tenemos que bindearlos!
Para eso vamos a usar el evento `onChange` del input, y le vamos a pasar las funciones `setUsername` y `setPassword`, respectivamente:

```js
// Form.jsx

export default function  Form() {
  ...

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
      ...
    </form>
  )
}
```

Recuerden que `setUsername` y `setPassword` reciben un string que usará para actualizar el estado. Y que `onChange` ejecuta una función pasándole un `evento` como argumento, por lo tanto, tenemos que pasarle una función nueva que reciba un `evento` e invoque a `setUsername` con el valor del input, que esta en `evento.target.value`.



Si hiciste todo bien hasta acá y corres los tests, deberías pasar 6 del total!

![](./public/tests1.png)


#### Mejorando el Estado

Cuando hacemos ejercicios de este tipo tenemos que pensar lo siguiente: ¿Qué pasaría si en vez de dos inputs, tuviera diez? ¿Mi código es escalable?

Claramente la respuesta es NO, ya que debería crear un estado y una función para cada input, y rápidamente estaría repitiendo código y se volvería díficil de manejar. Ahora la siguiente pregunta es: ¿Cómo puedo mejorar el código para que sea más eficiente y escalable?

Bien, para empezar vamos a unificar el estado en un sólo objeto, donde cada input se refleje en una propiedad:

```js
// estado de Form
{
    username: '',
    password: '',
    ...
}
```

Llamaremos `input` a ese estado:

```js
// Form.jsx
...
const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
...
```

Al definir un sólo estado, vamos a tener más control sobre él, pero ahora tenemos una sola funcion `setInput` que debe manejar todos los inputs.

Recordemos que el `onChange` pasa un evento a la función que le pasemos. Y dentro de ese evento tenemos `evento.target.name` y `evento.target.value`. Por lo tanto, podemos usar las nuevas features de ES6 para crear un objeto así:

```js
{
    [evento.target.name]: evento.target.value,
}
```

Entonces, si le pasamos esta función a cualquier input, podemos usar su atributo `name` para indicar el nombre de la propiedad en el estado.

Recuerden que `setInput` *pista* el estado anterior. Por lo tanto tenemos que pasarle también las propiedades viejas que tenia el estado, podemos usar el spreading de ES6:

```js
{
    ...input, // las propiedades que ya tenia input
    [evento.target.name]: evento.target.value,
}
```

Entonces, nuestra función quedaría así:

```js
// Form.jsx
...
const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
...
```

y podemos pasarsela a todos los inputs de esta forma:

```js
<form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text" name="username" onChange={handleInputChange} value={username} />
      </div>
      <div>
     ...

```

> Ahora el valor del input estára en `input[propiedad]`, debemos cambiar eso en todos los inputs tambien!

Si corremos los tests, deberiamos estar pasando 8 de ellos!!

#### Validaciones

Ahora vamos a agregar las validaciones en nuestro form. Básicamente, cada vez que se actualize el estado queremos controlar si cada input cumple con las condiciones que pedimos.
En nuestro caso, que el username sea un mail válido, y el password contenga por lo menos un número.

Para hacer esto, necesitamos definir una función `validate` que reciba el input, y nos diga si cumple o no. Vamos a usar [Regexp](https://es.ryte.com/wiki/RegEx) para controlar los inputs.

Nuestra función `validate` va a recibir un objeto `input`, y va a retornar un objeto `errors`, donde pondrá un mensaje de error por cada input que no cumpla las condiciones, o vacio si cumple. Por ejemplo:

```js
//input
{
    username: 'toni@soyhenry.com',
    password: 'hola'
}
//errors
{
    password: 'Password is invalid'
}
```

Otro ejemplo:

```js
//input
{
    username: 'toni',
    password: ''
}
//errors
{
    username: 'Username is invalid',
    password: 'Password is required'
}
```

Te compartimos la primera mitad de la función `validate`, lo que ves en el if es una expresión regular que controlar por un mail válido (estas expresiones son comunes y podés encontrarlas en internet!).

__IMPORTANTE__: Para que funcionen correctamente los tests esta función debe ir por fuera del componente Form. Adicionalmente colocarla allí nos permitiría de ser necesario importarla en otro archivo y reutilizarla.

```js
export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  ...

  return errors;
};

```

Es tu tarea agregar código para que controle por el password. Cómo ayuda te dejamos la expresión regular que controla que un texto tenga un número por lo menos:

`(!/(?=.*[0-9])/.test(input.password))`

Bien, ahora tenemos que mantener en el estado los errores!

Vamos a crear un nuevo estado, donde mantenemos un objeto con los errores:

```js
...
const [errors, setErrors] = React.useState({});
...
```

Por último, tenemos que agregar el control de errores durante el `handleInputChange`:

```js
setErrors(validate({
       ...input,
       [e.target.name]: e.target.value
     }));
```

Donde pondrías esa porción de código?...


Hasta acá deberías tener 12 tests pasando!!!

#### Informando los errores

Por último, vamos a informar a los usuarios que hay errores en los inputs!
Para eso vamos a agregar dos cosas:

- Una clase `danger` al input que le da bordes rojos.
- un `<p>` que contenga el mensaje del error debajo del input.

```js
...
<div>
    <label>Username:</label>
    <input className={errors.username && 'danger'}
      type="text" name="username" onChange={handleInputChange} value={input.username} />
    {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
</div>
...
```

Agregá lo mismo para password!

Si llegaste hasta acá ya deberías pasar todos los tests!
