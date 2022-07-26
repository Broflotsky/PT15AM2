# HW 02 - React-Estado-Life Cycle | Ejercicios

## Duración estimada 🕒

x minutos

---

## Intro

La aplicación que vas a desarrollar será sobre un zoológico. La misma tendrá un input donde escribir el nombre del zoológico, botones que filtren los animales según su especie, mostrando el resultado correspondiente y un listado de los animales que tiene nuestro zoológico.

Todo esto lo harás utilizando componentes funcionales y componentes de clase.

---
## Consigna de la homework

En esta homework, aprenderemos a crear componentes de estado, teniendo en cuenta también su ciclo de vida.

* Para el componente **Zoo.jsx** generaremos un estado utilizando los hooks useState y useEffect.
* Para el componente **Animals.jsx** también generaremos un estado utilizando el this.state y los ciclos de vida componentDidMount, componentDidUpdate y componentWillUnmount.
* Tendremos un componente adicional **Species** en el que recibe props.

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

Los dos primeros test pasarán sin que hagas nada, simplemente están para que te ayuden a verificar que estás realizando correctamente los pasos y que no tienes errores.


🔹 Para poder correr la aplicación de forma local, sólo debes ejecutar el comando

```bash
npm start
```

* Ingresando a <http://localhost:3000> desde el navegador, podremos ir viendo en tiempo real el resultado de nuestro trabajo.

🔹 Para poder correr el servidor **db.json**, debes:

* Abrir una segunda terminal.
* En la terminal, dirígete a la carpeta que estamos trabajando.
* Ejecuta el comando:
 
```bash
npm run server
```

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

* Una carpeta llamada **assets**
* Una carpeta llamada `components`
* Un archivo llamado **App.js**
* Un archivo **index.css**
* Un archivo **index.js**

🔹 Para estos ejercicios, trabajaremos sólo dentro la carpeta `components`. Dentro de esta carpeta encontrarás:

* Una carpeta llamada **Animals**, la cual a su vez contiene:
   * El componente `Animals.jsx`
* Una carpeta llamada **Species**, la cual a su vez contiene:
   * El componente `Species.jsx`
* Una carpeta llamada **Zoo**, la cual a su vez contiene:
   * El componente `Zoo.jsx`
   * La hoja de estilos **Zoo.module.css**

---

## 👩‍💻 Ejercicio 1
### Crea un estado a nuestro componente funcional usando React.useState

🔹 El componente funcional `Zoo.jsx`, es actualmente un componente sin estado.

🔹 Abre el archivo `Zoo.jsx`, dentro de él encontrarás:

* El import de:
   * La librería **React**
   * El componente **Animals** 
   * El componente **Species**
   * El archivo **Zoo.module.css**

* La función `Zoo` que renderiza:

   * Un div.
   * Dentro de este div, se renderiza:
      * Una etiqueta h1
      * Una etiqueta div

🔹 Lo que hay que hacer:

1. Crea una constante de estado llamada `zoo`, y asígnale el hook React.useState que inicialice en un objeto con las siguientes propiedades:

* zooName en el que su valor sea un string vacío.
* animals en el que su valor sea un array vacío.
* species en el que su valor sea un array vacío.
* copyAnimals en el que su valor sea un array vacío.

 Por ejemplo: 

```js
const [example, setExample] = React.useState({
   example1:'',
   example2:[],
   example3:[]
});
```

> **Nota**: Para que corran los test, el hook debe ser utilizado de esta manera: **React.useState()**. No debe utilizarse como **useState()**. 💡

2. Renderiza una etiqueta label encima de la etiqueta h1 que contenga el texto "Zoo Name:".
3. Renderiza una etiqueta input debajo de la etiqueta label y encima de la etiqueta h1.
4. En la etiqueta h1, renderiza el estado `zoo.zooName`
4. A la etiqueta input asígnale los atributos `value` y `onChange`que por el momento sean iguales a un string vacío.
5. Al atributo **value** de la etiqueta input asígnale el estado `zoo.zooName`.
6. Crea una función llamada `handleInputChange`, que reciba un **evento** como parámetro.
7. Dentro de la función `handleInputChange`, setea el estado zoo, la propiedad zooName, capturando el valor del input.
8. Al atributo **onChange** del input, asígnale la función `handleInputChange`.


🔹 Resultado esperado:

<p align="center"><img src="./img/img01.gif" height="300px"></p> 

---
## 👩‍💻 Ejercicio 2
### Crea el hook React.useEffect en nuestro componente funcional 

🔹 Continúa trabajando en el componente **Zoo.jsx**.

🔹 Lo que hay que hacer:

1. Utiliza el hook React.useEffect.
2. Dentro del hook, usa fetch para hacer una llamada al servidor **db.json** a través del endpoint `'http://localhost:3001/animals'`, obteniendo el objeto **animals** con los datos de los animales. Para utilizar fetch, es necesario usar promesas, como aún no las has visto, tienes este snippet para que copies y pegues dentro del hook useEffect:

