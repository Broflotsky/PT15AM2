# HW 09: React-Routing | Ejercicios

## **Duración estimada 🕒**

2 horas

<br />

---

## **INTRO**

Encontrarás en esta homework la Cruise App ya estructurada con sus componentes, lo que debes realizar, de acuerdo con lo visto en clase, es el enrutamiento de la aplicación.

<br />

---

## **CONSIGNA**

- Implementar las rutas correspondientes para renderizar los componentes de la aplicación.
- Realizar redirecciones a otros componentes.
- Mantener renderizado un componente en todas las rutas.

<br />

---

## **Pasos básicos para realizar la homework**

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

- Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

- Listo!! Ya puedes correr los test y levantar el proyecto con los comandos:

```bash
npm test
npm start
```

Si deseas correr por test, puedes utilizar:

```bash
npm run test:01
```

🔹 Para esta homework necesitarás emular peticiones a una api con el fin de consumir los datos que allí están, para ello, debes correr el servidor **db.json**, sin este paso no podrás visualizar el resultado esperado y tampoco pasarán los tests. A continuación, los pasos para correr el servidor:

- Abrir una segunda terminal.
- En la terminal, dirígete a la carpeta que estamos trabajando.
- Ejecuta el comando:

```bash
npm run server
```

🔹 Para visualizar la aplicación desde el navegador, debes abrir una tercera terminal y ejecutar el comando:

```bash
npm start
```

Ingresando a <http://localhost:3000> desde el navegador, podrás ver en tiempo real el resultado de nuestro trabajo.

<br />

---

## **ESTRUCTURA**

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

- Una carpeta llamada **_mocks_**
- Una carpeta llamada **img**
- Una carpeta llamada **public**
- Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)
- Una carpeta llamada **tests**
- Un archivo **db.json**
- Un archivo **package.json**
- Y el archivo `README.md` que ahora mismo estás leyendo. 🧐

Además:

🔹 Dentro de la carpeta `src` encontrarás el esqueleto del proyecto React, estructurado de la siguiente manera:

- Una carpeta llamada **assets**
- Una carpeta llamada `components`
- Un archivo llamado `App.js`
- Un archivo **index.css**
- Un archivo `index.js`

🔹 Para estos ejercicios, trabajaremos en la carpeta `components`, en el archivo `App.js` y en el archivo `index.js`. Dentro de la carpeta **components** encontrarás:

- Una carpeta llamada **Card**, la cual a su vez contiene:
  - El componente `Card.jsx`
  - La hoja de estilos Card.module.css
- Una carpeta llamada **CardDetail**, la cual a su vez contiene:
  - El componente `CardDetail.jsx`
  - La hoja de estilos CardDetail.module.css
- Una carpeta llamada **Cards**, la cual a su vez contiene:
  - El componente `Cards.jsx`
  - La hoja de estilos Cards.module.css
- Una carpeta llamada **Home**, la cual a su vez contiene:
  - El componente `Home.jsx`
- Una carpeta llamada **NavBar**, la cual a su vez contiene:
  - El componente `NavBar.jsx`
  - La hoja de estilos NavBar.module.css
- Una carpeta llamada **Promotions**, la cual a su vez contiene:
  - El componente `Promotions.jsx`
- Una carpeta llamada **Shipping**, la cual a su vez contiene:

  - El componente `Shipping.jsx`
  - La hoja de estilos Shipping.module.css

  <img src="./img/ramas.jpg" alt="" />

  <br />

---

## **👩‍💻 EJERCICIO 1**

### **BrowserRouter**

🔹 Abre el archivo `index.js`, dentro de él encontrarás:

- El import de:

  - **React**
  - **ReactDOM**
  - **index.css**
  - **App.js**

- También encontrarás el ReactDOM renderizando los elementos de react en el navegador.

🔹 Lo que hay que hacer:

1. Importa `BrowserRouter` desde **'react-router-dom'** y envuelve **App** en el componente **_BrowserRouter_**.

   <br />

---

## **👩‍💻 EJERCICIO 2**

### **Routing**

🔹 Ahora dirígete al componente App.js.

🔹 Lo que hay que hacer:

