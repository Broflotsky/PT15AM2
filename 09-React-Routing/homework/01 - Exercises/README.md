# HW 02 - React-Routing | Ejercicios

## Duración estimada 🕒

x minutos

---

## Intro

Encontrarás en esta homework la Cruise App ya estructurada con sus componentes, lo que debes realizar, de acuerdo con lo visto en clase, es el enrutamiento de la aplicación.


---
## Consigna de la homework

* Implementar las rutas correspondientes para renderizar los componentes de la aplicación.
* Realizar redirecciones a otros componentes.
* Mantener renderizado un componente en todas las rutas.

---

## Pasos básicos para realizar la homework

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

* Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

* Listo!! Ya puedes correr los test:

```bash
npm test
```

Si deseas correr por test, puedes utilizar:

```bash
npm run test:01
```

🔹 Para esta homework necesitarás emular peticiones a una api con el fin de consumir los datos que allí están, para ello, debes correr el servidor **db.json**, sin este paso no podrás visualizar el resultado esperado y tampoco pasarán los tests. A continuación, los pasos para correr el servidor:

* Abrir una segunda terminal.
* En la terminal, dirígete a la carpeta que estamos trabajando.
* Ejecuta el comando:
 
```bash
npm run server
```

🔹 Para poder correr la aplicación de forma local, sólo debes ejecutar el comando

```bash
npm start
```

* Ingresando a <http://localhost:3000> desde el navegador, podremos ir viendo en tiempo real el resultado de nuestro trabajo.


---

## Conociendo la estructura

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

* Una carpeta llamada **_mocks_**
* Una carpeta llamada **img**
* Una carpeta llamada **public**
* Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)
* Una carpeta llamada **tests**
* Un archivo **db.json**
* Un archivo **package.json**
* Y el archivo `README.md` que ahora mismo estás leyendo. 🧐

Además:

🔹 Dentro de la carpeta `src` encontrarás el esqueleto del proyecto React, estructurado de la siguiente manera:

* Una carpeta llamada `components`
* Un archivo llamado `App.js`
* Un archivo **index.css**
* Un archivo `index.js`

🔹 Para estos ejercicios, trabajaremos en la carpeta `components` y en el archivo `App.js`. Dentro de la carpeta **components** encontrarás:

* Una carpeta llamada **Home**, la cual a su vez contiene:
   * El componente `Home.jsx`
* Una carpeta llamada **NavBar**, la cual a su vez contiene:
   * El componente `NavBar.jsx`
* Una carpeta llamada **SearchBar**, la cual a su vez contiene:
   * El componente `SearchBar.jsx`
* Una carpeta llamada **Card**, la cual a su vez contiene:
   * El componente `Card.jsx`
* Una carpeta llamada **Cards**, la cual a su vez contiene:
   * El componente `Cards.jsx`

---

## 👩‍💻 Ejercicio 1
### BrowserRouter


🔹 Abre el archivo `index.js`, dentro de él encontrarás:

* El import de:
   * **React**
   * **ReactDOM** 
   * **index.css**
   * **App.js**

* También encontrarás el ReactDOM renderizando los elementos de react en el navegador.

🔹 Lo que hay que hacer:

1. Importa `BrowserRouter` desde **'react-router-dom'**
2. Envuelve **App** en el componente ***BrowserRouter***.

---
## 👩‍💻 Ejercicio 2

### Routing 

🔹 Ahora dirígete al componente App.js.

🔹 Lo que hay que hacer:

1. Importa `Routes` y `Route` desde **react-router-dom**.
2. Renderiza el componente **Routes**.
3. Crea las siguientes rutas para navegar, utilizando el componente **Route** dentro de ***Routes***:
   * "/home" --> Para el componente `Home`.
   * "/detail/:id" --> Para el componente `Detail`.  
4. Crea las siguientes rutas dinámicas para renderizar los siguientes componentes:
   * Nav: Debe aparecer en todas las rutas.
   * Cards: Debe aparecer sólo en la ruta "/".
   * Detail: Debe aparecer sólo en la ruta "/detail/{detailId}

---

## 👩‍💻 Ejercicio 3

### Recibiendo props en nuestro componente de clases Animals

🔹 Ahora trabajaremos en el componente **Animals.jsx**.

🔹 Abre el archivo `Animals.jsx`, dentro de él encontrarás:

