# Redux BLOG APP

En este ejercicio vamos a crear una APP que utilice la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Vamos a crear nuestra app utilizando __REACT__ y __REDUX__.

Con tu App podremos:

* Listar los usuarios del Blog.
* Poder ver todos los post de un usuario en particular.
* Poder ver los comentarios de cada post.


### Comenzamos

Para poder comenzar tenemos que instalar las dependencias que utilizaremos. Tendran en el `package.json` ya las dependencias.Dentro de la carpeta EjerciciosExtras/homework, hacemos:

```javascript
npm install
```
Dentro de nuestra carpeta `components` tendremos subcarpetas con nuestros nuestro archivo.js y .css para tener mas acomodado nuestro codigo.
En la carpeta `components` tenemos 4 subcarpetas: `User`. `UserPosts`, `CommentsPost`, `NavBar` y `Buscador`. Y en cada una crearemos sus respectivos archivos .js y .css.
`NavBar.js` sera nuestro Header que nos permitira navegar a nuestra ruta principal(Debe verse en todas las páginas)
`Buscador.js` sera en donde buscaremos los posts (llamando a la API) y las mostraremos en forma de lista, pudiendo filtrarlos buscando en su título, según parámetro de búsqueda ingresado.
En `User.js` mostraremos la lista de usuarios que generan post en nuestro blog.(Debemos renderizarla en nuestra home page)
En `UserPosts.js` crearemos un componente en donde mostraremos los posts creados por un usuario en particular. Accedemos a este componente haciendo click en el link post, desde el listado de usuarios.
En `CommentsPost.js` crearemos un componente en donde mostraremos los comentarios de cada post. Este componente se deberá renderizar en el componente `UserPosts.js`.

### Creamos nuestras Actions

En nuestro archivo `index.js` en nuestra carpeta actions. Por ahora vamos a crear 4 actions. Una para hacer la request a la API y traer todos los usuarios `getAllUsers`,otra para traer los post de un usuario específico `getAllUserPosts`, otra para ver los comentarios de un post en particular `getAllCommentsPost` y finalmente una acción para ver todos los post del blog `getAllPosts` .

> Abajo tienes un par de ejemplos, para las dos que faltan tienes que investigar y hacerlo por tu propia cuenta. La api que usamos es `https://jsonplaceholder.typicode.com/`

> Para obtener algun post a partir de su ID de un usuario en particular pueden usar el endpoint: https://jsonplaceholder.typicode.com/posts?userId=${id}

```javascript
export function getAllUsers() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => dispatch({ type: GET_ALL_USERS, payload: json }))
  };
}

export function getAllUserPosts(id) {
  return function(dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((response) => response.json())
  .then(json => dispatch({ type: GET_ALL_USERS_POST, payload: json }))
  };
}

```
Cada acción devuelve un objecto, la primera key de este objeto es el `type`, su valor lo ponemos nosotros, por convencion se usan mayusculas y guion bajo `_` para separar. Como segundo argumento recibe un `payload`, que son datos que puede llevar que usaremos en nuestro reducer para actualizar el estado. En `getAllUsers` el payload que pasaremos cuando hagamos un dispatch de esa action sera el listado de usuarios del Blog.En `getAllUserPosts`,nuestro payload seran los posts del usuario cuya id recibimos como parámetro. En `getAllCommentsPost`, nuestro payload seran los comentarios del post que recibamos de nuestra request, el cual buscamos por su id (recibido como parámetro). En `getAllPosts`, el payload sera el listado de todos los posts que existen en nuestro blog.

### Creamos nuestro Reducer

Vamos al archivo `index.js` en nuestra carpeta reducers. Como vimos, un reducer es simplemente una funcion que recibe 2 parametros: state y action. Y depende la `action` que reciba nos devuelve el estado actualizado. Al comienzo del archivo creamos nuestro estado inicial. Lo llamamos `initialState`:

```javascript
const initialState = {
  users: [],
  posts: [],
  userPosts: [],
  commentsPost: [],
};
```

Tienes que crear los 4 reducers para las 4 acciones que creamos anteriormente que son:`getAllUsers`, `getAllUserPosts`, `getAllCommentsPost`,`getAllPosts`

> Aca abajo le dejamos dos ejemplos, vas a tener que crear los dos restantes

```javascript
function rootReducer(state = initialState, action) {
   switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
      case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
      default:
      return state;
   }
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


### Conectemos el componente Users al store

Este sera un componente de clase, que llame a `mapStateToProps` y `mapDispatchToProps`. 
La primera nos permite traer nuestro state global como props a nuestro componente, y la segunda nos permite hacer el `dispatch` de nuestras actions al store. Y para terminar de conectar nuestro componente con el store global usamos una HoC ( High Order Component ) que importamos de la libreria 'react-redux' que se llama `connect`. 
`mapStateToProps` nos traera simplemente `state.users` y  `mapDispatchToProps` tendra un dispatch para traer todos los usuarios del state global, llamando a la acción `getAllUsers`. Ya tenemos lo que necesitamos para mostrar nuestros usuarios del Blog y nuestro evento para llamar al listado de todos los posts de dicho usuario. Como la información está en un array, mapeamos nuestros usuarios( Recuerda colocar cada dato solicitado en un `<td>`, ya que lo mostraremos en una tabla), y hacemos un return con el nombre, el nombre de usuario y un boton que tendra un link para ver todos los posts de cada usuario. Ej:

```javascript
 <tr>
    <td>
     ...
      <td>
        <Link to={`/users/${user.id}/posts`} className="button">Posts</Link>
      </td>
    </td>
 </tr>
