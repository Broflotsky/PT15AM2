# Homework React-Estado-LifeCycle

<!-- ### Instrucciones para correr el proyecto

Desde la carpeta "homework" se pueden ejecutar los siguientes comandos:

1. `npm install`: Instala todas las dependencias necesarias para correr el proyecto correctamente. [Es necesario correrlo sólo la primera vez]

2. `npm start`: Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a http://localhost:3000

No es necesario volver a correr el proyecto cada vez que se realice un cambio sino que se verá automáticamente reflejando en el navegador.

> Hay veces que por problemas de configuración los cambios no se ven automáticamente reflejados en el navegador por lo que si te ocurre esto la opción rápida sería parar la ejecición del proyecto (Ctrl + C) y volver a ejecutar `npm start`. De todas formas si te ocurre esto contactate con tu PM. -->

## Intro

<!-- 1. Ya se encuentran copiados los componentes creados en el ejercicio anterior dentro de la carpeta `components`. En el caso de que quieran utilizar los que hicieron ustedes, copiar todos los archivos que se encuentren en la carpeta `components` del ejercicio `07-React-Estilos` a la carpeta `components` pero del ejercicio `08-React-Estado-LifeCycle` sobreescribiendo los que ya se encuentran allí. -->

Hasta el momento en nuestra app tenemos estos 3 Componentes:

* Card.jsx
* Cards.jsx
* SearchBar.jsx

Adicionalmente, vamos a crear otro denominado `Nav` que va a ser nuestra barra superior de navegación, en la cual debemos incluir el componente `SearchBar`.

También vamos a reestructurar nuestra vista ***Home***, que no es más que nuestro archivo `App.js` para darle una forma más ordenada.

## Ejercicio

---

### 1) Crear Nav

Debemos crear nuestro componente `Nav`.

Escribir el código correspondiente en `components/Nav.jsx`. Recuerda que este componente debe incluir el componente `SearchBar`.

