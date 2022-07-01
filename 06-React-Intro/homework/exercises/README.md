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

---
## Pasos básicos para realizar la homework

◻️ Para poder ejecutar los `test` de esta homework, es necesario que estemos ubicados dentro de la carpeta `exercises` utilizando el comando "cd + nombreCarpeta.

➡️ Cuando te encuentres en esta carpeta, debes ejecutar el comando `npm install`o `npm i`.

    ➡️


En la carpeta `src` vas a encontrar ya el esqueleto del proyecto React, estructurado de la siguiente manera:

🔹 Una carpeta llamada components (dentro de ella realizarás los ejercicios)

🔹 Un archivo llamado App.js

🔹 Un archivo index.js

🔹 Un archivo index.css (estilos)

🔹 Una carpeta `tests` donde están los tests correspondientes a los ejercicios.

🔹 Un package.json

🔹 Y el archivo README que ahora mismo estás leyendo. 🧐

Estos ejercicios nos ayudarán a comprender los conceptos vistos en clase y a la hora de realizar la homework-integration.
---
***
## Comencemos... 🤖

Desde la carpeta `homework/homework-test` se deben ejecutar los siguientes comandos:

```bash
npm install
```

Luego de hacer la instalación coloca en la consola el comando:

```bash
npm start
```

Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a <http://localhost:3000>

>No es necesario volver a correr el proyecto cada vez que se realice un cambio, el mismo se verá automáticamente reflejando en el navegador.

---

## Ejercicio 1️⃣ 

Para este primer ejercicio encontrarás ya creado el componente "Bienvenido.jsx" dentro de la carpeta components, dentro de la función utilizaremos la magia de React para combinar Javascript con HTML, crea una variable de tipo string llamada saludo, asígnale un mensaje de bienvenida y luego que ésta retorne en un h1; además crea una etiqueta de párrafo con un mensaje que destaque la lista de los tipos de magia; por último debes crear una variable que contenga un arreglo con mínimo 5 elementos que retornarán en una lista desordenada que enliste este arreglo.
> Tip: para recorrer el arreglo puedes usar el método `map`

<p align="center"><img src="./img/eje1.png" height="500px" >

---

## Ejercicio 2️⃣

Para este ejercicio ya sabemos cómo funciona un componente en React, ahora vamos a crear un componente desde cero. Haz click derecho sobre la carpeta "components" --> Nuevo archivo --> Botones.jsx, crea el componente guiándote del ejercicio anterior; sin embargo, para este ejercicio el componente tendrá lo siguiente:

🔵 Importar el componente "Botones" en el componente "Bienvenido".

🔵 Renderiza el componente "Botones" debajo de la lista desordenada.

🔵 El componente "Botones" recibe props.

🔵 Un botón llamado "Ocultar" que al hacer click sobre él, los tipos de magia del componente "Bienvenido" se oculten.

🔵 Un botón llamado "Mostrar" que vuelva nuevamente visible los tipos de magia del componente "Bienvenido".

---

Listo! Ahora estás preparado para crear tu propia app!! ✨🚀

Dirígete a la carpeta 📂<b>"homework-integration"</b> y diviértete desarrollando la app de Rick & Morty 🤩