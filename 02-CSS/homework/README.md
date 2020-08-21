# Homework CSS Avanzado

## Instrucciones
---
1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

	* Framework
	* Preprocesador
	* Responsive website


2. Crear una Responsive Website según las siguientes indicaciones:

### Descripción

A partir de una paǵina que simula una noticia sobre _Música 8D_ es necesario terminar la parte de la barra de navegación y el header como así también agregar los estlilos necesarios para que se vea agradable en un teléfono celular. El resultado final debeŕia ser el siguiente:

[Diseño Desktop](responsive-web/diseño/home-desktop.png)

[Diseño Mobile](responsive-web/diseño/home-mobile.png)


#### Configuración de LESS (Preprocessador)

* Ejecutar `npm install` para instalar less y less-watch-compiler

* Desde la carpeta del proyecto `responsive-web` ejecutar el siguiente comando: `npm run less`. Esto va a hacer que quede un watcher corriendo de fondo esperando por los cambios que efectuen en el archivo `index.less` para compilarlo a codigo CSS y almacenarlo en el archivo `index.css`.

* Verificar que el compilador esté funcionando correctamente, para ello colocar la propiedad `background-color` del elemento `html` a `red` en el archivo `index.less` que se encuentra dentro de la carpeta `less`. Si actualizamos ahora la página, el fondo debería haberse cambiado a rojo

* Si lo conseguiste, ahora borra el estilo recién creado para continuar con la tarea

#### Importar los archivos LESS

* En el archivo `index.less` importar el resto de los archivos `.less` en el siguiente orden:

```markdown
1.variables.less
2.mixins.less
3.reset.less
4.global.less
5.navigation.less
6.footer.less
7.home-page.less
```

*Si ves cambios en el estilo de la página es porque las importaciones fueron exitosas*


#### Formato Desktop

* Agregar el viewport meta tag dentro del head del archivo index.html

* Observar cómo debe quedar el [diseño final para Desktop](responsive-web/diseño/home-desktop.png). Es necesario crear la barra de navegación y la imagen del header que están faltando. En el archivo `index.html` se indica en que partes debe ir cada uno

* Utilizar el archivo `navigation.less` para darle el estilo correspondiente a la barra de navegación

* Utilizar el archivo `home-page.less` para darle el estilo correspondiente a la imagen del header

* Crear y utilizar 2 mixins diferentes para lograr los estilos. Utilizar el archivo `mixins.less`

* Crear un mixin que reciba al menos dos parámetros para darle el estilo correspondiente al botón de `registrate`

* Crear un estilo particular para cuando el mouse se encuentre por encima del botón (Hover) que cambie el color de su fondo y de la fuente

#### Formato Mobile

* Crear una variable `@phone` que contenga un media query de `max-width: 500px`. Utilizar dicha variable para todos los estilos anidados para el formato Mobile

* A partir del [diseño mobile](responsive-web/diseño/home-mobile.png) provisto, ajustar los estilos para que se parezca lo mayor posible a la imagen

### Extras [Opcional]

Si terminaste con todos los requerimientos anteriores y todavía te queda tiempo podes realizar lo siguiente (Puede que algunos ítems requieran investigación propia extra del material explicado en las clases):

* Introducir animación a partir de CSS al sitio

* Crear una barra de navegación que quede siempre en la parte superior de la pantalla cuando se scrollea hacía abajo (Fixed navigation) y agregarle opacidad al fondo.

* Agregar un `form` que permita introducir datos al usuario (nombre, apellido, mail, etc)

* Construir una subpágina de las opciones de la barra de navegación con estilos acordes a la página principal