<!-- Pueden utilizar como base los [navbars ya definidos de Bootstrap](https://getbootstrap.com/docs/4.4/components/navbar/). El resultado debería ser similar a lo siguiente:

<p align="center">
  <img src="./img-screen/nav.png" alt="Gif" />
</p> -->

<!-- * __Recuadro rojo__: Nav
* __Recuadro verde__: SearchBar -->

---

### 2) Reestructurar Home

<!-- Ahora que ya tenemos cada una de las partes de nuestra aplicación, vamos a unirlas en una "Home" de forma más ordenada. -->

Ahora vamos a modificar el contenido del archivo `App.js`.

Para ello veamos una imagen del resultado final y pensemos la estructura general:

<img src="./img/layout.png" width='800px'/>

>* **Recuadro rojo**: Nav
>* **Recuadro amarillo**: SearchBar
>* **Recuadro verde**: Cards
>* **Recuadro azul**: Card

Ya no vamos a renderizar la `Card` "suelta" que pusimos en la primera clase. En `App` sólo vamos a renderizar el componentes `Cards`, ya que el mismo ya incluye varias `Card`.

Lo mismo sucede con `SearchBar`, no lo vamos a renderizar más directamente en App, debido a que ya se encuentra dentro de `Nav`.

#### Entonces necesitamos

* Importar los componentes que vamos a utilizar
* Agregarlos dentro del método render

```jsx
// App.js
...

//Importar
import Nav from './components/Nav.jsx'
...
//Renderizar componentes
<div className="App">
  <Nav />
  <Cards characters={characters} />
</div>
...

```

Luego de aplicarle algunos estilos básicos al componente Nav, deberíamos ver algo como esto:

<img src="./img/home1.png" width='800px'/>

<!-- Inicialmente si nuestro componente Cards no está recibiendo datos de ciudades la aplicación se vería de la siguiente forma (Pueden si quieren al igual que realizamos en el ejercicio anterior importar los datos de ejemplo `data.js` y pasárselos como parámetro para verificar su funcionamiento):

<p align="center">
  <img src="./img-screen/barra-busqueda.png" alt="Gif" />
</p> -->

<!-- *Observen que dentro del componente Cards se está verificando si está recibiendo las cities como prop o no, en el caso de que no las reciba devuelve un mensaje avisando para evitar que surja un error al intentar realizar el map sobre el array vacio* -->

---

### 3) Implementar un estado

Utilizar el archivo `App.js` para mantener actualizado el listado de personajes a mostrar. Para ello debemos crearle un estado a este componente donde tengamos el array de personajes:

```jsx
// App.js
...
//Modificar esta línea para poder manejar el estado

import characters, { Rick } from './data.js' // <<< ESTO LO BORRAMOS. No vamos a usar más los datos de este archivo.

import { useState } from 'react' // Agregamos useState
...

export default function App() {
  const [cities, setCities] = useState([])
  ...
}
```

### 4) Función para agregar personajes

Ahora debemos crear una función para agregar nuevos personajes a nuestro estado `characters` y se la pasaremos al `SearchBar` mediante el `Nav`.

```jsx
// App.js
...

export default function App() {
...

function onSearch(character) {
    // Acá habría que hacer el llamado a la API para obtener los datos del personaje,
    // pero de momento agregaremos uno por default, para ver que funcione.

    const example = {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    }

    setCharacters(oldChars => [...oldChars, example])
  }
}

return (
...

```

---

### 5) Le pasamos la función a Nav

Nuestra función recién creada, que modifica el estado `characters` se la pasamos a `Nav`.

```jsx
// App.js
...
    <Nav onSearch={onSearch}/>
...

```

### 6) Seguimos pasando la función para que llegue a su destino

Quien finalmente debe ejecutar la función `onSearch` no es el `Nav` sino el `SearchBar`, por lo que debemos hacerle llegar dicha función.

```jsx
// Nav.jsx
...
  export default function ({ onSearch }) { // Recibimos la prop
...
return (
...
    <SearchBar onSearch={onSearch}/> // Se la pasamos a SearchBar
...
)
```

---

### 7) Probemos que funcione

En este punto la función ya debería ejecutarse, debido a que en un homework anterior ya habíamos creado el componente `SearchBar` que recibía la función como parámetro y la ejecutaba cuando se hacía un `submit` del form.

Repasemos el componente `SearchBar`:

```js
//SearchBar.jsx

export default function SearchBar ({ onSearch }) { // recibimos la prop que nos pasó el componente Nav
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSearch()
        }}
      >
        <input
          type='text'
          placeholder='Personaje...'
        />
        <input type='submit' value='Agregar'/>
      </form>
    </div>
  )
}
```

<!-- Llegado a este punto cada vez que le den click al botón de `Agregar` se debe incluir una nueva tarjeta con los datos que seteamos para la ciudad de `Cairns` -->

Si observamos el código anterior estamos llamando a la función `onSearch` sin pasarle ningún parámetro, pero quisiéramos que ese parámetro dependa del input ingresado por el usuario.

---

### 8) Pasandole parámetros a la función

Modificar el componente `SearchBar` para que mantenga un **estado** interno del nombre del personaje (`character`) escrito por el usuario y que cuando haya un cambio en el input, lo detecte mediante el listener `onChange` y actualice dicho estado.

Adicionalmente pasarle dicho estado `character` como parámetro de la funcion `onSearch` cuando la llamamos en el `submit`; para que utilice el estado, que contiene lo que ingresó el usuario y éste valor llegue así a la función onSearch que tenemos en App.

---

### 9) Buscando datos reales

Ahora debemos modificar la función `onSearch` para que obtenga los datos necesarios desde la API de [Rick&Morty](https://rickandmortyapi.com). Para ello vamos a utilizar `fetch` para hacer la llamada y obtener el resultado. Por el momento sólo vamos a obtener los personajes por ID, ya que si los buscamos por nombre hay demasiados resultados debido a que los mismos se repiten bastante.

En el caso de que el personaje no exista, deberíamos mostrar un mensaje indicándolo.

```js
// App.js

  ...

  function onSearch (character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          setCharacters(oldChars => [...oldChars, data])
        } else {
          window.alert('No hay personajes con ese ID')
        }
      })
  }


...

```

---

### 10) Cerrar cards

Por último, recordemos que en una homework anterior habíamos creado el componente `Card` para que reciba una función como parámetro. Ésta va a ser la encargada de eliminar esa card al momento de hacer click en el botón `X`.

Para ello es necesario definir dicha función en `App.js` para que a partir del id recibido, elimina dicho personaje del array de personajes del ***estado***.

```jsx
// App.js
  ...
  function App() {
    ...
    function onClose(id) {
      setCharacters(prevCharacters => prevCharacters.filter(char => char.id !== id));
    }
    ...
```

### Muestra final de la aplicación funcionando

<img src="./img/final.gif" width='800px'/>