```js
fetch("http://localhost:3001/animals")
      .then((res) => res.json())
      .then((data) =>
        setZoo({ ...zoo, 
        animals: data.animals, 
        species: data.species, 
        copyAnimals:data.animals })
      )
      .catch((error) => console.log(error));
```

> **Nota**: Si tienes conocimiento base en promesas y deseas hacerlo de otra manera, puedes hacer la llamada utilizando `axios` para traer los datos. 💡

3. Crea una función llamada `handleSpecies`, que reciba un **evento** como parámetro.
4. Dentro del segundo div:
      * Pasa el estado **zoo**, con su propiedad `species` y la función `handleSpecies` como props al renderizar el componente ***Species***.
      * Pasa el estado **zoo**, con su propiedad `animals` como props al renderizar el componente ***Animals***.

---

## 👩‍💻 Ejercicio 3
### Recibiendo props en nuestro componente funcional Species

🔹 Ahora trabajaremos en el componente **Species.jsx**.

🔹 Abre el archivo `Species.jsx`, dentro de él encontrarás:

* El import de la librería **React**

* La función `Species` que renderiza:

   * Un div.
   * Dentro de este div, se renderiza:
      * Una etiqueta h2
      * Una lista desordenada

🔹 Lo que hay que hacer:

1. El componente recibe props como parámetro.
2. Dentro del div:
   * Introduce el texto `"Species"` en la etiqueta h2.
   * Renderiza un botón por cada una de las especies que trae el componente por props y agrega el evento onClick, asignándole la función que también recibe por props.(Por ahora nuestros botones no hacen nada).

> Tips: 
> * Para recorrer el arreglo y retornar elementos de acuerdo a su contenido, puedes usar el método `map`.

🔹 Resultado esperado:

<p align="center"><img src="./img/img02.gif" height="300px"></p> 

---

## 👩‍💻 Ejercicio 4
### Recibiendo props en nuestro componente de clases Animals

🔹 Ahora trabajaremos en el componente **Animals.jsx**.

🔹 Abre el archivo `Animals.jsx`, dentro de él encontrarás:

* El import de la librería **React**

* Inicializa un estado en cero.

* La función de clase `Animals` que renderiza un div.
   

🔹 Lo que hay que hacer:

1. Dentro del div, renderiza las props animals, de acuerdo a lo que necesitemos en cada etiqueta:
   * Una etiqueta h5 con el nombre de los animales.
   * Una etiqueta de imagen, con sus atributos src, alt y width de 300px (para darle un tamaño apropiado a la imagen).
   * Una etiqueta span con la especie de los animales.

> Tips: 
> * Para recorrer el arreglo y retornar elementos de acuerdo a su contenido, puedes usar el método `map`.

🔹 Resultado esperado:

<p align="center"><img src="./img/img01.gif" height="300px"></p> 

**...Estamos llegando a la última parte de la homework** ⭐

Vamos a dar la funcionalidad correspondiente a la app para que cuando el usuario haga click en una de las especies nos renderice los animales relacionados a esa especie.

🔹 Lo que hay que hacer:

1. Volvamos al componente Zoo
2. Dentro de la función `handleSpecies`, implementa la lógica para filtrar los animales según su especie.

> Tips: 
> * Para recorrer el arreglo y retornar elementos de acuerdo a su contenido, puedes usar el método `filter`.
> **Nota**: Al hacer filter del estado zoo.animals, los datos que no coincidan con el filtrado, se perderían; puedes utilizar la propiedad "zoo.copyAnimals" para mantener una copia de ese arreglo.


---

## Recordemos que...

* Puedes utilizar cualquiera de los métodos enseñados en clase y practicados en este ejercicio para aplicar estilos en React.
* Si vas a utilizar `styled components`, el nombre de las variables `const` deben comenzar con mayúscula.
* Para utilizar estilos en línea o `inline styling`, debes usar el atributo `style`, estableciendo su valor **como un objeto de javascript**.
* Si utilizas `CSS Modules`, el alcance de tus estilos será local para cada componente y evitarás conflictos como pisar estilos en tu proyecto.
* Aplicar estilos es como pintar un cuadro, no hay límites en la imaginación y creatividad, sin olvidarnos de dar a los usuarios la mejor experiencia. 😃

---

## Recursos adicionales

* Documentación **"Styled Components"** <https://styled-components.com/docs/basics>
* Documentación **"CSS"** <https://www.w3schools.com/css/default.asp>

---

Listo!! Ahora estás preparado para estilar tu app!! 👨‍🎨👩‍🎨✨🚀

Dirígete a la carpeta 📂 [**"02 - Integration"**](../02%20-%20Integration/README.md) y diviértete estilando la app de Rick & Morty 🤩
