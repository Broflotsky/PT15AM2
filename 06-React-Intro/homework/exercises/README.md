# Módulo: Módulo 2 - Front End
# Lecture: React-Intro

## Temas de la clase:

◻️ React

◻️ Componente

◻️ JSX

◻️ Componentes funcionales y componentes de clase

◻️ Props

◻️ Webpack

---

## Aprendizaje esperado

Al finalizar esta homework habrás aprendido a crear componentes de React tanto funcionales como de clase, entenderás el propósito de las props, cómo trabaja Javascript con HTML y podrás aplicar todos estos conocimientos en la app de integración.

---
## Consigna de la homework

En esta homework, vamos a crear dos componentes de React, que nos ayudarán a entender mucho mejor cómo funciona esta grandiosa librería 😀.

> **Nota**: No te preocupes por el estilo de los componentes. En la siguiente homework practicaremos un poco sobre estilos.

◻️ El primer componente "Bienvenido.jsx" lo encontrarás ya creado y su función predefinida.

◻️ El segundo componente "Botones.jsx" lo deberás crear desde cero como un componente de clase.

> **Nota**: Estos ejercicios nos ayudarán a comprender los conceptos vistos en clase y a la hora de realizar la homework de integration.

---
## Pasos básicos para realizar la homework

◻️ Para poder ejecutar los `test` de esta homework, es necesario que estemos ubicados dentro de la carpeta `exercises` utilizando el comando "cd + nombreCarpeta.

* Cuando te encuentres en esta carpeta, debes ejecutar el comando `npm install` o `npm i`.

* Listo!! Ya puedes correr los test con el comando `npm test`

◻️ Para poder correr la aplicación de forma local solo debes ejecutar el comando `npm start`. 

* Verás en el navegador lo que vamos trabajando accediendo a <http://localhost:3000>
>**Nota**: No es necesario volver a correr el proyecto cada vez que se realice un cambio, el mismo se verá automáticamente reflejando en el navegador.

---
## Conociendo la estructura...

Dentro de la carpeta `exercises`, vas a encontrar la siguiente estructura:

🔹 Una carpeta llamada `img`

🔹 Una carpeta llamada `public`

🔹 Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)

🔹 Una carpeta llamada `tests`

🔹 Un archivo package.json

🔹 Y el archivo README que ahora mismo estás leyendo. 🧐

---
## Comencemos...👨‍💻👩‍💻

🔹 Dentro de la carpeta `src` en la que vas a encontrar ya el esqueleto del proyecto React, estructurado de la siguiente manera:

* Una carpeta llamada components (dentro de ella realizarás los ejercicios)

* Un archivo llamado App.js

* Un archivo index.js

* Un archivo index.css (estilos)

🔹 Trabajaremos sólo en la carpeta `components`, en principio sólo tenemos el componente "Bienvenido.jsx".

🔹 En el componente `Bienvenido.jsx` encontrarás la función predefinida de un componente funcional, dentro de ella aplicaremos la magia de React para combinar los temas vistos en clase, para ello necesitamos:

* Que la función renderice un div.
* Dentro de este div, crea la etiqueta correspondiente para un título h1 (puedes colocar el texto que desees).
* Crea una constante de tipo string llamada `subTitle` y asígnale un texto.
* Dicha constante debe ser renderizada dentro de un h3.
* Encontrarás una constante llamada `magicTypes` de tipo array, asígnale mínimo 5 elementos.
* Los elementos de este arreglo deben renderizarse en una lista desordenada.

> Tip: para recorrer el arreglo puedes usar el método `map`.

* El componente `Bienvenido` debe verse en el navegador similar a esta imagen:
<p align="center"><img src="./img/eje1.png" height="500px" >    

**...Llegó la hora de crear tu primer componente desde cero** ⭐

Ya sabemos cómo funciona un componente en React, ahora vamos a crear un componente desde cero, pero esta vez será un componente de clase. Haz click derecho sobre la carpeta "components" --> Nuevo archivo --> `Botones.jsx` 

> **Nota**: Puedes guiarte del ejercicio anterior.

* Crea un componente de clase llamado `Botones.jsx`.
* La función debe renderizar en un div.
* Dentro del div, renderiza un botón llamado "Mostrar".
* Dentro del div, renderiza un botón llamado "Ocultar".
* Cada botón debe tener el atributo onClick que muestre una alerta.

**...Estamos llegando a la última parte de la homework** ⭐

Necesitamos ahora conectar estos dos componentes, cómo lo hacemos? muy fácil!!!

* Primero debes importar `Botones.jsx` dentro del componente `Bienvenido.jsx`
* Segundo debes renderizar `Botones.jsx` como etiqueta en el componente `Bienvenido.jsx`con sus props del objeto "alerts".
* Y tercero, el componente `Botones.jsx` recibe props del componente `Bienvenido.jsx`, los cuales serán renderizados dentro de cada alert de cada botón.
* El componente debe verse en el navegador similar a esta imagen:

<img src="./img/eje2.png" height="250px" >  <img src="./img/eje3.png" height="250px" >

---

## Duración estimada 🕒

90 minutos

---
## Recordemos que...

🔹 Todo en Reat es un componente y existen dos tipos: los componentes funcionales y los componentes de clase.

🔹 Un componente funcional es una función de Javascript que puede o no recibir datos (props). Tanto el nombre de la función como el nombre del archivo se deben llamar igual y deben ser con mayúscula inicial.

🔹 Un componente de clase es otra manera de definir un componente, la diferencia radica en que es con sintaxis de ES6.

🔹 Las props o propiedades son la manera que tiene React para pasar parámetros de un componente padre a sus hijos.

---
## Recursos adicionales
Documentación **"Intro to React"** https://reactjs.org/tutorial/tutorial.html

---

Listo!! Ahora estás preparado para crear tu propia app!! ✨🚀

Dirígete a la carpeta 📂 **"homework-integration"** y diviértete desarrollando la app de Rick & Morty 🤩