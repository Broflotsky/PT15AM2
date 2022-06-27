# Homework React-Intro

## Ejercicios

En esta homework, vamos a crear una serie de Componentes de React, nos ayudarán a entender mucho mejor esta grandiosa librería :D.

> **Nota**: Todos los Componentes que haremos en esta homework son `Puros` o `Funcionales`, por lo tanto, ninguno tiene estado, simplemente algunos reciben datos por props.
>
> No te preocupes por el estilo de los componentes. En la homework siguiente practicaremos un poco sobre estilos.

En la carpeta `src` vas a encontrar ya el esqueleto del proyecto React, estructurado de la siguiente manera:una carpeta llamada componentes (dentro de ella realizarás los ejercicios), un archivo llamado App.js, index.js, index.css, una carpeta donde estarán los tests correspondientes, package.json y el archivo README que ahora mismo estás leyendo. (^-^)

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

Para este primer ejercicio encontrarás ya creado el componente "Bienvenido", dentro de la función utilizaremos la magia de React para combinar Javascript con HTML, crea una variable de tipo string llamada saludo, asígnale un mensaje de bienvenida y luego que ésta retorne en un h1.


---

## Ejercicio 2

(`components/Cards.js`)

<img src="./img/cards.png" height="250px">

Este Componente nos va a servir para renderizar **varios** Componentes `Card`.

Básicamente, va a recibir un arreglo de `personajes` (con todos sus datos), y va a utilizar un componente `Card` (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

> Tip: Usar el método `map` y devolver un componente `Card` por cada elemento del arreglo. [Acá](https://es.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components) un ejemplo de la documentación de React.

---

## Barra de búsqueda

(`components/SearchBar.js`)

<img src="./img/searchBar.png" height="50px">

Vamos a crear este componente para luego poder agregar más personajes que deseemos ver.

Este Componente recibe por props una función `onSearch`, que recibe un parámetro (que luego será el nombre del personaje tomado desde el input; pero de momento le pasamos uno cualquiera, ya que aún no estamos utilizando estados dentro del componente).

La función `onSearch` se debe ejecutar cuando se haga click en el botón `Agregar`.

---

## Ahora creemos una app desde cero

Ya completaste los puntos anteriores y funciona todo? Perfecto! Ya podemos comenzar a crear nuestra propia app:

1. En una carpeta **fuera de este repo**, usamos *CRA* (create-react-app) para crear una nueva app de React:

```bash
npx create-react-app rick_and_morty
```

> Hint: para el nombre de tu app no puedes usar mayúsculas ni el signo "&"

Al término del proceso, nos va a crear una nueva carpeta con el siguiente contenido:

<img src="./img/cra_01.png" height="200px">

2. Dentro de esta nueva carpeta tipeamos:

```bash
npm start
```

> Hint: Si aún tenemos corriendo el server local de la homework, vamos a obtener un error debido a que el puerto predeterminado (3000) está ocupado. Podemos elegir utilizar otro puerto, o terminar el proceso anterior y luego reintentarlo.

Esperamos que se "levante" el servidor local y luego veremos algo así:

<img src="./img/cra_02.gif" height="360px">

Ahora copiemos/reemplacemos, en nuestra carpeta `\src` del nuevo proyecto, los siguientes elementos que ya teníamos en la homework:

1. La carpeta `components` (y todo su contenido)
2. El archivo `App.js`
3. El archivo `data.js`

En el navegador ya deberías ver los cambios. Lo que hicimos en la homework está corriendo como una app independiente.

Listo! Ya tenes tu primer app hecha con React 👏🏼🚀