# Redux OMDB APP

En este ejercicio vamos a crear una APP que utilice la API de [OMDB](http://www.omdbapi.com/). Vamos a crear nuestra app utilizando __REACT__ y __REDUX__.

> Vamos a necesitar una APIKEY ya que la API de OMDB es paga. Usen `apikey=20dac387`

Con tu App podremos:

* Buscar películas y listarlas.
* Poder ver todos los detalles de una película en particular.
* Poder agregar las películas a tu lista de favoritos.
* Poder sacar películas de tu lista de favoritos.



### Comenzamos

Para poder comenzar tenemos que instalar las dependencias que utilizaremos. Tendran en el `package.json` ya las dependencias. Ahora hacemos:

```javascript
npm install
```
Dentro de nuestra carpeta `components` tendremos subcarpetas con nuestros nuestro archivo.js y .css para tener mas acomodado nuestro codigo.
En la carpeta `components` tenemos 4 subcarpetas: `Buscador`. `Favorites`, `Movie`, `NavBar`. Y en cada una crearemos sus respectivos archivos .js y .css.
`NavBar.js` sera nuestro Header que nos permitira navegar por nuestras rutas.
`Buscador.js` sera nuestro Home, en donde buscaremos peliculas (llamando a la API) y las mostraremos en forma de lista.
En `Favorites.js` mostraremos la lista de peliculas a las cuales seleccionamos como Favoritas.
Y por ultimo en `Movie.js` sera nuestro compente en donde mostraremos una pelicula en detalle. Accedemos a este componente haciendo click dentro de nuestro buscador o en nuestras favoritas.

### Creamos nuestras Actions

En nuestro archivo `index.js` en nuestra carpeta actions. Por ahora vamos a crear 4 actions. Una para hacer la request a la API y traer todas las peliculas `getMovies`,otra para traer los detalles de la pelicula especifica `getMovieDetail`, a otra para agregarlas como Favoritas `addMovieFavorite` y otra para eliminarla de favoritas `removeMovieFavorite`.

> Abajo tienes un par de ejemplos, para las dos que faltan tienes que investigar y hacerlo por tu propia cuenta. La api que usamos es `http://www.omdbapi.com/`

> Para obtener alguna película a partir de su ID pueden usar el endpoint: http://www.omdbapi.com/?apikey=20dac387&i={idMovie}

```javascript
export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

```
Cada accion devuelve un objecto, la primera key de este objeto es el `type`, su valor lo ponemos nosotros, por convencion se usan mayusculas y guion bajo `_` para separar. Como segundo argumento recibe un `payload`, que son datos que puede llevar que usaremos en nuestro reducer para actualizar el estado. En `addMovieFavorite` el payload que pasaremos cuando hagamos un dispatch de esa action sera el nombre de la Pelicula.En `removeMovieFavorite`,nuestro payload sera la pelicula a eliminar. En `getMovies`, nuestro payload sera el objeto que recibamos de nuestra request. En `getMovieDetail`, el payload sera el objeto con los detalles de la pelicula que seleccionamos.

### Creamos nuestro Reducer

Vamos al archivo `index.js` en nuestra carpeta reducers. Como vimos, un reducer es simplemente una funcion que recibe 2 parametros: state y action. Y depende la `action` que reciba nos devuelve el estado actualizado. Al comienzo del archivo creamos nuestro estado inicial. Lo llamamos `initialState`:

```javascript
const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};
```

Tienes que crear los 4 reducers para las 4 acciones que creamos anteriormente que son:`getMovies`, `getMovieDetail`, `removeMovieFavorite`,`addMovieFavorite`

> Aca abajo le dejamos dos ejemplos, vas a tener que crear los dos restantes

```javascript
function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
      }
  }
  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  }
  return state;
}

export default rootReducer;
```

Ya tenemos la base de nuestro reducer. Como sabemos el `initialState` es inmutable, por eso a la hora del return, hacemos una copia de este, con sintaxis de ES6 (spread operator) otra opcion seria usar `Object.assign({}, state, ...)`, y nos devuelve nuestro `state` actualizado. Exportamos el reducer para poder usarlo en nuestro store. Para entenderlo mejor pueden leer [aca](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns).



### Armamos nuestro store

Ahora pasamos a crear nuestro Store Global que tendra todo nuestro State. Vamos a nuestro archivo `index.js` en nuestra carpeta store, tenemos que importar `CreateStore` de 'redux', por ahora nos deberia quedar asi:

```javascript
import { createStore } from "redux";

const store = createStore();

export default store;
```
La funciton `createStore` recibe argumentos. Primero le pasaremos nuestro `rootReducer` y despues nuestro Middleware para poder hacer peticiones asincronas en nuestro codigo.

### Conectamos el Store con nuestro rootReducer y Middleware

Ya tenemos nuestro Reducer y nuestras actions. Entonces terminamos de conectar nuestro store, para esto importamos `applyMiddleware` de 'redux', `thunk` de la libreria 'redux-thunk' y nuestro Reducer. Pasamos como parametros en `createStore` nuestro rootReducer y applyMiddleware, a esta le pasamos nuestro middleware `thunk`.
Puedes investigar sobre `thunk` en  [aca](https://github.com/reduxjs/redux-thunk).
Usamos un Middleware para poder hacer peticiones AJAX sin problemas. Nos quedaria algo asi:

```javascript
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
```

### Conectamos nuestro Store con nuestra App de React

Es hora de conectar todo. Para eso necesitaremos de un componente que nos brinda la libreria 'react-redux', que se llama `Provider`. En nuestro Provider llamamos a nuestro store, y con este envolvemos a toda nuestra App, para tener acceso a nuestro store desde cualquier componente hijo.

```javascript
//root index.js

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
```
Ya tenemos nuestro STORE conectado con nuestra App!

### Conectamos nuestro componente con nuestro Store

Usamos las funciones `mapStateToProps` y `mapDispatchToProps` dentro de nuestros componentes. La primera nos permite traer nuestro state global como props a nuestro componente, y la segunda nos permite hacer el `dispatch` de nuestras actions al store. Y para terminar de conectar nuestro componente con el store global usamos una HoC ( High Order Component ) que importamos de la libreria 'react-redux' que se llama `connect`. En nuestro componente `Buscador.js` nos deberia quedar algo asi:

```javascript
//Buscador.js

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
```

Pasamos a explicar un poco que estamos haciendo. `mapStateToProps` recibe como parametro `state` y nos devuelvo un objecto con parte del state que queremos, en este caso usamos la key 'movies' (accedemos a ella en nuestro componente como this.props.movies) y su value es la parte del estado que queremos traer, `moviesLoaded` en este caso.
`mapDispatchToProps` recibe como parametro una funcion, la llamamos dispatch, y nos devuelve un objecto, con las acciones que queremos enviar a nuestro store. Los nombres son arbitrarios, son los que usaremos para acceder a estos en nuestro componentes via props. Cada funcion nos devuelve la funcion dispatch que recibe como parametro la action que queremos enviar al store, en nuestro caso son `addMovieFavorite` y `getMovies` que tenemos en nuestra carpeta `actions`. Los parametros que recibe cada function son los payloads que usamos en nuestra action.

### Dispatch una accion desde nuestro componente

Los siguiente que haremos en nuestro componente `Buscador.js` es agragar la accion `getMovies` pasandole el valor que guardamos en nuestro estado con el valor title en nuestra funcion `handleSubmit` para tener una referencia del valor ingresado en el input o usando el evento `onChange` en el input y guardando el valor en el state del componente.

### Obtener y mostrar nuestro cambio de State

Una vez que hacemos el dispatch, ya tenemos nuestro state en nuestro Store, en `mapStateToProps` ya traemos el state que updeteamos en nuestro form. Ahora tenemos un array de objetos con las peliculas que nos trajo nuestra request a la API. El siguiente paso seria mapear ese array y hacer un return con el Nombre de la pelicula y un boton el cual tendra un evento de `onClick`. Este evento sera `addMovieFavorite`, que tenemos en nuestra `mapDispatchToProps` para guardar peliculas como Favoritas. Ej:

<div style="text-align:center"><img src="src/img/show-movies.gif"/></div><br>

 En el caso de `addMovieFavorite` como parametro le pasamos un object con el titulo de la Pelicula y su ID, que mas adelante utilizaremos en el componente Favorites. Ej:

```javascript
//Recordamos que nuestro button se encuentra dentro del metodo map

<button onClick={() => this.props.addMovie({title: movie.Title, id: movie.imdbID})}>Fav</button>
```

Hasta ahora tenemos nuestro componente Home, en donde podemos buscar peliculas, guardarlas en nuestro state global, y mostrarlas. Las peliculas que nos trae la request la estamos guardando en `moviesLoaded` y las que seleccionamos como favoritas en `moviesFavourites`. El siguiente paso sera comenzar a hacer el enrutado para mostrar nuestras pelis Favoritas.

### En el componente Favorites

 Este sera un componente de clase, que llame a `mapStateToProps` y `mapDispatchToProps` como hicimos anteriormente. `mapStateToProps` nos traera simplemente `state.movies` y  `mapDispatchToProps` tendra un dispatch para eliminar peliculas de favoritos, que es el que creamos anteriormente llamado `removeMovieFavorite`. Ya tenemos lo que necesitamos para mostrar nuestras pelis favoritas y nuestro evento para eliminarlas. Como hicimos en `Buscador.js`, mapeamos nuestras peliculas, y hacemos un return con el nombre y un boton que tendra el evento para eliminarlas. Ej:

<div style="text-align:center"><img src="src/img/favs-movies.gif"/></div><br>

Por ahora nos deberia quedar algo asi,

### En el componente Movie

 En nuestros componentes `Favorites.js` y `Buscador.js` veremos que cuando mapeamos nuestro array con peliculas, cada pelicula tiene un `imdbID` usaremos ese ID como parametro, entonces en donde renderizamos el Titulo de la Pelicula, lo envolvemos en un Link y le pasamos como parametro ese ID que recibimos. Algo asi:

```javascript
//Buscador.js

<Link to={`/movie/${movie.imdbID}`}>
  {movie.Title}
</Link>
```

Ahora cuando hagamos click en alguna pelicula nos deberia llevar a la ruta `/movie/{movie-id}`. En nuestro componente Movie tenemos que usar ese parametro para usarlo en nuestra `getMovieDetail` function. Podemos acceder a este valor gracias a las `props` que nos da `react-router` de la siguientes maneras:

```javascript
// usando destructuring
const { match: { params: { id }}} = this.props;

// manera convencional
const movieId = this.props.match.params.id;
```
Llamamos a la funcion `getMovieDetail` y le pasamos nuestro ID todo dentro de nuestro `componentDidMount`. Una vez obtenido los datos tendriamos que tenerlos en `this.props.movieDetail` (obtenidos desde nuestro mapStateToProps y guardado en nuestro initalState). Y por ultimo mostramos detalles de la pelicula por ej: Titulo, Año, Rating, Plot, Premios, Genero, etc... Ej:

## Punto Extra:

Para mejorar la experiencia del usuario, cuando se presione el link para ver el detalle de una película, mostrar un texto o imagen que indique que se está "Cargando" la información, hasta que llegue el response del servidor y recién ahí, mostrar su detalle.

<div style="text-align:center"><img src="src/img/movie-detail.gif"/></div><br>

Con esto tendriamos una App integrado con React Redux!