1. Importa `Routes` y `Route` desde **react-router-dom** y renderiza el componente **Routes**.
2. Renderiza un componente **Route** dentro del componente **_Routes_** con los atributos `path` y `element` para cada ruta que necesites crear:

   - Home --> path: **"/"** element: `<Home/>`
   - Shipping --> path: **"/shipping"** element: `<Shipping/>`
   - Promotions --> path: **"/promotions"** element: `<Promotions/>`
   - CardDetail --> path: **"/cruises/:id"** element: `<CardDetail/>`

3. Además necesitas que `NavBar` sea una ruta dinámica que aparezca en toda la aplicación, colocándola antes del componente Routes.

   <br />

---

## **👩‍💻 EJERCICIO 3**

### **Links**

🔹 Ahora crea links para navegar entre rutas.

🔹 Lo que hay que hacer:

1. En el componente **_Card_**:

- Importa `Link` desde **react-router-dom** y envuelve el código en el componente **Link** con el atributo to, en el que dirija a la ruta '\`/cruises/${id}`'.

2. En el componente **_CardDetail_**:

   - Importa `useParams` y `useNavigate` desde **react-router-dom**
   - Obtiene el `id` del objeto params (utilizando destructuring) para luego usarlo dinámicamente en la ruta. Ejemplo:
     ```jsx
     const { id } = useParams();
     ```
     > Hint: Recuerda que puedes usar llaves cuando deseas incluir código Javascript, en este caso, para usar dinámicamente el id.
   - Guarda en una constante llamada `navigate` el hook **useNavigate**. Ejemplo:
     ```jsx
     const navigate = useNavigate();
     ```
   - Crea una función llamada `backToHome` en donde ejecute **navigate** y redirija a la ruta `"/"`.
   - Al botón que contiene el texto "Volver" asígnale el atributo **onClick** en donde se ejecute la función creada **backToHome**.

3. En el componente **_NavBar_**:

   - Importa `NavLink` desde **react-router-dom**.
   - Renderiza el componente **NavLink** con el atributo `to` que redirija a la ruta `"/"` que envuelva la etiqueta imagen.
   - Renderiza el componente **NavLink** con el atributo `to` que redirija a la ruta `"/shipping"`, que envuelva la etiqueta span con el texto "Navieras".
   - Renderiza el componente **NavLink** con los siguientes atributos:

     - `to` que redirija a la ruta `"/promotions"`, que envuelva la etiqueta span "Promociones".

     - `className` esta propiedad debe tener adjunta una función. Esta función recibe un parámetro llamado `isActive` en forma de destructuring. En caso de que el parámetro sea **true** la clase de esta propiedad debe ser `.active` caso contrario, `.disable`.

     > Hint: isActive será true cuando el link dentro de `to` coincida con el que está actualmente en el navegador.

> Para esta instancia deben pasar todos los tests. ✅ 🏆

🔹 Resultado esperado:

<p align="center"><img src="./img/img.gif" height="300px"></p>

   <br />

---

## **🧠 Recuerda que...**

- Para conectar nuestra aplicación a la url del navegador debes renderizar Browser Router alrededor de tu app .
- Routes genera un árbol de rutas y es a partir de esto que podemos renderizar los componentes.
- Route representa una ruta en el árbol, siempre debe ir con sus atributos path y element.
- La diferencia entre Link y NavLink está que Link no tiene un estilo especial y NavLink resalta el enlace actual o activo utilizando la función "isActive".😃
- useParams devuelve un objeto con las propiedades y el valor de los segmentos dinámicos de la URL.
- useNavigate devuelve una función que permite la navegación programática en la aplicación. 😃

<br />

---

## **🔎 Recursos adicionales**

- Documentación [**React Router - useNavigate**](https://reactrouter.com/en/v6.3.0/api#usenavigate)
- Documentación [**React Router - useParams**](https://reactrouter.com/en/v6.3.0/api#usesearchparams)

<br />

---

Listo!! Aprendiste cómo funcionan las rutas en React!! ✨🚀

Dirígete a la carpeta 📂 [**"02 - Integration"**](../02%20-%20Integration/README.md) y continúa desarrollando la app de Rick & Morty 🤩

---
