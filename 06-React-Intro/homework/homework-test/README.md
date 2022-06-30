# Homework React-Intro

## Ejercicios

Esta homework, en la que vamos a crear una serie de Componentes de React, nos ayudará a entender mucho mejor esta grandiosa librería :D.

> **Nota**: Todos los Componentes que haremos en esta homework son `Puros` o `Funcionales`, por lo tanto, ninguno tiene estado, simplemente algunos reciben datos por props.
>
> No te preocupes por el estilo de los componentes. En la homework siguiente practicaremos un poco sobre estilos.

En la carpeta `src` vas a encontrar ya el esqueleto del proyecto React, estructurado de la siguiente manera: una carpeta llamada components (dentro de ella realizarás los ejercicios), un archivo llamado App.js, index.js, index.css, una carpeta donde estarán los tests correspondientes, package.json y el archivo README que ahora mismo estás leyendo. (^-^)

Estos ejercicios nos ayudarán a comprender los conceptos vistos en clase y a la hora de realizar la homework-integration.

---

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

Para este primer ejercicio encontrarás ya creado el componente "Bienvenido", dentro de la función utilizaremos la magia de React para combinar Javascript con HTML, crea una variable de tipo string llamada saludo, asígnale un mensaje de bienvenida y luego que ésta retorne en un h1; además crea una etiqueta de párrafo con un mensaje que destaque la lista de los tipos de magia; por último debes crear una variable que contenga un arreglo con mínimo 5 elementos que retornarán en una lista desordenada que enliste este arreglo.
> Tip: para recorrer el arreglo puedes usar el método `map`

<p align="center"><img src="./img/eje1.png" height="250px" >

---

## Ejercicio 2️⃣

Para este ejercicio ya sabemos cómo funciona un componente en React, ahora vamos a crear un componente desde cero. Haz click derecho sobre la carpeta "components" --> Nuevo archivo --> Botones.jsx, crea el componente guiándote del ejercicio anterior; sin embargo, para este ejercicio el componente tendrá lo siguiente:

🔵 Un botón llamado "Ocultar" que al hacer click sobre él, los tipos de magia del componente "Bienvenido" se oculten.

🔵 Un botón llamado "Mostrar" que vuelva nuevamente visible los tipos de magia del componente "Bienvenido".

---

## Barra de búsqueda

(`components/SearchBar.js`)

<img src="./img/searchBar.png" height="50px">

Vamos a crear este componente para luego poder agregar más personajes que deseemos ver.

Este Componente recibe por props una función `onSearch`, que recibe un parámetro (que luego será el nombre del personaje tomado desde el input; pero de momento le pasamos uno cualquiera, ya que aún no estamos utilizando estados dentro del componente).

La función `onSearch` se debe ejecutar cuando se haga click en el botón `Agregar`.

---

Listo! Ahora estás preparado para crear tu propia app!! ✨🚀

Dirígete a la carpeta 📂**homework-integration** y diviértete desarrollando la app de Rick & Morty 🤩
