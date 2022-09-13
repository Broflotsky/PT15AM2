## HW 12 - React-Redux | Integración

## Duración estimada 🕒

x minutos

---

## Rick & Morty App

## Intro

En la integración de hoy crearemos un espacio en el que podremos guardar a nuestros personajes favoritos. ¡Podremos agregarlos y eliminarlos!

Para esto:

-  ❤️ Fav button: nuestras Cards tendrán un botón para agregar/eliminar de favoritos.
-  👀 Vista nueva: crearemos una nueva vista en la que se muestre específicamente todos nuestros personajes favoritos.

---

## Comencemos

Para comenzar, dirígete a la carpeta "**components**", y crea un nuevo directorio llamado "**Favorites**". Dentro de él crea un archivo `Favorites.jsx` y un archivo `favorites.css`. Ahora crea un componente funcional dentro del primer archivo.

Una vez hecho esto, dirígete al archivo `App.js`. Allí crea una nueva ruta llamada `/favorites`, la cual renderizará el componete que acabas de crear.

---

## 👩‍💻 Ejercicio 1

### **REDIRECTION**

Crea un botón en el componente `Nav` que te redirija a `/favorites`. Y dentro del componente favorites crea un botón que te lleve a `/home`.

---

## 👩‍💻 Ejercicio 2

### **FAV BUTTON**

Ahora crearemos un botón para agregar y eliminar de favoritos!

---

## 👩‍💻 Ejercicio 3

### Estado del formulario

El siguiente paso es poder controlar nuestro formulario. Para esto trabajaremos con un estado local con esta estructura:

```js
// Form.jsx
const [userData, setUserData] = React.useState({ username: '', password: '' });
```

Ahora conecta tu estado local con los inputs correspondientes utilizando la propiedad `value`.

Por último, usaremos el evento `onChange` en ambos inputs para poder guardar la información del usuario. Te sugerimos que crees una función **handleInputChange** la cual reciba el evento del input, y a partir de esta se modifique el estado local.

---

## 👩‍💻 Ejercicio 4

### Validaciones

En tu componente `<Form />` crea un nuevo estado local llamado "**errors**". Este es el estado que usaras para encontrar errores en el formulario.

Luego crea un nuevo archivo en la carpeta de tu componente Form.jsx con el nombre "**validation.js**". Aquí dentro deberás crear una función que valide lo siguiente:

**USERNAME**

-  el nombre de usuario tiene que ser un email _(explora validaciónes REGEX en internet!)_.
-  el nombre de usuario no puede estar vacío.
-  el nombre de usuario no puede tener más de 35 caracteres.

**PASSWORD**

-  la contraseña tiene que tener al menos un número.
-  la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de cómo puede quedar.

<img src="./img/input_error.png" alt="" >

---

### 👩‍💻 Ejercicio 5

### Simulación de seguridad

Ahora simularemos una base de datos donde esté guardado un username y password. De esta forma, sólo si la indormación de usuario coincide podrá usar la aplicación. Para esto:

1. En el archivo `App.js` crea lo siguiente:

   -  Un estado local llamado "**access**" que se inicialice en `false`.
   -  Una variable llamada "**username**", y que sea igual a tu email.
   -  Una variable "**password**", y que sea igual a una contraseña.

2. Crea una función llamada "**login**" que reciba por parámetro "_userData_". Esta función tiene que preguntar si el username y password que declaraste más arriba son iguales a los que le está llegando por parámetro. En caso afirmativo, el estado local access ahora será `true`. Importa el hook "**useNavigate**" de `react-router-dom` y haremos que nos redirija a `/home` si la información es correcta.

```jsx
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
```

3. Por último, pega el siguiente código en el cuerpo del componente:

```jsx
//App.js
useEffect(() => {
   !access && navigate('/');
}, [access]);
```

Esto no nos dejará navegar por la aplicación, al menos que ingresemos la información correcta!

---

### 👩‍💻 Ejercicio 6

### Login

Ahora le daremos la funcionalidad de cambiar los permisos a nuestro login! Para esto:

1. En el archivo `App.js`, le pasaremos la función **login** que creaste en el ejercicio anterior por props al componente `<Form />`.

2. En el componente `<Form />`, crea una función "**handleSubmit**". Esta función por dentro sólo debe ejecutar la función "**login**" recibida por props. No te olvides de pasarle por parámetro tu estado local _userData_!

¡Listo! Ya tienes un Login funcional!!😀🥳🤓

Pruebalo ingresando la información que declaraste previamente.

---

## 👩‍💻 Ejercicio Extra

-  Ahora te desafiamos a que crees un boton "**Logout**" en tu componente `<Nav />`. Si lo presionas debe quitar los permisos de acceso y redirigirte automáticamente a tu componente `<Form />`.

> **PISTA:** lo puedes hacer creando una función **logout** en tu archivo App.js.
