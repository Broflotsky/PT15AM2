# HW 10 - React-Forms | Ejercicios

## Duración estimada 🕒

x minutos

---

## Intro

En esta homework encontrarás casi lista la Music App, sin embargo, deberás solucionar al usuario la necesidad de que se comunique con la plataforma, posiblemente para dejar un mensaje contando la experiencia y/o sugerencias para la aplicación.

---

## Consigna de la homework

- Crear un formulario controlado.
- Crear inputs dinámicos.
- Manejar errores en los inputs.

---

## Pasos básicos para realizar la homework

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

- Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

- Listo!! Ya puedes correr los test:

```bash
npm test
```

Si deseas correr por test, puedes utilizar:

```bash
npm run test:01
```

🔹 Para esta homework necesitarás emular peticiones a una api con el fin de consumir los datos que allí están, para ello, debes correr el servidor **db.json**, sin este paso no podrás visualizar el resultado esperado y tampoco pasarán los tests. A continuación, los pasos para correr el servidor:

- Abrir una segunda terminal.
- En la terminal, dirígete a la carpeta que estamos trabajando.
- Ejecuta el comando:

```bash
npm run server
```

🔹 Para poder correr la aplicación de forma local, sólo debes ejecutar el comando

```bash
npm start
```

- Ingresando a <http://localhost:3000> desde el navegador, podremos ir viendo en tiempo real el resultado de nuestro trabajo.

---

## Conociendo la estructura

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

- Una carpeta llamada **_mocks_**
- Una carpeta llamada **img**
- Una carpeta llamada **public**
- Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)
- Una carpeta llamada **tests**
- Un archivo **db.json**
- Un archivo **package.json**
- Y el archivo `README.md` que ahora mismo estás leyendo. 🧐

Además:

🔹 Dentro de la carpeta `src` encontrarás el esqueleto del proyecto React, estructurado de la siguiente manera:

- Un carpeta llamada `assets`
- Una carpeta llamada `components`
- Un archivo llamado `App.js`
- Un archivo **index.css**
- Un archivo `index.js`

🔹 Dentro de la carpeta `components` encontrarás:

- Una carpeta llamada **Card**, la cual a su vez contiene:
  - El componente `Card.jsx`
  - La hoja de estilos Card.module.css
- Una carpeta llamada **Cards**, la cual a su vez contiene:
  - El componente `Cards.jsx`
  - La hoja de estilos Cards.module.css
- Una carpeta llamada **Contact**, la cual a su vez contiene:
  - El componente `Contact.jsx`
- Una carpeta llamada **Home**, la cual a su vez contiene:
  - El componente `Home.jsx`
- Una carpeta llamada **NavBar**, la cual a su vez contiene:
  - El componente `NavBar.jsx`
  - La hoja de estilos NavBar.module.css

---

## 👩‍💻 Ejercicio 1

### Crear inputs

🔹 Abre el archivo `Contact.jsx`, dentro de él encontrarás el import de **React**

🔹 Lo que hay que hacer:

1. Crea una etiqueta form.
2. Dentro de la etiqueta form, crear:

- Una etiqueta label y su texto sea **'Nombre:'**
- Una etiqueta input con los siguiente atributos:
  - `name` y su valor sea **name**.
  - `placeholder`y su valor sea **"Escribe tu nombre..."**
  - `type` y su valor sea **text**
- Una etiqueta label y su texto sea **'Correo Electrónico:'**
- Otra etiqueta input con los siguiente atributos:
  - `name` y su valor sea **email**.
  - `placeholder`y su valor sea **"Escribe tu email..."**
  - `type` y su valor sea **text**
- Una etiqueta label y su texto sea **'Teléfono:'**
- Otra etiqueta input con los siguiente atributos:
  - `name` y su valor sea **phone**.
  - `placeholder`y su valor sea **"Escribe un teléfono..."**
  - `type` y su valor sea **number**
- Una etiqueta label y su texto sea **'Asunto:'**
- Otra etiqueta input con los siguiente atributos:
  - `name` y su valor sea **subject**.
  - `placeholder`y su valor sea **"Escribe el asunto..."**
  - `type` y su valor sea **text**
- Una etiqueta label y su texto sea **'Mensaje:'**
- Una etiqueta textarea con los siguiente atributos:
  - `name` y su valor sea **message**.
  - `placeholder`y su valor sea **"Escribe tu mensaje..."**
  - `type` y su valor sea **text**
- Una etiqueta botón con el atributo `type` donde su valor sea **submit** y el texto del botón sea **enviar**

---

## 👩‍💻 Ejercicio 2

### Estados

🔹 Ahora agrega estados al componente Contact, estos estados estarán conectados con los inputs que creaste en el ejercicio anterior.

🔹 Lo que hay que hacer:

1. Crea un estado llamado `inputs` , el estado debe iniciar en un objeto con las siguientes propiedades:

- name, su valor debe ser un string vacío
- email, su valor debe ser un string vacío,
- phone, su valor debe ser 0,
- subject, su valor debe ser un string vacío,
- message, su valor debe ser un string vacío

Ejemplo:

```jsx
const [inputs, setInputs] = React.useState({
  inputs: {
    name: "",
  },
});
```

2. Crea un segundo estado llamado `errors` debe ser un objeto vacío.

3. Conecta el estado con el formulario, para ello, crea el atributo **value** en cada input asignándole el estado correspondiente. Ejemplo:

```jsx
<input name="name" value={inputs.name} />
```

4. Crea la función **handleChange** antes del return, esta función recibe un `evento` como parámetro y dentro de ella haz lo siguiente:

