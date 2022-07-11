# HW 01 - React-Intro | Ejercicios con test

## Duración estimada 🕒

90 minutos

---

## Consigna de la homework

En esta homework, vamos a crear dos componentes de React, que nos ayudarán a entender mucho mejor cómo funciona esta grandiosa librería 😀.

> **Nota**: No te preocupes por el estilo de los componentes. En la siguiente clase y homework nos dedicaremos a ellos.

◻️ El primer componente "Bienvenido.jsx" lo encontrarás ya creado y su función predefinida.

◻️ El segundo componente "Botones.jsx" lo deberás crear desde cero como un componente ***de clase***.

---

### Pasos básicos para realizar la homework

◻️ Para poder ejecutar los `test` de esta homework, es necesario que estemos ubicados dentro de la carpeta `01 - Exercises`.

* Cuando te encuentres en esta carpeta, debes ejecutar el comando `npm install` (o `npm i`).

* Listo!! Ya puedes correr los test con el comando `npm test` (o `npm t`).

◻️ Para poder correr la aplicación de forma local, sólo debes ejecutar el comando `npm start`.

* Ingresando a <http://localhost:3000> desde el navegador, podremos ir viendo en tiempo real el resultado de nuestro trabajo.

>**Nota**: No es necesario volver a correr el proyecto cada vez que se realice un cambio, el mismo se verá automáticamente reflejando en el navegador.

---

### Conociendo la estructura

Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

🔹 Una carpeta llamada `img`

🔹 Una carpeta llamada `public`

🔹 Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)

🔹 Una carpeta llamada `tests`

🔹 Un archivo package.json

🔹 Y el archivo README que ahora mismo estás leyendo. 🧐

---

## 👩‍💻 Ejercicio 1

🔹 Dentro de la carpeta `src` en la que vas a encontrar ya el esqueleto del proyecto React, estructurado de la siguiente manera:

* Una carpeta llamada components

* Un archivo llamado App.js

* Un archivo index.js

* Un archivo index.css (estilos)

🔹 Para estos ejercicios, trabajaremos sólo dentro la carpeta `components`. En principio sólo tenemos el componente `Bienvenido.jsx`.

🔹 En dicho componente encontrarás la función predefinida de un componente funcional. Dentro de ella aplicaremos la magia de React para combinar los temas vistos en clase, y para ello debes realizar los pasos a continuación:

1. Que la función renderice un div.
2. Dentro de este div, crea la etiqueta correspondiente para un título h1 (puedes colocar el texto que desees).
3. Encontrarás una constante de tipo string llamada `studentName`, asígnale un texto con tu nombre.
4. Dicha constante debe ser renderizada dentro de un h3.
5. Encontrarás una constante llamada `techSkills` de tipo array, con 5 elementos. Los elementos de este arreglo deben renderizarse en una lista desordenada.

> Tip: para recorrer el arreglo puedes usar el método `map`.

* El componente `Bienvenido` debe verse en el navegador similar a esta imagen:

<p align="center"><img src="./img/01.png" height="300px" ></p>

---

## 👩‍💻 Ejercicio 2

**Llegó la hora de crear tu primer componente desde cero** ⭐

Ya sabemos cómo funciona un componente en React, ahora vamos a crear un componente desde cero, pero esta vez será un componente de clase. Haz click derecho sobre la carpeta "components" --> Nuevo archivo --> `Botones.jsx`

> **Nota**: Puedes guiarte del ejercicio anterior.

1. Crea un componente de clase llamado `Botones.jsx`.
2. El componente debe renderizar un div.
3. Dentro del div, renderiza un botón llamado "Módulo 1".
4. Dentro del div, renderiza un botón llamado "Módulo 2".
5. Cada botón debe tener el atributo onClick que muestre una alerta.

**...Estamos llegando a la última parte de la homework** ⭐

Necesitamos ahora conectar estos dos componentes, cómo lo hacemos? muy fácil!!!

1. Debes importar `Botones.jsx` dentro del componente `Bienvenido.jsx`
2. Debes renderizar `Botones.jsx` como etiqueta en el componente `Bienvenido.jsx`con sus props del objeto "alerts".
3. El componente `Botones.jsx` recibe por props del componente `Bienvenido.jsx` un objeto llamado `alerts` con dos propiedades: `m1` y `m2`. Estos serán renderizados dentro del alert que dispara cada botón.

* El componente debe verse en el navegador similar a esta imagen:

<p align="center"><img src="./img/02.png" height="300px"></p>

<p align="center"><img src="./img/03.png" height="300px"></p>

---

## Recordemos que

🔹 Todo en React es un componente y existen dos tipos: los componentes funcionales y los componentes de clase.

🔹 Un componente funcional es una función de Javascript que puede o no recibir datos (props). Tanto el nombre de la función como el nombre del archivo se deben llamar igual y deben ser con mayúscula inicial.

🔹 Un componente de clase es otra manera de definir un componente, la diferencia radica en que es con sintaxis de ES6.

🔹 Las props o propiedades son la manera que tiene React para pasar parámetros de un componente padre a sus hijos.

---

## Recursos adicionales

Documentación **"Intro to React"** <https://reactjs.org/tutorial/tutorial.html>

---

Listo!! Ahora estás preparado para crear tu propia app!! ✨🚀

Dirígete a la carpeta 📂 **"homework-integration"** y diviértete desarrollando la app de Rick & Morty 🤩
