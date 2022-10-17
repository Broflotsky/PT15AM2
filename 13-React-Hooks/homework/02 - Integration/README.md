## HW 13 - React-Hooks | Integración

## Duración estimada 🕒

x minutos

---

## Rick & Morty App

## Intro

En esta homework crearemos dos cosas😄

-  Por un lado, haremos un **filtrado** para nuestros personajes favoritos. Vamos a filtrar todos los personajes por su status: _alive_, _dead_ o _unknown_.

-  Por otro lado, haremos un **ordenamiento** también para nuestros personajes favoritos. Vamos a ordenar todos los personajes por su id (de mayor a menor y viceversa).

---

## 👩‍💻 Ejercicio 0 | PROBANDO ERROR STORE PARALELO

Para comenzar a trabajar, primero tendremos que crear un estado global en el que se guarden todos nuestros personajes a medida que los vamos agregandoDirígete al archivo en el que se encuentran tus **actions**. Allí deberás:


---

## 👩‍💻 Ejercicio 1

### **ACTIONS**

Dirígete al archivo en el que se encuentran tus **actions**. Allí deberás:

1. Crear una action-creator con el nombre "**_filterCards_**". Esta action-creator recibirá por parámetro un **status**. La action que retornará tendrá un _type_ llamado "**FILTER**", y dentro del _payload_ irá el status recibido.

2. Crear una action-creator con el nombre "**_orderCards_**". Esta action-creator recibirá por parámetro un **id**. La action que retornará tendrá un _type_ llamado "**ORDER**", y dentro del _payload_ irá el id recibido.

---

## 👩‍💻 Ejercicio 2

### **REDUCER**

Dirígete al archivo en el que se encuentra tu **reducer**. Allí deberás:

**1.** Crea un caso con el nombre "_FILTER_". Haz una copia de tu estado "**_myFavorites_**" mediante destructuring. Filtra aquellos personajes que tengan el mismo status que recibes por payload (**Alive**, **Dead** o **Unkown**).

**2.** Crea un caso con el nombre "_ORDER_". Haz una copia de tu estado "**_myFavorites_**" mediante destructuring. Utiliza el método **sort** de arreglos para ordenar tus personajes en base al número de su ID. Si el _payload_ es "**Ascendiente**", entonces de menor a mayor. Si el _payload_ es "**Descendiente**, entonces de mayor a menor.

> **NOTA:** investiga en la web sobre cómo funciona el método sort.

---

## 👩‍💻 Ejercicio 3

### **FILTER/ORDER COMPONENT**

Dirígete al archivo en el que se encuentra tu componente **favorites**. Allí deberás:

1. Dentro de un `div`, crea dos elementos de HTML **selector**.

   -  Dentro del primero le pasaremos dos opciones: **Ascendente** y **Descendente**. Asegúrate de pasarles estos valores en sus atributos `value`. Por ejemplo:

   ```html
   <option value="Ascendente">Ascendente</option>
   ```

   -  Dentro del segundo pásales las opciones: **Alive**, **Dead** y **Unknown**.

2. Cada vez que se seleccione una opción de ordenamiento, despacha la action "**orderCards**". Recuerda pasarle por parámetro el `target.value` del input.

3. Cada vez que se seleccione una opción de filtrad, despacha la action "**filterCards**". Recuerda pasarle por parámetro el `target.value` del input.

---

## 👩‍💻 Ejercicio 4

### **COMPONENTE DE FAVORITOS**

Dirígete a tu capeta de componentes, y crea allí dentro una carpeta que contenga un archivo `Favorites.jsx` y otro `favorites.css`.

1. Crea una ruta en el archivo `App.js` para mostrar este componente. La ruta se puede llamar **/favorites**. También crea un botón en tu `Navbar` que te redirija a esta ruta, y otro que te devuelva a tu `Home`.

2. Dentro de este componente crea una función **mapStateToProps**. Esta función debe traer nuestro estado global _**myFavorites**_ a este componente. Luego recíbelo por props.

3. Una vez que tengas la lista de tus personajes favoritos dentro de tu componente, deberás mappearlo (recorrerlo) y reenderizar un `<div>` con información del personaje.

> **NOTA:** no te olvides de darle estilos al componente.

---

## 👩‍💻 Ejercicio Extra

### **¡LISTO! YA FUNCIONA TODO**

Todo el trabajo que hiciste en esta integración debería darte un resultado y funcionamiento similar a este:

<img src="./img/favDemostration.gif" alt="" />

---

## 👩‍💻 Ejercicio Extra

### **¡Ahora te proponemos dos desafíos!**

**1.** Si revisas, esta aplicación tiene un pequeño bug que tendrás que resolver... Cuando preciónas el ❤️ de una de las Cards, el personaje aparece en la vista de "**Favoritos**". Pero si luego eliminas el personaje, este aún permanece en esta vista. Busca la manera para que cuando elimines un personaje, también se elimine de "**Favoritos**" (si es que está allí).

**2.** Te animamos a que crees, dentro de esta misma aplicación, una nueva vista que sea tu "**PORFOLIO**". Aquí podrás agregar/eliminar/editar tus proyectos construidos durante el bootcamp en Henry!