- Setea el estado **inputs**
- Usa el spread operator para copiar el estado anterior
- El evento que recibimos como parámetro en la función, utilizando ES6, haz que las propiedades y valores del estado sean dinámicas. Ejemplo:

```jsx
[evento.target.name]: evento.target.value
```

5. Crea el atributo `onChange` a los inputs del formulario y asígnale la función **handleChange** previamente creada.

---

## 👩‍💻 Ejercicio 3

### Manejo de errores

🔹 En este ejercicio validarás cada input del formulario, cada vez que se actualice el estado, controlando que cumpla con las condiciones requeridas.

🔹 Lo que hay que hacer:

1. Define una función llamada `validate` que reciba como parámetro el objeto **inputs**.
2. Dentro de la función declara una variable llamada `errors` y que su valor sea un objeto vacío.
3. Valida cada input del formulario que viene del objeto **inputs** que se está recibiendo como parámetro en la función, para que se cumplan las siguientes condiciones:

- En el input **name**, si este campo está vacío, agrega la propiedad name al objeto **errors** en donde su valor sea, por ejemplo, "Se requiere un nombre".
- En el input **email**, valida si el email que ingresa el usuario coincide con el regex de la constante `regexEmail`, aplicándole el método `test()` y dentro de sus paréntesis coloca `input.email`; agrega la propiedad email al objeto **errors** en donde su valor sea, por ejemplo, "Debe ser un correo electrónico".
- En el input **phone**, valida si el email que ingresa el usuario coincide con el regex de la constante `regexPhone`, aplicándole el método `test()` y dentro de sus paréntesis coloca `input.phone`; agrega la propiedad phone al objeto **errors** en donde su valor sea, por ejemplo, "Sólo números".
- En el input **subject**, si este campo está vacío, agrega la propiedad subject al objeto **errors** en donde su valor sea, por ejemplo, "Se requiere un asunto".
- En el input **message**, si este campo está vacío, agrega la propiedad message al objeto **errors** en donde su valor sea, por ejemplo, "Se requiere un message".

Ejemplo:

```jsx
if (!inputs.name) {
  errors.name = "Se requiere un nombre";
} else if (!regexEmail.test(inputs.email)) {
  errors.email = "Se requiere un email";
}
```

4. La función debe retornar el objeto errors.
5. En la función **handleChange**:

- Setea el estado **errors** que reciba la función `validate`
- Usa el spread operator para copiar el estado anterior
- El evento que recibimos como parámetro en la función, utilizando ES6, haz que las propiedades y valores del estado sean dinámicas.

Ejemplo:

```jsx
setErrors(
  validate({
    ...inputs,
    [e.target.name]: e.target.value,
  })
);
```

6. Debes informar a los usuarios que tiene errores en los inputs, para ello, haz lo siguiente:

- Crea una hoja de estilos llamada `Contact.modules.css`
- Crea una clase llamada `.warning` con la propiedad **border** y que su valor sea **solid**, **red** y 1 px.
- Crea otra clase llamada `danger` con la propiedades:
  - font-size: 10px
  - color: red
  - margin-left: 10em
- Importa en el componente **Contact.jsx** los estilos.
- En cada input crea el atributo **className** y asigna condicionalmente la propiedad del estado errors de acuerdo al input en el que te encuentres.
  Ejemplo:

```jsx
<input className={errors.name && 'warning'}>
```

- Por último, agrega una etiqueta `p` debajo de cada input, en el que su texto sea la propiedad del objeto errors de acuerdo al input en el que te encuentres validando.
- Crea a la etiqueta **p** el atributo className y asígnale la clase `'danger'`

Ejemplo:

```jsx
<p className="danger">{errors.name}</p>
```

---

### ...Estamos llegando a la última parte de la homework ⭐

## 👩‍💻 Ejercicio 4

### Envío de formulario

🔹 Ahora solo nos falta "enviar" el formulario.

🔹 Lo que hay que hacer:

1. Define una función llamada `handleSubmit`, que reciba un **evento** como parámetro, en ella realizarás la lógica que ejecutará el formulario cuando el usuario de click en el botón **Enviar**.
2. Dentro de la función:

- Utiliza el método `prevent default()` que cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá

🔹 Resultado esperado:

<p align="center"><img src="./img/img.gif" height="300px" /></p>

---

## Recordemos que...

- Para conectar nuestra aplicación a la url del
  navegador debes renderizar Browser Router alrededor de tu app . - Routes genera
  un árbol de rutas y es a partir de esto que podemos renderizar los componentes.

- Route representa una ruta en el árbol, siempre debe ir con sus atributos path
  y element. - La diferencia entre Link y NavLink está que Link no tiene un estilo
  especial y NavLink resalta el enlace actual o activo utilizando la función
  "isActive".😃 - useParams devuelve un objeto con las propiedades y el valor de
  los segmentos dinámicos de la URL. - useNavigate devuelve una función que
  permite la navegación programática en la aplicación. 😃

  ***

  ## Recursos adicionales

  - Documentación **"React Router - useNavigate"** <https://reactrouter.com/docs/en/v6/hooks/use-navigate>
  - Documentación **"React Router - useParams"** <https://reactrouter.com/docs/en/v6/hooks/use-params>

  ***

  Listo!!
  Aprendiste cómo funcionan las rutas en React!! ✨🚀
  Dirígete a la carpeta 📂 [**"02 - Integration"**](../02%20-%20Integration/README.md) y continúa desarrollando la app de Rick & Morty 🤩 ---

```

```

```

```

```

```
