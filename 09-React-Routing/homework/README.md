## Henry Weather


### Ejercitación

En este `homework` vamos a utilizar `react-router` para poder tener más de una ruta en nuestra **SPA**.

Vamos a utilizar el código que hicimos en el `homework` anterior. Si no lo terminaste, no te preocupes, en `src` dejamos todo el código para tener el proyecto funcionando.

Cuando terminemos este `homework`, vamos a tener tres rutas que podremos navegar:
 - **"/"**: El home, acá vamos a ver lo mismo que veiamos.
 - **"/ciudad/{ciudadId}/"**: en esta ruta, vamos a tener información más detallada sobre el clima de una ciudad en particular, notese que usamos el ID de una ciudad para identificarla y no el nombre.
 - **"/about"**: Tu oportunidad de poner tu nombre y explicar un poco de que va la `weatherApp`.


#### Comenzamos el Enrutado de nuestra aplicacion.

Vamos a Comenzar creando los componentes que nos faltan en nuestra carpeta componentes. Creamos `About.jsx` y `Ciudad.jsx` con sus respectivos archivos `.css` para el estilado dentro de la carpeta `components`.

#### Rutas Dinámicas

Cómo sabemos, `react-router` nos da la posibilidad de crear rutas dinámicas, y podemos decidir qué Componentes queremos que aparezcan en qué rutas.
Para nuestro ejercicio nosotros queremos ver lo siguiente:

- `<Nav />` tiene que aparecer en todas las rutas.
- `<Cards />` debe aparecer sólo en la ruta `/`.
- `<About />` debe aparecer sólo la ruta `/about`.
- `<Cuidad />` debe aparecer sólo en la ruta `/ciudad/{ciudadId}`

#### Importamos React-Router

Vamos a tener que instalar `react-router-dom`. Para eso hacemos:

```shell
npm install --save react-router-dom
```
Cómo sabemos, lo primero que necesitamos es elegir un Wrapper.

Para ello debemos importar `BrowserRouter` del paquete recién agregado `react-router-dom`:

```js
// index.js
...
import { BrowserRouter } from 'react-router-dom';
...
```

Luego vamos a usar `<BrowserRouter/> `, por lo tanto, debemos envolver toda nuestra applicación con este Componente:

```js
// index.js

...

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```
#### Modificando el NavBar

Ahora que ya hemos preparado nuestra App para usar router, vamos a agregar los links necesarios en nuestro `<Nav />`. Para ello notar que es necesario primero importar `Link` desde `react-router-dom`. (Recordar de importar el componente About para poder utilizarlo)

```js
//Nav.js
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};
```

#### <Route />

Vamos a agregar los Componentes necesarios para poder mostrar `<About />` cuando naveguemos a `/about`. Ahora vamos a tener que hacer uso del componente `Route`.

Si vemos nuestra app, vamos a notar que ahora siempre se está renderizando el componente `<Nav />` y `<Cards />`.

```js
// App.js
...
return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      <hr />
    </div>
  );
```

Esté lugar sería la raíz del árbol de Componentes, por lo tanto, acá tenemos que agregar nuestras Rutas. En primer lugar debemos importar Route de `react-router-dom` para luego poder utilizarlo:

```js
// App.js
...
<Route
    path='/'
    render={() => <Nav onSearch={onSearch} />}
/>
<Route
    path='/about'
    component={About}
/>
...
```

> ¿Por qué usamos la prop `render` para invocar al Componente? Necesitamos hacer esto porque tenemos que pasar props a `<Nav />`. Cuando invocamos a `<About />` (que no lleva props) no ocurre lo mismo. Si quieren entender más del proqué pueden leer [este post](https://tylermcginnis.com/react-router-pass-props-to-components/).

Ahora vos tenes que cambiar el código para envolver `Cards` con un Componente `<Route />`. Fijate que Cards recibe props!


#### Links a cada Ciudad

Bien, si llegaste hasta acá, ya tenemos una SPA con dos links, el home y about, funcionales!

Ahora tenemos que pensar cómo agregar una ruta nueva para cada ciudad:

```
/ciudad/{ciudadId}
```

Vamos a necesitar dos cosas, la primera es tener un link en cada `<Card />` que nos lleve a la url de su cuidad.

Vamos a poner ese Link en el título de cada Card (Recuerden de importar Link desde `react-router-dom`):

```js
// Card.js
...
<Link to={`/ciudad/${id}`} >
  <h5 className="card-title">{name}</h5>
</Link>
...
```

Bien, ahora necesitamos una prop más! necesitamos el `id` de cada ciudad.
Ahora tenes que pasarle ese prop al Componente Card. El Compontente que invoca a `Card` es `<Cards />`. Agrega una nueva prop y pasale el id de cada ciudad.


#### Ciudad

Bien, ya tenemos la ruta, ahora necesitamos un componente nuevo donde mostrar la info más detallada de la ciudad.

Para eso vamos a usar el Componente `Ciudad`:

```js
import React from "react";

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}
```

Bien, ahora si nos fijamos cuando entren a esa ruta, vamos a tener una url como: `http://localhost:3000/ciudad/3435910`

Vamos a tener que extraer la última porción de la url como un parámetro. Por suerte, la gente que desarrolló React Router ya pensó en eso.

Ellos nos pasan un objeto llamado `match` en Route. Usando Match podemos obtener los parametros que haya definido en la URL.
En este caso: `path='/ciudad/:ciudadId'`, como agregamos los dos puntos en `ciudadId`, react route nos lo va a parsear por nosotros y nos dejará ese valor en (Recordar importar el componente Ciudad para poder utilizarlo):

```
match.params.ciudadId
```

```js
<Route
    exact
    path='/ciudad/:ciudadId'
    render={({match}) => <Ciudad
          city={...}
        />}
  />
```

Por último, tenemos que pasarle los datos de la ciudad (que ya tenemos) al componente Ciudad. ¿Cómo podemos hacer eso?

Ya tenemos una lista de ciudad, por lo tanto, podemos usar el ciudadId del parámetro para filtrar la ciudad que queremos.

```js
cities.filter(c => c.id === parseInt(match.params.ciudadId))
```

El filter nos devuelve un arreglo, que puede tener uno o cero elementos. Por lo tanto, van a tener que modificar `Ciudad.jsx` controlar esto. Si hay un elemento, voy a ponerlo en `ciudad`. Y si cero, debería mostrar una leyenda que diga: "Esta ciudad no se encuentra en la lista".

*Pueden utilizar la función onFilter que se encuentra ya definida en el archivo App.js*

```js
<Route
  exact path='/ciudad/:ciudadId'
  render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
/>
```
