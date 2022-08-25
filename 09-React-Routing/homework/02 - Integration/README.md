# HW 09 - React-Routing | Integración

## Duración estimada 🕒

x minutos

---

## Rick & Morty App

### Intro

Continuamos con nuestra Rick & Morty App. Utilizaremos React-Router-DOM el cual nos va a permitir enrutar nuestra SPA. Esto quiere decir que podremos decidir en que path o "link" se renderice cada componente.

Al finalizar, habremos creado tres rutas por las que podremos navegar:

-  **"/"**: esta será la ruta del Home (vista principal/general).
-  **"/detail/${detailId}/"**: en esta ruta encontraremos información más detallada sobre el personaje en particular.
-  **"/about"**: en esta ruta colocarás tu nombre y describirás de qué trata la aplicación Rick & Morty.

---

## Comencemos

Vamos a comenzar creando los componentes que nos faltan en nuestra carpeta components. Creamos `About.jsx` y `Detalle.jsx` con sus respectivos archivos `.css` para el estilado dentro de la carpeta `components`.

Cómo sabemos, `react-router` nos da la posibilidad de crear rutas dinámicas. Esto nos permite renderizar algunos componentes u otros dependiendo el path en el que nos encontremos. Para este ejercicio, cada ruta renderizara estos componentes:

-  `<Nav />` tiene que aparecer en todas las rutas.
-  `<Cards />` debe aparecer sólo en la ruta "`/`".
-  `<About />` debe aparecer sólo la ruta "`/about`".
-  `<Detail />` debe aparecer sólo en la ruta "`/detail/{detailId}`".

<<<<<<< HEAD
---

### 👩‍💻 Ejercicio 1

Instalar y configurar `react-router-dom` para que toda la aplicación pueda escuchar las rutas.
=======
### Rutas dinámicas

Cómo sabemos, `react-router` nos da la posibilidad de crear rutas dinámicas. Estas rutas serán los caminos o espacios en el que se renderizará el componente que nosotros decidamos.
nos permitiras y podemos decidir qué componentes queremos que aparezcan en qué rutas.
Para nuestro ejercicio nosotros queremos ver lo siguiente:

- `<Nav />` tiene que aparecer en todas las rutas.
- `<Cards />` debe aparecer sólo en la ruta `/`.
- `<About />` debe aparecer sólo la ruta `/about`.
- `<Detail />` debe aparecer sólo en la ruta `/detail/{detailId}`
>>>>>>> e4a9f5054c39a3d5c107e86a7225f124fa0f4267

---

### 👩‍💻 Ejercicio 2

Crea el componente `<About />`. Este será una vista que contenga tu información, y una explicación de qué se trata la aplicación!

---

### 👩‍💻 Ejercicio 3

En nuestro archivo "app.js" (aplicación), crea las rutas necesarias para que los componentes `<About />`, `<Cards />` y `<Nav />` se rendericen en sus links correspondientes.

> **Nota:** Comprueba en tu navegador que los links rendericen el componente correcto, y que el componente `<Nav />` se vea siempre.

---

### 👩‍💻 Ejercicio 4

Ahora nuestra SPA cuenta con dos rutas distintas: "`/`" y "`/about`". Pero nos está faltando una más: "`/detail/{detailId}`". Si observas, esta última ruta lleva un **template string**. Esto quiere decir que esta ruta, en su segundo término, siempre llevará distintos valores. Esto nos permitirá crear una ruta específica e individual para el detalle de cada personaje.

En este caso, el valor que pasaremos es el ID de cada personaje.

1. Crea un Link en cada `<Card />` (en el elemento que muestre el nombre del personaje) para que nos redirija a la ruta de cada personaje.
2. Al Link de cada una de las cards deberás pasarle la propiedad ID del personaje.

```js
// Card.js
...
<Link to={`/detail/${id}`} >
  <h5 className="card-title">{name}</h5>
</Link>
...
```

---

### 👩‍💻 Ejercicio 5

¡Genial! Cuando hacemos click sobre el nombre de un personaje dentro de una Card, esta nos redirige al link con el ID del personaje. Ahora necesitamos crear el componente que mostrará toda la información del personaje.

Para obtener esta información, importa los hooks **useState** y **useEffect** de `react`, y el hook **useParams** de `react-router-dom`.

1. Primero obten el ID del personaje mediante **useParams**.

2. Crea un estado local con el nombre **character** en el que puedas guardar la siguiente información del personaje:

-  "nombre" | "status" | "especie" | "género" | "origin" | "location" | "imagen"

3. Crea un **useEffect**. Pásale el siguiente callback en su interior, y en el arreglo de dependencia agrega la variable **ID** obtenida mediante _useParams_.

```js
() =>
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
         if (char.name) {
            setCharacter(char);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
      .catch((err) => {
         window.alert('No hay personajes con ese ID');
      });
```

---

### 👩‍💻 Ejercicio 6

Ahora en tu estado local **character** tendrás toda la información del personaje disponible para que la renderices en este componente (`<Detail />`).

Dale estilos al componente.

---

### 👩‍💻 Ejercicio 7

Crea un botón que te permita regresar a "**/**".

---

### 👩‍💻 EXTRA CREDIT

Ahora te desafiamos a que crees un nuevo componente llamado **Error**. A este componente le podrás dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404.

Pueden inspirarte en el siguiente link: "https://github.com/errroorrxd".

El desafío es. Haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "`/`" y "`/about`", y el usuario en el navegador escribe y "`/henry`", debería mostrar el error 404.