* El import de la librería **React**

* La función de clase `Animals` que renderiza un div.
   

🔹 Lo que hay que hacer:

1. Dentro del div, mapea y renderiza las props animals  de acuerdo a lo que necesitemos:
   * Una etiqueta **h5** con el nombre de los animales.
   * Una etiqueta **img** con los atributos:
      * ***src*** asignando como valor la imagen de los animales.
      * ***alt*** asignando como valor el nombre de los animales.
      * ***width*** con un valor de 300px (para darle un tamaño apropiado a la imagen).
   * Una etiqueta **span** con la especie de los animales.

> Tips: 
> * Para recorrer el arreglo y retornar elementos de acuerdo a su contenido, puedes usar el método `map`.

🔹 Resultado esperado:

<p align="center"><img src="./img/img02.gif" height="300px"></p> 

---

## 👩‍💻 Ejercicio 4

### Recibiendo props en nuestro componente funcional Species

🔹 Ahora trabajaremos en el componente **Species.jsx**.

🔹 Abre el archivo `Species.jsx`, dentro de él encontrarás:

* El import de la librería **React**

* La función `Species` que renderiza un div.

🔹 Lo que hay que hacer:

1. El componente recibe props como parámetro.
2. Dentro del div, mapea y renderiza las especies que vienen por props en una etiqueta **button**.
3. Agrega a la etiqueta button los siguientes atributos: 
   * ***key***?
   * El evento ***onClick***, asignándole la función `handleSpecies` que también recibe por props.
   * Un ***value*** asignándole la especie.
4. En el children del button renderiza las especies.
5. Agrega una segunda etiqueta de botón en el que renderices en el evento ***onClick*** la función `handleAllSpecies`.
6. En el children del segundo botón coloca el texto "All Animals".

(Por ahora nuestros botones no hacen nada).

> Tips: 
> * Para recorrer el arreglo y retornar elementos de acuerdo a su contenido, puedes usar el método `map`.

🔹 Resultado esperado:

<p align="center"><img src="./img/img03.gif" height="300px"></p> 

---


## 👩‍💻 Ejercicio 5 

### ...Estamos llegando a la última parte de la homework ⭐

Vamos a dar la funcionalidad correspondiente a la app para que cuando el usuario haga click en una de las especies nos renderice los animales relacionados a esa especie y cuando haga click en el botón "All Animals" renderice nuevamente todos los animales.

🔹 Lo que hay que hacer:

1. Volvamos al componente Zoo
2. Dentro de la función `handleSpecies`, setea el estado **zoo**, la propiedad animals, implementando la lógica para filtrar los animales según su especie.
3. Dentro de la función `handleAllSpecies`, setea el estado **zoo**, la propiedad animals con la propiedad copyAnimals.

> Tips: 
> * Para recorrer el arreglo y retornar sólo los elementos necesarios, puedes usar el método `filter`.
> **Nota**: Al hacer filter del estado zoo.animals, los datos que no coincidan con el filtrado, se perderían; puedes utilizar la propiedad "zoo.copyAnimals" para mantener una copia de ese arreglo.

🔹 Resultado esperado:

<p align="center"><img src="./img/img04.gif" height="300px"></p>

---

## Recordemos que...

* Los hooks son funciones especiales que nos permiten acceder a las funcionalidades de React.
* El hook React.useState devuelve un array en el que tendrá el valor de ese estado y un método para actualizar ese estado.
* Las variables de estado no tienen que inicializarse siempre en un objeto, puede ser en un array, string, número, boolean, etc.
* Puedes usar en el componente los React.useState que desees.😃
* El hook useEffect recibe dos parámetros: la función que React ejecutará cada renderización y un array de dependencias como opcional.
* Puedes Utilizar más de un useEffect en el mismo componente. 😃

---

## Recursos adicionales

* Documentación **"Using the State Hook "** <https://reactjs.org/docs/hooks-state.html>
* Documentación **"Using the Effect Hook "** <https://reactjs.org/docs/hooks-effect.html>

---

Listo!! Aprendiste cómo funcionan los componentes de estado y sus ciclos de vida!! ✨🚀

Dirígete a la carpeta 📂 [**"02 - Integration"**](../02%20-%20Integration/README.md) y continúa desarrollando la app de Rick & Morty 🤩

---
