# HW 12 - React-Redux | Ejercicios

## Duración estimada 🕒

x minutos

---

## Intro

En esta homework desarrollarás una aplicación que permita al usuario agregar y eliminar uno o varios items de una lista de compras.

---

## Consigna de la homework

- Crear una lista de compras.
- Eliminar un o varios items de la lista de compras.

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
- Un archivo **package.json**
- Y el archivo `README.md` que ahora mismo estás leyendo. 🧐

Además:

🔹 Dentro de la carpeta `src` encontrarás el esqueleto del proyecto React, estructurado de la siguiente manera:

- Una carpeta llamada `actions`
- Una carpeta llamada `assets`
- Una carpeta llamada `reducer`
- Una carpeta llamada `store`
- Un archivo llamado `App.js`
- Un archivo **index.css**
- Un archivo `index.js`

🔹 Estarás trabajando en las carpetas actions, reducer, store y el archivo App.js.

🔹 Da un vistazo al archivo `index.js` dentro de la carpeta **store** para que veas cómo se configura la store.

## 👩‍💻 Ejercicio 1

### Actions

🔹 Dentro de la carpeta **actions**, encontrarás dos archivos:

- `index.js`, en el que harás las respectivas funciones para la lista de compras.
- `types.js`, en el que guardarás las constantes de los types.

🔹 Lo que hay que hacer:

1. En el archivo **types.js**, crea y exporta las siguientes constantes:

- ADD_ITEM, en el que su valor sea 'ADD_ITEM'
- EDIT_ITEM, en el que su valor sea 'EDIT_ITEM'
- DELETE_ITEM, en el que su valor sea 'DELETE_ITEM'

2. En el archivo **actions.js**, importa las constantes que están en el archivo **types.js**.

> Hint: Puedes utilizar destructuring para importar los types.

3. Define y exporta una función llamada addItem que recibe como parámetro `payload`, esta función debe retornar la propiedad type con su valor: **ADD_ITEM** y la propiedad payload con el valor que recibe por parámetro la función.

4. Define y exporta una función llamada editItem que recibe como parámetro `id`, esta función debe retornar la propiedad type con su valor: **EDIT_ITEM** y la propiedad payload con el valor que recibe por parámetro la función.

5. Define y exporta una función llamada deleteItem que recibe como parámetro `id`, esta función debe retornar la propiedad type con su valor: **DELETE_ITEM** y la propiedad payload con el valor que recibe por parámetro la función.

mapDispatchToProps
mapStateToProps

---

## 👩‍💻 Ejercicio 2

### Reducer

la lista debería ser un array de obj.

🔹 Ahora agrega estados al componente Contact, estos estados estarán conectados con los inputs que creaste en el ejercicio anterior.

🔹 Lo que hay que hacer:

---

## 👩‍💻 Ejercicio 3

### ...Estamos llegando a la última parte de la homework ⭐

### Componentes

🔹 En este ejercicio validarás cada input del formulario, cada vez que se actualice el estado, controlando que cumpla con las condiciones requeridas.

🔹 Lo que hay que hacer:

---

## Recordemos que...

- Un formulario controlado es cuando el estado maneja los valores de los inputs y lo actualiza de acuerdo a los eventos del mismo usando setState.
- El evento.preventDefault() permite prevenir el comportamiento predeterminado de un submit.😃
- Con la propiedad target del evento, puedes setear las propiedades de un estado dinámicamente el name y value de cada input del formulario.
- Formula siempre qué datos quieres recibir y qué experiencia quieres dar al usuario, en el momento que definas las funciones handleChange y handleSubmit.

---

## Recursos adicionales

- Documentación **"Formularios"** <https://es.reactjs.org/docs/forms.html>
- Documentación **"Regular Expressions"** <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions>

---

Listo!!
Aprendiste cómo funcionan las rutas en React!! ✨🚀
Dirígete a la carpeta 📂 [**"02 - Integration"**](../02%20-%20Integration/README.md) y continúa desarrollando la app de Rick & Morty 🤩 ---
