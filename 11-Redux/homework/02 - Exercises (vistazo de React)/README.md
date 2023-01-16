# HW 10 - Redux | Ejercicios 02

## Duración estimada 🕒

1 hora y media

---

## Intro

En este proyecto, te facilitaremos el código básico de una pequeña aplicación Redux. La aplicación en sí misma es sólo un contador. Tiene un botón de incremento y otro de decremento. La idea es que en tu navegador se renderice el número correspondiente dependiendo de qué botón toques.

---

## Consigna de la homework

- Crear un reducer.
- Crear distintas _Actions_.
- Darle funcionalidad a los botones de incremento y decremento.

---

## Pasos básicos para realizar la homework

En esta Homework no hay testing ya que no son necesarios. Podrás verificar desde tu navegador si la aplicación está funcionando o no.

---

## Conociendo la estructura

🔹 Dentro de la carpeta `02 - Exercises (vistazo de React)` , vas a encontrar la siguiente estructura:

- Carpeta **_public_**
- Archivo **_package.json_**
- Archivo **_README.md_** que ahora mismo estás leyendo. 🧐
- `src`
  - **_index.js_**
  - `actions`
    - **_index.js_**
  - `reducer`
    - **_index.js_**
  - `components`
    - **_Counter.js_**

---

## 👩‍💻 Ejercicios

La metodología para este ejercicio será distinta. Comenzarás en el archivo `src/components/Counter.js`. Allí encontrarás comentado las primeras tareas a realizar. Si te fijas, dentro de todos los archivos de esta Homework encontrarás comentado las instrucciones para trabajar.

Tómate tu tiempo para caminar por la código de la aplicación. Hay un montón de pequeños detalles informativos en los comentarios que no querrás perderte. Te animo a que mires cada archivo antes de intentar escribir cualquier código. 😃

¡Buena suerte y que te diviertas!

---

## Recordemos que...

- Los componentes de React no pueden pasarse información entre sí (al menos que sea de padres a hijos). Redux viene a resolver este problema con su estado global. ¡Podremos guardar y adquirir la información de allí desde cualquier parte de nuestra aplicación!
- Las **_Actions_** son funciones que nos permiten enviar información a nuestro reducer.
- El reducer nos permite gestionar la información de nuestro estado global.

---

## Recursos adicionales

- Documentación de [Redux](https://redux.js.org/introduction/getting-started)
