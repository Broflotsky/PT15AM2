# HW 06 - React-Intro | Integración

## Duración estimada 🕒

90 minutos

---

## Rick & Morty App

### Intro

En esta homework, vamos a crear una serie de Componentes de React, que luego van a formar parte de nuestro primer desarrollo front-end.

> **Nota**: Todos los Componentes que hagamos en este homework son `Puros`, por lo tanto, ninguno tiene estado, simplemente reciben datos por props.
>
> No te preocupes por el estilo de los componentes. En el homework siguiente vamos a darle Estilos.

---

### Conociendo la estructura

🔹 Dentro de la carpeta `02 - Integration`, vas a encontrar la siguiente estructura:

-  Una carpeta llamada **img**
-  Una carpeta llamada **public**
-  Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)
-  Un archivo **package.json**
-  Y el archivo `README.md` que ahora mismo estás leyendo. 🧐

Además:

🔹 Dentro de la carpeta `src` vas a encontrar ya el esqueleto del proyecto React, estructurado de la siguiente manera, donde deberás codear cada Componente:

-  Una carpeta llamada **components**
-  Un archivo llamado **App.css**
-  Un archivo llamado **App.js**
-  Un archivo llamado **data.js**
-  Un archivo **index.css**
-  Un archivo **index.js**

> **Nota**: Sabemos que los Componentes de React tienen que cumplir el principio de una única responsabilidad, es decir que cada Componente debe cumplir una única tarea bien definida.

---

## Instrucciones para correr el proyecto

Para realizar este proyecto crearemos un nuevo respoitorio. Para esto:

1. Abre tu terminal y dirígete a tu escritorio (desktop) con el comando **`cd`**. Una vez allí copia y pega el siguiente comando que te permitirá crear un repositorio desde cero:

```bash
    npx create-react-app rickandmorty
```

2. Luego de ejecutar este comando verás que se creó una carpeta en tu escritorio, y dentro de ella estará tu nueva apliación de React. Ahora le haremos algunas modificaciones. En esta carpeta encontrarás sub-carpetas llamadas "**img**", "**src**" y un archivo "**.env**".

En el repositorio que creaste deberás pegar todas estas carpetas y archivo. Ten en cuenta que deberás reemplazar la carpeta "**_src_**".

3. Una vez hecho todos estos pasos, en el nuevo repositorio ejecuta el comando:

```bash
npm install
```

Instala todas las dependecias necesarias para correr el proyecto correctamente

```bash
npm start
```

Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a <http://localhost:3000>

> Hint: Si aún tenemos corriendo el server local de la homework Exercises, vamos a obtener un error debido a que el puerto predeterminado (3000) está ocupado. Podemos elegir utilizar otro puerto, o terminar el proceso anterior y luego reintentarlo.
>
> No es necesario volver a correr el proyecto cada vez que se realice un cambio, el mismo se verá automáticamente reflejando en el navegador.

---

## Parte 1

## Comencemos

En el archivo `App.js` ya tenemos importados y estamos renderizando los 3 componentes que vamos a codear. Revisa el código, verás que le estamos pasando props a estos componentes.

### 👩‍💻 01 - Haz el componente Character Card

(`components/Card.js`)

<img src="./img/characterCard.png" height="250px">

Esta tarjeta va a mostrar el **nombre** de un personaje, su **especie**, **género** e **imagen**.

Además cuando el usuario haga click en la X de "cerrar", se invocará una función que también viene como props.

Este componente `Card` va a recibir las siguientes props:

-  **name**: Nombre
-  **species**: Especie
-  **gender**: Género
-  **image**: Imagen
-  **onClose**: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.

> Luego todos estos datos van a venir de una API externa, pero por ahora no nos interesa esa parte. Por el momento nosotros te los vamos a brindar desde un archivo local **(src/data.js)**, para que ya puedas ver tu componente funcionando.

---

### 👩‍💻 02 - Haz el componente Cards

(`components/Cards.js`)

<img src="./img/Cards.png" height="250px">

Este Componente nos va a servir para renderizar **varios** Componentes `Card`.

Básicamente, va a recibir un arreglo de `personajes` (con todos sus datos), y va a utilizar un componente `Card` (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

> Tip: Usar el método `map` y devolver un componente `Card` por cada elemento del arreglo. [Acá](https://es.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components) un ejemplo de la documentación de React.

---

### 👩‍💻 03 - Haz el componente de la de Barra de búsqueda

(`components/SearchBar.js`)

<img src="./img/SearchBar.png" height="50px">

Vamos a crear este componente para luego poder agregar más personajes que deseemos ver.

Este Componente recibe por props una función `onSearch`, que recibe un parámetro (que luego será el ID del personaje tomado desde el input; pero de momento le pasamos uno cualquiera, ya que aún no estamos utilizando estados dentro del componente).

La función `onSearch` se debe ejecutar cuando se haga click en el botón `Agregar`.

---

## Parte 2

## Listo! Ahora creemos una app desde cero

Ya completaste los puntos anteriores y funciona todo? Perfecto! Ya podemos comenzar a crear nuestra propia app:

1. En una carpeta **fuera de este repositorio**, usamos _CRA_ (create-react-app) para crear una nueva app de React:

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

> Hint: Si aún tenemos corriendo el server local de la homework Integration Parte 1, vamos a obtener un error debido a que el puerto predeterminado (3000) está ocupado. Podemos elegir utilizar otro puerto, o terminar el proceso anterior y luego reintentarlo.

Esperamos que se "levante" el servidor local y luego veremos algo así:

<img src="./img/cra_02.gif" height="360px">

Ahora copiemos/reemplacemos, en nuestra carpeta `\src` del nuevo proyecto, los siguientes elementos que ya teníamos en la homework Integration Parte 1:

1. La carpeta `components` (y todo su contenido)
2. El archivo `App.js`
3. El archivo `data.js`

En el navegador ya deberías ver los cambios. Lo que hicimos en la homework Integration Parte 1 está corriendo como una app independiente.

Listo! Ya tenes tu primer app hecha con React 👏🏼🚀
