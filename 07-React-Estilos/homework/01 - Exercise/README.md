# HW 02 - React-Estilos | Ejercicios

## Duración estimada 🕒

60 minutos

---

## Consigna de la homework

En esta homework, aprenderemos a utilizar las diferentes formas de aplicar estilos en React 🎨.

◻️ Aplicaremos en el componente "Bienvenido.jsx" `module.css` e `inline styling`.

◻️ Aplicaremos en el componente "Botones.jsx" `styled components`. 

---

### Pasos básicos para realizar la homework

◻️ Para poder ejecutar los `test` de esta homework, es necesario que estemos ubicados dentro de la carpeta `01 - Exercise`.

* Cuando te encuentres en esta carpeta, debes ejecutar el comando `npm install` (o `npm i`).

* Listo!! Ya puedes correr los test con el comando `npm test` (o `npm t`).

◻️ Para poder correr la aplicación de forma local, sólo debes ejecutar el comando `npm start`.

* Ingresando a <http://localhost:3000> desde el navegador, podremos ir viendo en tiempo real el resultado de nuestro trabajo.


---

### Conociendo la estructura

Dentro de la carpeta `01 - Exercise`, vas a encontrar la siguiente estructura:

🔹 Una carpeta llamada `_mocks_`

🔹 Una carpeta llamada `public`

🔹 Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)

🔹 Una carpeta llamada `tests`

🔹 Un archivo package.json

🔹 Y el archivo README que ahora mismo estás leyendo. 🧐

---

## 👩‍💻 Ejercicio 1

🔹 Dentro de la carpeta `src` en la que vas a encontrarás el esqueleto del proyecto React, estructurado de la siguiente manera:

* Una carpeta llamada assets

* Una carpeta llamada components

* Un archivo llamado App.js

* Un archivo index.js

* Un archivo index.css (estilos)

🔹 Para estos ejercicios, trabajaremos sólo dentro la carpeta `components`. Dentro de esta carpeta encontrarás:

* Una carpeta llamada Bienvenido, que dentro de ella contiene:

    * El componente Bienvenido.jsx

    * El archivo Bienvenido.module.css

* Una carpeta llamada Botones, que dentro de ella contiene:

    * El componente Botones.jsx


1. Comencemos con la carpeta Bienvenido:

◻️ Abre el archivo Bienvenido.module.css, dentro de él encontrarás las clases ya con el css implementado.

◻️ Abre el archivo Bienvenido.jsx, dentro de él encontrarás:

* El import de la librería react, los archivos en formato de imagen y el archivo Bienvenido.module.css 
    
* Las constantes studentName, techSkills y alerts que vimos en la homework anterior. 

* La función Bienvenido que renderiza:

    1. Un div.
    2. Dentro de este div, se renderiza:
        a. Un h1
        b. Un h3
        c. Una ul (lista desordenada)
            -  dentro de la ul se renderiza una li (lista) con el array de techSkills
        d. El componente Botones.
        
🔹 Debes darle estilo llamando la clase que se adapte a cada etiqueta. Por ejemplo: `<div className={s.classExample}>Example</div>`

---

### Ejercicio Extra

🔹 Aplica al h1 un estilo utilizando `inline styling`

---

## 👩‍💻 Ejercicio 2

**Llegó la hora de crear desde cero estilos en React** ⭐

Ya sabemos cómo funciona y se conectan los archivos module.css a nuestros componentes, ahora vamos a crear desde cero un archivo de estilo para el componente Botones, pero esta vez será un aplicando `Styled Components`. Haz click derecho sobre la carpeta "Bienvenido" --> Nuevo archivo --> `...`

> **Nota**: Puedes guiarte del ejercicio anterior. ⭐

1. Crea un componente de clase llamado `Botones.jsx`.
2. El componente debe renderizar un div.
3. Dentro del div, renderiza un botón llamado "Módulo 1".
4. Dentro del div, renderiza un botón llamado "Módulo 2".
5. Cada botón debe tener el atributo onClick que muestre una alerta.

**...Estamos llegando a la última parte de la homework** ⭐


* El componente debe verse en el navegador similar a esta imagen:

<p align="center"><img src="./img/02.png" height="300px"></p>

<p align="center"><img src="./img/03.png" height="300px"></p>

---

## Recordemos que

🔹 Todo en React es un componente y existen dos tipos: los componentes funcionales y los componentes de clase.

🔹 Un componente funcional es una función de Javascript que puede o no recibir datos (props). Tanto el nombre de la función como el nombre del archivo se deben llamar igual y deben ser con mayúscula inicial.

🔹 Un componente de clase es otra manera de definir un componente, la diferencia radica en que es con sintaxis de ES6.

🔹 Las props o propiedades son la manera que tiene React para pasar parámetros de un componente padre a sus hijos.

---

## Recursos adicionales

Documentación **"Intro to React"** <https://reactjs.org/tutorial/tutorial.html>

---

Listo!! Ahora estás preparado para crear tu propia app!! ✨🚀

Dirígete a la carpeta 📂 **"homework-integration"** y diviértete desarrollando la app de Rick & Morty 🤩
