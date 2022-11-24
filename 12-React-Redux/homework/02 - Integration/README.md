## HW 12: React-Redux | Integración

## **Duración estimada 🕒**

x minutos

<br />

---

## **Rick & Morty App**

## **INTRO**

En la integración de hoy crearemos un espacio en el que podremos guardar a nuestros personajes favoritos. ¡Podremos agregarlos y eliminarlos!

Para esto:

-  ❤️ Fav button: nuestras Cards tendrán un botón para agregar/eliminar de favoritos.
-  👀 Vista nueva: crearemos una nueva vista en la que se muestre específicamente todos nuestros personajes favoritos.

<br />

---

### **COMENCEMOS**

Para comenzar, en tu terminal dirígete a la carpeta raíz de tu proyecto. Allí tendrás que instalar las siguientes dependencias:

```bash
npm i redux react-redux redux-thunk
```

Una vez instaladas, a la altura de la carpeta "_components_" (es decir, que sea una carpeta hermana), crea una nueva carpeta llamada "**redux**". Dentro de ella crea los archivos `actions.js`, `store.js` y `reducer.js`.

Dentro del archivo `store.js`, haz la configuración del store. Una vez configurado, deberás importarlo en tu archivo `index.js` junto con el Provider, y configurarlo en el wraper finalmente.

> **NOTA:** puedes guiarte por cómo lo tienes hecho en la homework anterior. Ten en cuenta que el reducer lo crearás en el siguiente paso.

<br />

---

## **👩‍💻 EJERCICIO 1**

### **REDUCER**

Dirígete al archivo en el que se encuentra tu **reducer**. Allí deberás:

1. Crear un _**initialState**_ con una propiedad llamada "**myFavorites**". Esta propiedad será un array vacío.

2. Luego deberás crear tu reducer. Recuerda que este recibe dos parámetros, y dentro de él hay un switch.

> **NOTA:** ten en cuenta el modo en el que lo exportas, y cómo lo importas dentro de tu store.

3. Dentro del switch de tu reducer, crea un nuevo caso en el que podrás agregar el personaje que recibes por payload a tu estado "_myFavorites_".

4. Crea un nuevo caso en el elimines el personaje que recibes por payload de tu estado inicial. Deberás filtrar el personaje a partir de su **ID**.

5. No te olvides de tu caso _**default**_.

<br />

---

## **👩‍💻 EJERCICIO 2**

### **ACTIONS**

Crea dos _actions-creators_.

-  Una que sea para agregar personajes a tu lista de favoritos. Recibe por parámetro el personaje.

-  Otro que sea para eliminar un personaje de la lista de favoritos. Recibe por parámetro el id del personaje.

> **NOTA:** no olvides que el nombre que asignes en la propiedad "TYPE" de tu acción, debe coincidir exactamente con el nombre de los casos que hayas asignado en tu reducer.

<br />

---

## **👩‍💻 EJERCICIO 3**

### **FAV BUTTON**

Ahora crearemos un botón para agregar y eliminar de favoritos! Para esto:

1. Dirígete al componente `Card`. Aquí deberás crear una función **mapDispatchToProps** que contenga dos funciones: Una para agregar tu personaje favorito, y otra para eliminarlo. Ten en cuenta que deberás importar las _**actions**_ que ya creaste.

2. Luego conecta esta función con tu componente, y recibe ambas funciones despachadoras por props.

3. Ahora crea un estado local en tu componente que se llame **isFav**, e inicialízalo en `false`.

4. Crea una función en el cuerpo del componente llamada **handleFavorite**. Esta función estará dividida en dos partes:

   -  Si el estado _**isFav**_ es `true`, entonces settea ese estado en false, y despacha la función **deleteFavorite** que recibiste por props pasándole el **ID** del personaje como argumento.
   -  Si el estado _**isFav**_ es `false`, entonces settea ese estado en true, y despacha la función **addFavorite** que recibiste por props, pasándole `props` como argumento.

5. Ahora te ayudaremos a crear un renderizado condicional. Si tu estado local `isFav` es true, entonces se mostrará un botón. Si es false, se mostrará otro botón. Para esto, copia y pega el siguiente código al comienzo del renderizado de tu componente (no te olvides de darle estilos).

```javascript
{
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   );
}
```

En este punto debería quedarte algo como esto:

<img src="./img/favButton.gif" alt="" />

6. Una vez hecho esto, nos tenemos que asegurar que el status de nuestro estado local se mantenga aunque nos vayamos y volvamos al componente. Para esto vamos a agregar en este componete una función **mapStateToProps**. Esa función debe traer nuestro estado global **myFavorites**. Recíbelo por `props` dentro de tu componente.

7. Este `useEffect` comprobará si el personaje que contiene esta `Card` ya está dentro de tus favoritos. En ese caso setteará el estado **isFav** en true. Cópialo y pégalo dentro de tu componente (no te olvides de importarlo).

```javascript
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
```

> **DESAFÍO:** te desafiamos a que reconstruyas ese useEffect, pero utilizando un **bucle For** en lugar de un **.forEach()**.

<br />

---

## **👩‍💻 EJERCICIO 4**

### **COMPONENTE DE FAVORITOS**

Dirígete a tu carpeta de componentes, y crea allí dentro una carpeta que contenga un archivo `Favorites.jsx` y otro `favorites.css`.

1. Crea una ruta en el archivo `App.js` para mostrar este componente. La ruta se puede llamar **/favorites**. También crea un botón en tu `Navbar` que te redirija a esta ruta, y otro que te devuelva a tu `Home`.

2. Dentro de este componente crea una función **mapStateToProps**. Esta función debe traer nuestro estado global _**myFavorites**_ a este componente. Luego recíbelo por props.

3. Una vez que tengas la lista de tus personajes favoritos dentro de tu componente, deberás mappearlo (recorrerlo) y re-renderizar un `<div>` con información del personaje.

> **NOTA:** no te olvides de darle estilos al componente.

<br />

---

### **¡LISTO! YA FUNCIONA TODO**

Todo el trabajo que hiciste en esta integración debería darte un resultado y funcionamiento similar a este:

<img src="./img/favDemostration.gif" alt="" />

<br />

---

## **📌 EJERCICIO EXTRA**

### **¡Ahora te proponemos dos desafíos!**

**1.** Si revisas, esta aplicación tiene un pequeño bug que tendrás que resolver... Cuando presionas el ❤️ de una de las Cards, el personaje aparece en la vista de "**Favoritos**". Pero si luego eliminas el personaje, este aún permanece en esta vista. Busca la manera para que cuando elimines un personaje, también se elimine de "**Favoritos**" (si es que está allí).

**2.** Te animamos a que crees, dentro de esta misma aplicación, una nueva vista que sea tu "**PORTFOLIO**". Aquí podrás agregar/eliminar/editar tus proyectos construidos durante el bootcamp en Henry!