```
Ahora cuando hagamos click en el link posts nos deberia llevar a la ruta `/users/{user.id}/posts`. En nuestro componente UserPosts tenemos que capturar ese parametro para usarlo en nuestra `getAllUserPosts` function. 


### En el componente UserPosts

Como mencionamos anteriormente, tenemos que obtener el parametro `id` para usarlo en nuestra `getAllUserPosts` function. Podemos acceder a este valor gracias a las `props` que nos da `react-router` de la siguientes maneras:

```javascript
// usando destructuring
const { match: { params: { userid }}} = this.props;

// manera convencional
const userid = this.props.match.params.id;
```
Llamamos a la funcion `getAllUserPosts` y le pasamos nuestro ID todo dentro de nuestro `componentDidMount`. Una vez obtenido los datos tendríamos que tenerlos en `this.props.posts` (obtenidos desde nuestro mapStateToProps y guardado en nuestro initalState). Y por ultimo mostramos detalles del post por ej: Id, Título, body.

Por cada post del usuario, agregaremos el siguiente componente <ComentsPost id={post.id} /> al cual le pasaremos el id del post, para añadir los comentarios del mismo. A continuación, explicaremos cómo crear dicho componente.

### En el componente CommentsPost

En nuestro componente CommentsPost tenemos que obtener el parametro id del post, para usarlo en nuestra `getAllCommentsPost` function. Podemos acceder a este valor gracias a las `props` que nos da `react-router` de la misma forma que lo obtuvimos en el componente `UserPosts`

Llamamos a la funcion `getAllCommentsPost` y le pasamos nuestro ID todo dentro de nuestro `componentDidMount`. Una vez obtenido los datos tendriamos que tenerlos en `this.props.comments` (obtenidos desde nuestro mapStateToProps y guardado en nuestro initalState). Y por ultimo mostramos detalles del post por ej: Id, name y body.

### En el componente NavBar

En nuestro componente debemos renderizar 3 <NavLink /> con los siguientes enlaces: 
1) En el logo de Henry, un enlace a `/home`
2) Un link con el texto `Home`, con un enlace a `/`
3) Un link con el texto `Posts`, con un enlace a `/filter/posts`


### En el componente Buscador

Usamos las funciones `mapStateToProps` y `mapDispatchToProps` dentro de nuestros componentes. 
En nuestro componente `Buscador.js` nos deberia quedar algo asi:

```javascript
//Buscador.js

function mapDispatchToProps(dispatch) {
  return {
      getAllPosts: () => dispatch(getAllPosts())
  };
}

function mapStateToProps(state) {
  return {
      posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador)
```

Pasamos a explicar un poco que estamos haciendo. `mapStateToProps` recibe como parametro `state` y nos devuelve el state que queremos, en este caso usamos la key 'posts' (accedemos a ella en nuestro componente como this.props.posts) y su value es la parte del estado que queremos traer, `posts` en este caso. 
`mapDispatchToProps` recibe como parametro una funcion, la llamamos dispatch, y nos devuelve un arreglo, con las acciones que queremos enviar a nuestro store. Los nombres son arbitrarios, son los que usaremos para acceder a estos en nuestro componentes via props. Cada funcion nos devuelve la funcion dispatch que recibe como parametro la action que queremos enviar al store, en nuestro caso son `getAllPosts` que tenemos en nuestra carpeta `actions`. Los parametros que recibe cada function son los payloads que usamos en nuestra action.

### Dispatch una accion desde nuestro componente

Los siguiente que haremos en nuestro componente `Buscador.js` es agragar la accion `getAllPosts`, que en este caso no recibe ningún parámetro.
Para este componente, crearemos dos estados locales. Uno de ellos, `filtrados`, el cual usaremos para mapear todos los post y al que asignaremos el valor del state global `posts`. El otro, `postsSearch` lo usaremos para ir registrado cada entrada ingresada en el input que nos servirá para filtrar el listado de post a mostrar.

### Obtener y mostrar nuestro cambio de State

Una vez que hacemos el dispatch, ya tenemos nuestro state en nuestro Store, en `mapStateToProps` ya traemos el state que actualizamos. Ahora tenemos un array de posts que nos trajo nuestra request a la API. El siguiente paso seria mapear ese array y hacer un return con el id del post, el título, el body con el contenido del mismo.
Sobre el listado de post, tendremos un form con un input, un botón el cual tendrá asociado un evento handleChange, que se encargará de almacenar en un estado local, el cambio de estado. 
El formulario, tendrá asociado un evento `submit`. Este evento sera manejado por `handleSubmit`, que filtrará desde el estado local `filter`, cuyo valor inicial es el mismo que el state global `posts` traido en `mapDispatchToProps` para guardar los posts cuyo título coincida con lo ingresado en el input. Ej:

```javascript
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
     filtrados: this.props.posts.filter(p => p.title.includes(this.state.postsSearch))
    })
    this.setState({
      postsSearch: ""
    })
  }
```

Para ver todos los post, eliminamos los filtros, al presionar el botón VER TODOS, se ejecuta la función `viewAllPost` el cual asigna el valor del estado global al state `filtrados`. Ej:

```javascript
//El siguiente button llama a la función viewAll para ver todos los posts

<button className="btn2" onClick={() => this.viewAllPost()}>VER TODOS</button>
```


## Punto Extra:

Para mejorar la experiencia del usuario, cuando se presione el link para ver el listado de posts de un usuario, mostrar un texto o imagen que indique que se está "Cargando" la información, hasta que llegue el response del servidor y recién ahí, mostrar su detalle.

Con esto tendriamos una App integrado con React Redux!
