![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

<table class="hide" width="100%" style='table-layout:fixed;'>
  <tr>
   <td>
    <a href="https://airtable.com/shrHsDa2eamWqLAre?prefill_clase=12-React-Redux">
   <img src="https://static.thenounproject.com/png/204643-200.png" width="100"/>
   <br>
   Hacé click acá para dejar tu feedback sobre esta clase.
    </a>
   </td>
              <td>
      <a href="https://quiz.soyhenry.com/evaluation/new/60746d39656c8d23c2e61101">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/HSQuiz.svg/768px-HSQuiz.svg.png" width="100" height="100"/>
        <br>
        Hacé click acá completar el quiz teórico de esta lecture.
      </a>
   </td>
  </tr>
</table>

# React Redux

<p align='center'>
    <img alt="logo" src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67'/>
</p>

```js
//Redux is a predictable state container for JavaScript apps.
```

Redux es una librería que nos va a ayudar a mantener el estado _global_ de nuestra aplicación.

> Podemos usar Redux fuera de React, y React sin redux también. Pero ambas funcionan muy bien juntas, por esto la comunidad las adoptó rápidamente para usarlas juntas.

Si bien, podemos crear _containers_ que mantengan el estado estado de sus _childrens_, lo que termina ocurriendo es que los Componentes _presentacionales_ terminan demasiado acoplados a los _containers_, bajando su _resusabilidad_. Otro tema, es que en estos _containers_ vamos a tener que escribir funciones que manejen el estado de varios Componentes, haciendo que este archivo se convierta en inmanejable de forma rápida. Justamente, `Redux` nos va a ayudar a resolver estos problemas con el paradigma que implementa.

## Los tres principios de Redux

> Vamos a ir introducciendo cierta terminología específica de Redux, pueden leer el [glosario completo aca](http://redux.js.org/docs/Glossary.html)

### Única fuente de verdad (Single source of truth)

> El **estado** de toda tu aplicación está guardado en un árbol en una sola **store**.

Esto hace que se fácil crear apps universale, ya que el _estado_ de tu servidor puede ser _serializado_ fácilmente a todos los clientes sin efuerzo extra. Además hace que sea más fácil _debuggear_ e _inspeccionar_ tu aplicación.

```javascript
console.log(store.getState());

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
```

### Los Estados son sólo lectura (State is read-only)

> La única forma de cambiar un estado es emitiendo una **acción**, que es un objeto que describe lo que ocurrió.

Esto asegura que ni la vista, ni ningún callback escriban directamente sobre el _estado_. En cambio, tienen que expresar una _intención_ de transformar el estado. Como todas los cambios están _centralizados_ y ocurren en un orden estricto, no vamos a tener que preocuparnos por qué cosas suceden primero (debido a la naturaleza _asincrónica_). Como las acciones son _objetos_, pueden ser logeados, serializados, guardados y pueden ser reproducidas en el futuro para _debuggear_ o _testear_ la aplicación.

```javascript
store.dispatch({
  type: "COMPLETE_TODO",
  index: 1,
});

store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED",
});
```

### Los cambios se hacen con funciones puras (Changes are made with pure functions)

> Para especificar cómo se transforma el _árbol de estado_ se escriben funciones llamadas **reducers**.

Las funciones _reducers_ son funciones puras, que toman el _estado anterior_ y un _acción_ y retornan el _nuevo estado_. Estas funciones deben retornar _nuevos objetos de estado_ y no _mutar el estado anterior_. Como las _reducers_ son sólo funciones, podemos manejar el orden en el que se ejecutan, pasar datos adicionales, o inclusive hacer _reducers_ reutilizables para tareas comunes.

```javascript
function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case "COMPLETE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

import { combineReducers, createStore } from "redux";
let reducer = combineReducers({ visibilityFilter, todos });
let store = createStore(reducer);
```

## Nuestra propia implementación de Redux

Para entender bien el concepto de _Redux_, vamos a crear nuestra propia mini-implementación del paradigma que utiliza. Luego vamos a usar la librería `redux`.

Para hacerlo, empecemos repasando las ideas principiales que tenemos que implementar:

- Toda la data mantenida por nuestra aplicación tiene que estar contenida en una única estructura de datos llamada el `state` de nuestra app. Esta estructura de datos debe estar guardada en el `store`.
- Nuestra app lee el **state** desde nuestra **store**.
- El **store** no puede ser manipulado directamente por el usuario.
- Los usuarios disparan **acciones** que describen qué sucedió.
- Un _nuevo estado_ es generado, resultado de combinar el _viejo estado_ y la _acción_ del usuario. Este proceso lo realiza una función llamada **reducer**.

![Diagrama Redux](/_src/assets/12-React-Redux/redux----redux-diagram.png)

### Reducers

Un _reducer_ toma un estado _viejo (actual)_ y una _acción_ y devuelve un _estado nuevo_. Un _reducer_ **debe ser una _función pura_**, es decir:

- No debe mutar directamente el estado.
- No debe usar datos que no hayan sido pasada por argumentos.

Los _reducers_ siempre deben tratar el _estado actual_ como **sólo lectura**. De hecho, el _reducer_ **no cambia el estado**, si no que **devuelve un estado nuevo**.
Para crear nuestro primer reducer, entonces, vamos a necesitar:

- Una **acción**, que nos define que hacer (opcionalmente con argumentos).
- El **estado**, que _guarda_ toda la información de nuestro _app_.
- El **reducer** _per se_ que recibe el _estado_ y la _acción_ y retorna el _nuevo estado_.

#### Creando un Reducer

Empezemos por el _reducer_ más simple posible, es el que devuelve el **estado actual**. Similar a la función [Identidad](https://es.wikipedia.org/wiki/Funci%C3%B3n_identidad).

```javascript
var reducer = function (state, action) {
  return state;
};
```

Para los siguientes ejemplos, consideremos que el **estado** es un entero y que empieza en 0, podríamos llamarlo `counter`.

> En el común de los casos, los estados van a ser _sumamente_ más complejos que sólo un entero!

Para incrementar o decrementar en uno nuestro estado, vamos a necesitar definir una **acción**, para que el usuario pueda indicar que tiene la _intención_ de cambiar el estado de nuestra app.

Una acción sólo necesita una propiedad `type`:

```javascript
// incrementar en uno el counter
var INCREMENTAR_COUNTER = {
  type: "INCREMENTAR_COUNTER",
};
// decrementar en uno el counter
var DECREMENTAR_COUNTER = {
  type: "DECREMENTAR_COUNTER",
};
```

Ahora que tenemos estas acciones las usemos en nuestros _reducers_:

```javascript
var reducer = function (state, action) {
  switch (action.type) {
    case "INCREMENTAR_COUNTER":
      return state + 1;
    case "DECREMENTAR_COUNTER":
      return state - 1;
    default:
      return state; // caso por defecto
  }
};
```

Listo! Ahora vamos a tener el _nuevo estado_ retornado según qué acciones hayamos pasado al reducer.

> Noten que dejamos el caso por **defecto** de tal modo que si no pasamos una acción _conocida_, el reducer vuelva el estado como estaba.

### Argumentos en las acciones

En el ejemplo anterior, la acción siempre incrementaba en uno. Pero a veces, para describir la acción es necesario contar una serie de parámetros, por ejemplo en el caso que querramos incrementar nuestro `counter`, pero en un valor mayor a uno. Primero vamos a definir una **acción** en la cual podamos incrementar `7` veces el `counter`:

```javascript
// incrementar en uno el counter
var INCREMENTAR_COUNTER = {
  type: "INCREMENTAR_COUNTER",
};
// decrementar en uno el counter
var DECREMENTAR_COUNTER = {
  type: "DECREMENTAR_COUNTER",
};
// incrementar el counter en n
var INCREMENTAR_7 = {
  type: "INCREMENTAR_N",
  payload: 7,
};
```

y la agregamos en nuestro **reducer**:

```javascript
var reducer = function (state, action) {
  switch (action.type) {
    case "INCREMENTAR_COUNTER":
      return state + 1;
    case "DECREMENTAR_COUNTER":
      return state - 1;
    case "INCREMENTAR_N":
      return state + action.payload;
    default:
      return state; // caso por defecto
  }
};
```

En el ejemplo vemos que el type de accion es `INCREMENTAR_N`, pero sólo hemos creado la acción de ese tipo, pero con el `payload` en un número fijo, para generar varias acciones de este tipo vamos a hacer un _generador de acciones_, que no es otra cosa que una `factory`:

```javascript
function increment(n) {
  return {
    type: "INCREMENTAR_N",
    payload: n,
  };
}
```

Ahora podríamos invocar a nuestro reducer de la siguiente manera:

```javascript
var state = 0;
reducer(state, increment(7)); // Incrementa siete // 7
reducer(state, INCREMENTAR_COUNTER); // incrementa de a uno. // 1
```

Si vemos el ejemplo, notamos que a pesar de pasar por los _reducers_, nuestro estado sigue siendo `0` siempre! Por lo tanto nos vemos en la necesidad de implementar un `Store`, que es la forma de guardar el estado en la filosofía `redux`:

```javascript
 class Store {
   constructor(estadoInicial, reducer) {
     this._state = estadoInicial;
     this.reducer = reducer;
   }

   getState(): {
     return this._state;
   }

   dispatch(action) {
     this._state = this.reducer(this._state, action);
   }
 }
```

> En Redux, generalmente, tenemos un Store y un top level reducer.

Veamos que contiene nuestra **Store**:

- Cuando la inicializamos vamos a pasarle un _Estado Inicial_ y un _reducer_.
- `getState()` retorna el _Estado Actual_.
- Por último tenemos la función `dispatch` que recibe una acción e invoca al `reducer` con el estado actual y la acción, y actualiza el estado con lo que retorna el `reducer` (el nuevo estado).

Noten que `dispatch` no retorna nada, simplemente _actualiza_ el estado de la aplicación. Esto es un concepto importante de `redux`: cuando _despachamos_ una acción, lo hacemos y nos olvidamos. **Despachar una acción no es una manipulación directa del estado, y no devuelve el nuevo estado**.

### Usando el Store

Veamos como podemos usar nuestro `Store`:

```javascript
var store = new Store(0, reducer);
console.log(store.getState()); //0
store.dispatch(INCREMENTAR_7);
console.log(store.getState()); //7
store.dispatch(INCREMENTAR_COUNTER);
console.log(store.getState()); //8
store.dispatch(DECREMENTAR);
console.log(store.getState()); //7
```

Empezamos por crear una `Store` nueva y la guardamos, en este caso, en una variable también llamada `store`. Luego usaremos el objeto que guardamos para consultar el estado en el que se encuentra nuestra aplicación.

### Pedirle al Store que nos notifique los cambios

Si vemos el ejemplo anterior, siempre que queremos ver el estado del `Store` tenemos que pedirle explicitamente. Sería interesante que nos enteremos que una acción fue despachada para que podamos responder si es necesario. Para esto vamos a implementar el [patrón Observador](<https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)>), es decir que vamos a _suscribir_ un callback para que escuche por cambios.

Esto es lo que queremos hacer:

- Registrar una función _listener_ usando `suscribe`.
- Cuando `dispatch` es invocada, iteraremos sobre todos los _listeners_ que tenga subscriptos y los invocaremos, notificandolos que el Estado ha cambiado.

Para esto vamos a agregar la funcionalidad de `suscribe` y `unsuscribe` a nuestro `Store`:

```javascript
 class Store {
   constructor(estadoInicial, reducer) {
     this._state = estadoInicial;
     this.reducer = reducer;
     this._listeners = []; // Empezamos con un arreglo vacío.
   }

   getState(): {
     return this._state;
   }

   dispatch(action) {
     this._state = this.reducer(this._state, action);
   }

   suscribe(listener): {
      _listeners.push(listener);
      return () => { // retorna una función unsuscribe
         this._listeners = this._listeners.filter(function(l){l !== listener});
      };
   }
 }
```

La función `suscribe` recibe una función como listener, y retorna una función que al ser ejecutada, va a `filtrar` el listener con el que fue generada de la lista de listeners.

Ahora, para notificar a los listeners suscriptos, vamos a invocarlos cuando se ejecute el método `dispatch`:

```javascript
dispatch(action) {
     this._state = this.reducer(this._state, action);
     this._listeners.forEach(function(listener){
        listener();
      })
   }
```

Ahora que nos podemos suscribir para obtener novedades, probemos lo siguiente:

```javascript
var store = new Store(0, reducer);
var unsuscribe = store.suscribe(function () {
  console.log(store.getState());
});

store.dispatch(INCREMENTAR_7); // --> 7
store.dispatch(INCREMENTAR_COUNTER); // --> 8
store.dispatch(DECREMENTAR); // --> 7

unsuscribe(); // dejamos de recibir notificaciones;

store.dispatch(DECREMENTAR);
console.log(store.getState()); // 6
```

Si entendiste lo anterior, entonces ya tienes una idea de las bases sobre las que siente `redux`. La librería implementa otros patrones más complejos, y resuelve problemas comunes que pueden llegar a aparecer.

## Instalando Redux

Redux viene en un paquete con el mismo nombre, asi que para instalarlo podemos hacer `npm install redux react-redux`. Con esto instalamos la librería de redux en sí, y los `helpers` de `react-redux`, donde están las funciones `bindActionsCreator`, `connect`, etc..

> Redux se instala así, asumiendo que ya tenemos un proyecto de React funcionando, con su webpack configurado.

## Workflow de Redux

Lo primero que tenemos que incorporar para trabajar con Redux, es el workflow que nos propone. Básicamente, nuestra aplicación debería funcionar siempre siguiente este ciclo de vida, en el medio van a aparecer elementos de la API de redux que vamos a ir explicando.

> Se podría considerar a `redux` cómo una implementación del patrón `flux` para react, también se podría considerar cómo un patrón por si mismo. ( De hecho, [ni sus autores se ponen de acuerdo en eso](http://redux.js.org/docs/introduction/PriorArt.html#flux) ) Lo cierto es que está influenciado por el patrón `flux`, usando por facebook.

![WorkFlow](/_src/assets/12-React-Redux/ui_workflow.png)

1. El `árbol de Estado` define la UI y las acciones posibles a través de `props`.
2. Acciones realizadas por los usuarios son enviadas a un `action creator` que las normaliza.
3. Estas acciones normalizadas son pasadas a un `reducer`, que es donde se ejecuta el código que contiene la lógica de la acción.
4. El reducer crea un nuevo Estado y lo devuelve (`dispatches it`) al `Store`.
5. La UI es actualizada acorde al nuevo estado.

### Acciones

Las **acciones** representan una _inteción_ de cambiar el estado de nuestra `store`. Las _acciones_ son las **únicas** fuente de información que llega a nuestras `stores`.

Las **acciones** son **objetos JavaScript planos**, deben tener una propiedad llamada `type`, que indica o describa la acción que se realiza. Por convención los `type`s debe estar escritos como `string constants`, es decir, todo en mayúsuclas y con SNAKE_CASE. Además del type, las acciones van a contener cualquier otra propiedad que necesitemos para su funcionamiento. Se recomienda que las acciones tengan la menor cantidad de propiedades posibles.

Podemos ver algunas recomendaciones de cómo diseñar nuestras acciones en [esta guía](https://github.com/acdlite/flux-standard-action).

> Cuando tu app empieze a crecer, es buena idea separar las acciones en distintos módulos (archivos).

```javascript
// incrementas likes
const INCREMENT_LIKES = {
  type: "INCREMENT_LIKES",
  index: 4,
};

// agregar comentarios
const ADD_COMMENT = {
  type: "ADD_COMMENT",
  postId: "X4Yb4",
  author: "Toni",
  comment: "Esto es una acción en particular.",
};
// remover comentarios
const REMOVE_COMMENT = {
  type: "REMOVE_COMMENT",
  postId: "X4Yb5",
  index: 5,
};
```

### Action Creators

Los `actions creators` son funciones que **crean** acciones, o sea que _retornan_ un objeto que representa una acción. Es fácil confundir los términos _action_ y _action creator_ así que hay que usarlos con cuidado.

```javascript
// incrementas likes
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index,
  };
}
// agregar comentarios
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment,
  };
}
// remover comentarios
export function removeComment(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index,
  };
}
```

### Dispatch

Las _acciones_ tienen que ser enviadas al _Store_ para que surgan efecto. La función [`dispatch`](http://redux.js.org/docs/api/Store.html#dispatch) base es un método de `store`, esta manda una acción de forma sincrónica a los reductores del store, junto con el estado previo retornado por el store, para calcular el nuevo estado. Espera que las acciones que les pasemos sean objetos planos, listas para ser consumidas por los reducers.

También se puede envolver a los dispatchers en una serie de [Middlewares](http://redux.js.org/docs/Glossary.html#middleware), esto permite que los dispatchers puedan manejar _acciones asincrónicas_, además de poder transformar, demorar, ignorar o interpretar acciones antes de pasarla al siguiente Middleware.

> Cuando usamos redux con react, las funciones de dispatchers vienen bindeadas al componente <Provider>

### Reducers

Las _acciones_ describen que algo sucedió en nuestra app, pero no especifican _cómo_ esta accion impacta en el estado actual. Saber eso es el trabajo de los **reducers**.

Un _reducer_ es una función que recibe el estado previo de un Store y un acción y retorna el nuevo estado. Justamente se llama reducer, porque toma al estado cómo una _acumulación_ de acciones.
Los reducers tienen que ser siempre funciones **puras**, estas son cosas que **nunca** deberías hacer en un reducer:

- Mutar sus argumentos.
- Realizar cosas que tengan efectos secundarios, como llamadas a APIs, o routeo.
- Llamar a funciones no puras adentro, como `Math.random()` o `Date.now()`

> **Given the same arguments, a reducer should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.**

```javascript
function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("increment Likes");
      const i = action.index;
      return [
        ...state.slice(0, i), // antes del que estamos actualizando
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), // despues del actualizado
      ];
    default:
      return state;
  }
}

export default posts;
```

Cuando la app es grande, podemos poner cada reducer en archivos separados, agrupandolos según los datos que manejen, haciendolos independientes entre ellos. Para hacer esto, redux nos ofrece la funcionalidad de [`combineReducers()`](http://redux.js.org/docs/api/combineReducers.html), lo que hace es convertir un objeto que tiene varios reducers en una sola función reducers que los contiene, y que puede ser pasada a `createStore`.

```javascript
// Redux sólo puede tener un reducer.
// por eso vamosa  tener el Root Reducer
// donde vamos a incorporar los demas

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts.js";
import comments from "./comments.js";

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer,
});

export default rootReducer;
```

### Store

La **Store** tiene la siguientes responsabilidades:

- Mantiene el estado de la aplicación.
- Permite el acceso al estado a través de `getState()`.
- Permite actualizar el estado a través de `dispatch(action)`.
- Registra _listeners_ con `subscribe(listener)`.
- Maneja la desuscripción de _listeners_.

Hay que notar que vamos a tener exactamente _una_ Store por cada applicación que hagamos usando Redux. Para crear una Store, vamos a usar la función `createStore` que recibe un reducer como argumento, y opcionalmente el _estado inicial_ de la app.

```javascript
import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// Import root reducer
import rootReducer from "./reducers/index.js";

import comments from "./data/comments.js";
import posts from "./data/posts.js";

const defaultState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defaultState);
```

## Usando Redux con React

Para usar redux con react, vamos a usar un paquete llamado [`react-redux`](https://github.com/reactjs/react-redux) que nos ofrece los `bindings` de redux con react. Para instalarlo hacemos:

```bash
npm install --save react-redux
```

### Componentes

Los bindings de `react-redux` están realizados pensandos en el patrón de **separar los Componentes Presentacionales de los Containers**.

|                        | **Presentacionales**                    | **Containers**                                             |
| ---------------------- | :-------------------------------------- | :--------------------------------------------------------- |
| **Próposito**          | Cómo se ven las cosas (markup, estilos) | Cómo funcionan las cosas (traer datos, actualizar estados) |
| **Sabe de Redux**      | NO                                      | SI                                                         |
| **Para leer datos**    | Lee de props                            | Se suscribe a los estados de Redux                         |
| **Para cambiar datos** | Invoca callbacks de sus props           | Envía acciones a Redux                                     |
| **Son escritos**       | A mano                                  | Generados por React Redux                                  |

> Técnicamente podríamos codear los Containers por nosotros mismos usando `subscribe`, pero Redux nos desaconseja de hacer esto, ya que nos proveen de la función `connect`, que nos permite generarlos, y estos Componentes generados están optimizados en términos de performance.

Para generar un Componente que tenga todos los bindings de redux con react, primero vamos a tener que definir las siguientes funciones:

- **mapStateToProps**: Recibe el estado de la apliación y lo mapea a props de react.
- **mapDispatchToProps**: Recibe el método `dispatch` y retorna callbacks props que vamos a poder pasar a los Componentes presentacionales.

Finalmente, usando `connect` de `react-redux` y pasandole estas dos funciones obtenemos una función lista para darle los binding a un Componente React. Finalmente elegimos que Componente queremos que tenga los bindings y luego lo exportamos. Por ejemplo, vamos a darle los binding al Componente `Main` y lo vamos a exportar como `App`:

```jsx
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionsCreators from "../actions/actionCreators.js";

import Main from "./Main.js";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
```

## Provider

Todos los Componentes Containers deben tener acceso al `Store` para que puedan suscribirse a ella. Una opción seria pasar el store como un prop a cada componente Container, pero esto se volvería tedioso muy rápidamente, y un posible punto de error. Lo que nos recomienda `redux` es usar un Componente especial de `react-redux` llamado `<Provider>` que [mágicamente](https://facebook.github.io/react/docs/context.html) hace que el Store esté disponible para todos los Container de nuestra app, sin pasarla explícitamente.

```jsx
...
import { Provider } from 'react-redux'; //Bindings from redux and React
import store, { history } from './store.js';

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path="view/:postId" component={Single}/>
      </Route>
    </Router>
  </Provider>
)
...
```

Ahora vamos a poder acceder a nuestro `store` en cada Componente a través de sus props.

## Homework

Completa la tarea descrita en el archivo [README](./homework/README.md)
