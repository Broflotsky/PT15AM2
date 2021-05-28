# Webpack World Wide

## Lectura Introductoria

### IIFEs

Antes de que vayamos mucho mas, es importante entender el concepto de expresiones de funciones invocadas inmediatamente en Javascript (aka "IIFE"s).

Primero, nota que cualquier "expresión" en Javascript puede ser escrita dentro de paréntesis para asegurarte que sea evaluada como un todo. Un caso de uso muy común de esto es especificar el orden de operaciones cuando hacemos matemática simple:   

```js
var twelve = 2 * 4 + 4     // 12
var sixteen = 2 * (4 + 4); // 16
```

Segundo, nota que cuando guardas una función en una variable, esa función es una expresión de Javascript también - una expresión de función. Esto es opuesto a una declaración de función, que es el termino de cuando escribimos funciones usando el keyword `function` sin el `var`.


```js
// una declaración de función
function funcDeclaration () {
  // etc
}

// una variable asignada a una expresión de función
var someVariable = function funcExpression () {
  // etc
}
```

Una vez que la expresión de función es guardado dentro de una variable, podemos por supuesto invocarla:

```js
var algunaVariable = function funcExpression () {
  // etc
}

algunaVariable();
```

Sin embargo, si envolvés una expresión de función dentro de un par de paréntesis, eso va a causar la función que sea evaluada de la misma forma que sería evaluada si estuviésemos guardándolo en una variable. Esto significa que podemos invocar la expresión de función que contiene!

```js
(function funcExpression () {
  // etc
})();

// comportamiento idéntico, pequeña diferencia estilística:
(function funcExpression () {
  // etc
}());
```

Esto es a lo que nos referimos cuando hablamos de IIFEs - nos dan una forma de invocar una expresión de función "inmediatamente" sin necesitar guardarla en una variable.

Por mucho tiempo, este patrón fue fuertemente confiado en proveer modularidad en Javascript, porque cualquier variable declarada dentro de un IIFE pertenecería solo al scope de esa función - no contaminarían el scope global.

Vamos a ver porque eso es importante en un momento - por ahora, si te sentís cómodo en tu entendimiento de como operan las IIFE operan, estas listo para continuar leyendo!

### Script Tags y Browser Javascript

Muchos lenguajes construidos para correr en sistemas operativos (e.g. Java) tienen una forma nativa de definir modulos - esto es, archivos de código individual que pueden definir variables y/o funciones para exportar (o "exponer") a otros archivos. Los módulos pueden luego importar las variables y funciones que fueron exportadas por otros módulos. Cualquier variable o función que no ha sido explícitamente elegida para ser exportada es "privada" (o "local") de ese módulo.

Este tipo de modularidad hace nuestro código fácil de leer, escribir, y mantener en el tiempo.

Sin embargo, Javascript no fue originalmente destinado a ser corrido directamente en sistema operativo - fue enfocado a correr en un browser. Tampoco nos previmos usando Javascript para escribir aplicaciones grandes y escalables como hacemos hoy en día. Entonces, Javascript no vino originalmente con un sistema de módulos.  

En cambio, todo el Javascript del browser se ejecuta en un mismo ambiente, donde el objeto window es el contexto global compartido de cualquier JavaScript corriendo en una sola página web. Cualquier variable que es declarada con la keyword `var` fuera de el cuerpo de una función (o declarada sin el keyword `var` en cualquier lado cuando no estamos en strict-mode) se convierte en pares key-value en el objeto `window`. Si deseas escribir Javascript en archivos separados, escribís el path a tu archivo en un `<script>` tag, y el browser pide el script de esa dirección y ejecuta ese script en el mismo, ambiente compartido como cada otro script.

Esto significa que si tenemos el siguiente archivo Javascript:

```js
// fileA.js

var foo = 42;

function bar () {
  console.log(foo);
}
```

y

```js
// fileB.js

var baz = 74;
```

Y luego requerimos ambas en un archivo html de esta forma:

```html
<script src="/fileA.js"></script>
<script src="/fileB.js"></script>
```

Esto significa que fileA.js va a correr primero, seguido por fileB.js. Luego de que ambos archivos corrieron, nuesto objeto `window` se verá así:

```js
window.foo; // 42
typeof window.bar; // "function"
window.baz; // 74
```

Puedes ver como esto puede rápidamente volverse problemático! Miremos a los dos grandes problemas que nos enfrentamos:

#### PROBLEMA UNO: COLISIÓN DE NOMBRES

Por ejemplo, que pasa si agregamos una `fileC.js`...

```html
<script src="/fileA.js"></script>
<script src="/fileB.js"></script>
<script src="/fileC.js"></script>
```

...el cual se ve como esto:

```js
// fileC.js

var foo = "uh oh!"; // We've already declared a variable called "foo" in fileA.js! But we're redefining it here!
bar(); // this is our bar function from fileA.js!
```

Que pasa si invocamos bar? cuando originalmente escribimos en `fileA.js`, esperábamos loggear el número 42, pero ahora `fileC.js` hemos declarado otra variable con el mismo nombre - hemos encontrado un colisión de nombres. Mientras quizás queríamos re-definir el valor de `foo`, lo más probable es que nos olvidamos el nombre de la variable que usamos antes!

De cualquier forma, el gran problema numero uno es que los archivos JavaScript en el browser no corren aislados - las variables/funciones que ponen en el scope pueden ser sobrescritas por el código en otros archivos JavaScript. Esto hace al código que escribimos extremadamente frágil - introduciendo un nuevo archivo Javascript puede inadvertidamente romper otra pieza del script al sobrescribir una variable!

#### PROBLEMA DOS: DEPENDENCIA OPACA

Miremos a nuestros mismos tres archivos JasvaScript otra vez:

```html
<script src="/fileA.js"></script>
<script src="/fileB.js"></script>
<script src="/fileC.js"></script>
```

Estos scripts son cargados y ejecutados en orden. Esto significa que `fileA.js` corre hasta completarse antes que `fileB.js` comience, y `fileB.js` va a correr hasta completarse antes que `fileC.js` empiece.

¿Qué pasa si movemos `fileC.js` primera?

```html
<script src="/fileC.js"></script>
<script src="/fileA.js"></script>
<script src="/fileA.js"></script>
```

Recuerda que `fileC.js` usa la función `bar` que `fileA.js` define. Si tratamos de invocar `bar` antes que fue definida, eso nos va a traer un gran y horrible `ReferenceError`! Esto nos da el problema numero dos: el orden en el cual nuestros archivos JavaScript se ejecutan importa, y es normalmente difícil decir como debería ser ese orden. Esto puede llevar a situaciones engañosas donde se vuelve difícil resolver las "dependencias" que cada archivo JavaScript tiene en los otros que son cargados en la misma página.

El patrón IIFE ayuda a aminorar alguno de estos problemas (pero no los soluciona). Continuá leyendo y veremos como.

### Patrón de Módulos IIFE

Cómo una forma de proteger el scope de las variables dentro de un archivo JavaScript, los desarrolladores empezaron a envolver sus archivos JavaScript en IIFEs. Porque las variables/funciones declaradas dentro de un IIFE tienen su scope limitado al scope de la función que lo contiene, somos capaces de en su mayoría (pero no completamente) mitigan la amenaza de la colisión de nombres. Considerá, una vez más, nuestro `fileA.js` y `fileC.js` (anda y mirá las secciones previas si necesitas un recuerdo de como se ven).

```html
<script src="/fileA.js"></script>
<script src="/fileC.js"></script>
```

Cambiemos `fileA.js` para que su contenido este envuelto en una IIFE. En cambio de poner todas de nuestras variables directamente en el scope global, vamos a restringirlo al scope local de la función - si hay algún valor que queremos exponer, vamos a poner esos valor al objeto global `window`.

```js
// fileA.js

(function () {
  // Queremos mantener la variable foo privada a fileA.js
  var foo = 42;

  function bar () {
    console.log(foo);
  }

  // Queremos usar la función `bar` en otro lugar, por lo que explícitamente lo anexamos al `window`
  window.bar = bar;
})();
```


Ahora cuando `fileC.js` corren:

```js
// fileC.js

var foo = "uh oh";

bar(); // Ahora esto va a ser 42!
```

Cuando invocamos `bar` ahora, la función `bar` que invocamos va a tener closure sobre la variable `foo` dentro del IIFE - no va a colisionar con la variable `foo` declarada en `fileC.js`!

Mientras que todavía hay chances que `window.bar` pueda ser sobrescrito por otro módulo, este patrón hizo las cosas mucho más fácil por un tiempo, podemos escribir ahora archivos JavaScript separados, envueltos en IIFEs, y podemos razonar sobre ellos en términos de sus "exports" (los valores que ellos anexan al objeto global `window`),  y sus "imports"/"dependencias" (los valores que necesitan que existan en el objeto global `window` antes de que ese archivo corrió). Otra variación de este concepto, [el patrón de revelación de módulos](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript), en el cual retornamos en la función eso que queremos exponer, permitió a los desarrolladores ser mucho mas explícitos sobre los "exports" de sus "módulos".

Sin embargo, con el amanecer de la edad de AJAX y JQuery, las aplicaciones web se fueron haciendo más grandes y más sofisticadas, y el "patrón IIFE" esta lejos de ser a prueba de tontos. Si queremos escribir aplicaciones de browser sofisticadas como las que existen en la computadora, vamos a necesitar herramientas mejores.

Aquí es donde las tecnologías como Webpack aparecen. Pero antes de eso, vamos a divagar un poco sobre como NodeJS cambió el juego al popularizar un cierto sistema de módulos para JavaScript del **lado del servidor**.

### Entra Node

Más adelante veremos cómo funciona NODE en detalle, por ahora es importante entender que cada archivo JavaScript en un programa de Node es un módulo - las variables y funciones que declares en un módulo nunca van a colisionar con esas que tu declarás en otro módulo.


```js
// fileA.js

var foo = 42;

function bar () {
  console.log(foo);
}

// Usamos `module.exports`para exportar los valores del módulo
module.exports = bar;
```

```js
// fileB.js

// usamos `require`para importar valores de otros módulos
var someFunc = require('./fileA');

var foo = "no sweat"; // no tiene idea que usamos el mismo nombre para una variable en fileA
someFunc(); // 42
```

Salirse del browser permitió a Node implementar un sistema de módulos en JS, basado en un sistema propuesto por ![CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1.1), que ayudo a elevar a JavaScript a ser un "lenguaje de programación real" en los ojos de muchos.

Sin embargo, solo JavaScript del lado del servidor puede usar `require` y `module.exports` - JavaScript escrito en browsers todavía era renegado a los riesgos y fragilidades de tags `<scripts>`. Sin embargo, ahora que hemos experimentado modularidad real con Node, nos debemos preguntar - ¿podemos implementar un sistema de módulos real para JavaScript desde browser también? ¿Hay una herramienta que podamos crear para que podamos esencialmente usar `require` y `module.exports` en nuestro Javascript para el browser también?

### JavaScript Moderno

La respuesta a esa pregunta en la sección anterior es si, por supuesto! Herramientas como Webpack (como también otras como browserfy, el cúal no vamos a utilizar) nos permiten escribir archivos Javascript para el browser como si fueran módulos de Node - podemos usar `require` y `module.exports`, y declarar variables sin tener que preocuparse sobre contaminar el objeto global window. Es realmente un gran momento para ser un desarrollador web!

## Punto de Arranque

En primer lugar para que vean la apllicación funcionando pueden, luego de ejecutar el `npm install` hacer un `npm start` e ingresar a la URL que les indica por consola para ver el whiteboard funcionando. A partir de ahora la idea será hacer unn refactor de la aplicación para aplicar lo visto en la clase de módulos pero sin modificar la funcionalidad en sí de la aplicación.

### Entendiendo Nuestras Dependencias

Antes de sumergirnos en Webpack, tomate un momento para mirar a través de los archivos Javascript que nuestro `index.html` carga y determina como estan relacionados uno con el otro. Tratá de armar un "árbol de dependencias" - eso es, un gráfico en el cual los archivos requieren otros archivos para ser ejecutados primero. Debería verse algo como esto:

```
/fileA.js
  crea window.foo

/fileB.js
  necesita window.foo de fileA.js
  crea window.bar

/fileC.js
  necesita window.bar de fileB.js
```

+++Solución
Podemos visualizar nuestro "árbol de dependencia" de esta forma.
```
/socket/io/socket.io.js
  crea window.io

event-emitter.js
  crea window.EventEmitter

whiteboard.js
  necesita window.EventEmitter de "event-emitter.js"
  crea window.whiteboard

app.js
  necesita window.whiteboard de "whiteboard.js"
  necesita window.io de "/socket.io/socket.io.js"
```

## Introduciendo Webpack

### Overview

__Webpack__ es una herramienta extremadamente poderosa y flexible para construir Javascript, y sus características van mas allá de las cuales tomamos ventaja hoy. Igual, primero, te estarás preguntando... ¿qué es Webpack?  

Webpack es un módulo de Node que podes instalar usando npm. Si recordás usando el compilador node-sass de Shoestring para compilar (o, más apropiadamente "transpilar" - ver la nota debajo) nuestros archivos SCSS a un solo archivo CSS - Webpack es como eso!

Webpack toma nuestros archivos JavaScript y produce un solo, archivo JavaScript transformado. De la misma forma node-sass puede reconocer características SCSS (como nesting y @import) y formatear el archivo CSS saliente apropiadamente, Webpack puede reconocerlo cuando tu Javascript usa `require` y `module.exports`, y va transformar el archivo Javascript resultante apropiadamente también. Wow!


#### NOTA AL PIE: TRANSPILACIÓN VS. COMPILACIÓN

Usualmente vas a ver los términos "compilador" y "compilación" combinados juntos con los términos "transpilador" y "transpilación". La diferencia es puramente semántica. Un "compilador" típicamente "compila" un lenguaje de alto nivel a un lenguaje de menor nivel (no humanamente legible). Por ejemplo usas un compilador C++ para compilar código fuente C++ a código de maquina.

Por el otro lado, un "transpilador" típicamente "transpila" un lenguaje de alto nivel, a otro lenguaje de alto nivel. Por ejemplo, el transpilador node-sass toma código fuente SCSS y lo transpila a CSS. De la misma forma, Webpack transpila nuestro Javascript a... Javascript distinto!

### Instalar

Empecemos la fiesta de paquetes!

1. Primero, instala webpack:
`npm install --save-dev webpack`

**Nota**: Te estarás preguntando porque estoy sugiriendo `--save-dev` y no solo `--save`. Esta es una característica de npm. El flag `-dev` marca a webpack como una dependencia de desarrollo. Webpack es una "build tool"(herramienta de desarrollo) que típicamente solo necesitamos mientras estamos desarrollando nuestra app. Cuando deployamos nuestra app a un servidor de  producción, ya vamos a tener todo construido y listo para andar, por lo que no es necesario instalar el paquete de `webpack` en el servidor de producción. En cambio, cuando instalamos nuestra app en nuestro servidor de producción, podemos añadir un flag especial (como `npm install --production`) para señalizar que la instalación debe ignorar las dependencias dev.

En nuestro `package.json`, agrega un nuevo campo a `"scripts"` llamado `"build"`. Este debería simplemente ejecutar el comando webpack. Esto nos va a permitir ejecutar webpack al decir `npm run build` desde nuestra terminal.

+++Solución
```json
"scripts": {
  "start": "node server.js",
  "build": "webpack"
}
```
+++

`npm run build` no va a hacer nada aún sin embargo. Necesitamos configurar webpack para que sepa que hacer! Vamos a hacer esto en la siguiente sección.

### Webpack Config

Para que webpack sea capaz de construir nuestro archivo apropiadamente, necesitamos darle por lo menos dos piezas de información:

- Un archivo para usar como un punto de arranque donde va a comenzar a construir
- Un lugar para poner el output del programa (nuestro JavaScript transformado)

Vamos a dárselos:

1. En la raíz del directorio de nuestro repo, crea un archivo llamado `webpack.config.js`. Notá que el nombre "webpack.config.js" importa (de la misma manera el nombre package.json importa) - el programa webpack va a buscar automáticamente por este archivo con ese nombre.
2. Copiá y pegá el siguiente código en tu `webpack.config.js`
Copy and paste the following code into your webpack.config.js

```js
module.exports = {
  entry: './browser/app.js', // el punto de arranque de nuestro programa
  output: {
    path: __dirname + '/browser', // el path absoluto para el directorio donde queremos que el output sea colocado
    filename: 'bundle.js' // el nombre del archivo que va a contener nuestro output - podemos nombrarlo como queramos pero bundle.js es lo típico
  }
}
```

Desde la linea de comando ejecutá `npm run build` - deberías recibir algún output que se vea como esto:

```
Hash: 43fddf2175fdf6f7923f
Version: webpack 2.2.1
Time: 72ms
    Asset    Size  Chunks             Chunk Names
bundle.js  3.1 kB       0  [emitted]  main
   [0] ./browser/app.js 586 bytes {0} [built]
```

Ahora, anda y chequeá el contenido del directorio `browser/`. Deberías ver una adición: algo llamado `bundle.js`. Este es el archivo de salida que webpack creó! Abrilo!

...

...Sorprendido? Se ve bastante loco ahí, verdad? Pero si ves cuidadosamente, vas a ver nuestro código! Si ves a un mas cerca, podes notar que el código de app.js esta ahora envuelto en otra expresión de función - que parece estar pasando algo llamado `module` y `exports` a él!

Normalmente no veremos dentro de nuestro `bundle.js` (y se vuelven bastante grandes!), ni vamos a ir a las especificidades de como webpack hace su magia, pero podés ver la idea - webpack toma tu código JavaScript y lo envuelve en una lógica de módulos muy sofisticada. De esta forma, podemos empezar usando nuestros archivos Javascript del lado del cliente como módulos!

Estas emocionado? Yo también lo estoy! Continuemos!

> Nota al pie: Dado que los artefactos del build como `bundle.js` son creados del código fuente, eso lo hacen información redundante de una perspectiva del control de versionado. En otras palabras, builds son normalmente agregados al `.gitignore`. Vamos a ignorar que en este workshop por un tema simplicidad.

## Módulos en el Browser!

### Review - Nuestro Árbol de Dependencias de Archivos

Estamos tan cerca de lo increíble! Tomémonos un momento para revisar nuestro "árbol de dependencias" de antes:

```
/socket/io/socket.io.js
  creates window.io

event-emitter.js
  creates window.EventEmitter

whiteboard.js
  needs window.EventEmitter from "event-emitter.js"

app.js
  needs window.whiteboard from "whiteboard.js"
  needs window.io from "/socket.io/socket.io.js"
```

La forma en que webpack opera es que al principio con el archivo especificado en el campo `entry` de `webpack.config.js`. Si ese archivo requiere cualquier módulo, webpack toma esos módulos al build también, y si esos módulos requiren otros módulos... y así sucesivamente.

Dado esto, ¿qué archivo debería ser nuestro _entry point_(punto de entrada)?

+++Solución
Debería ser app.js! Algo interesante para notar aquí es que la forma que webpack toma los archivos es opuesta a la forma en que el browser las necesita. En vez de empezar con los archivos con la menor cantidad de dependencias y trabajar de ahí para abajo, webpack empieza en la raíz de nuestro árbol de dependencias y trabaja de ahí para arriba!
+++

### Solo Puede Haber Uno

Todo esto estando dicho -- la única forma de obtener JavaScript para correr en una página web es vía un `<script>` tag, por lo que no podemos completamente abandonar los tags `<script>` para siempre. Sin embargo, porque webpack va a hacer un solo gran archivo `bundle.js` con todos nuestros archivos .js  solo necesitamos requerir **un `<script>` tag**.

Comentá los `<script>` tags actuales en nuestro `index.html`. En su lugar, escribe un `<script>` tag que tome `bundle.js`.

+++Solución
```html
<!-- <script src="/socket.io/socket.io.js"></script> -->
<!-- <script src="event-emitter.js"></script> -->
<!-- <script src="whiteboard.js"></script> -->
<!-- <script src="app.js"></script> -->

<script src="bundle.js"></script>
```
+++

### Usando require y module.exports... en el Browser

El momento ha llegado! Ve a través de los archivos Javascript y convertilos en modules! Si necesitas ayuda, aquí hay una checklist de cosas que podés hacer en cada archivo:

- Remové las IIFE que rodean al código - ya no las vas a necesitar más. (Quiz: por qué?)
- Identifica que cosas ese archivo expone al objeto `window` y y pon eso `module.exports`.
- Identificá cualquier cosa que ese archivo obtiene de otro archivo en el objeto window y cambialo a que sea requerido.
  + (nota: esto por supuesto no incluye cosas como `window.location.origin` o `window.addEventListner` - estamos manipulando el contexto global por gusto ahí)

Una vez realizado todos esos cambios deberían ejecutar el `npm run build` una vez más y luego hacer `npm start` lo cual les levantará la aplicación en su computadora en el puerto indicado en la consola y podrán ingresar a la URL indicada para ver wl whiteboard funcionando. En el caso de que no funcione es probable que al cambiar la sintaxis por esta nueva forma de require y module.exports hayan cometido algún error.

#### NOTA IMPORTANTE PARA SOCKET.IO!

Para socket.io, vas a necesitar requerirlo como "socket.io-client". Recuerda que en Node, podes hacer `require('un-modulo-de-node')` sin usar un path relativo (mientras sea un directorio dentro de la carpeta node_modules). Con webpack, es la misma situación! El nombre de la carpeta en tu carpeta `node_modules` que contiene el archivo que queremos es llamado `socket.io-client`.

Una vez que hayas terminado de refactorear, vas a necesitar ejecutar `npm run build` otra vez para reconstruir tu `bundle.js`. Si todo funcionó, deberías ser capaz de usar whiteboard otra vez como si nada hubiese pasado! Asegurate de chequear si tus sockets siguen funcionando!

Si algo va a mal - presta mucha atención a cualquier mensaje de error que recibas. Deberían llevarte a la dirección correcta.

## Import y Export

### Otra manera

Podríamos detenernos aquí mismo - siendo capaces de hacer `require` y `module.exports` en tu browser Javascript de la misma forma que lo harías en Node es un tremendo nuevo súper poder para agregar a nuestro arsenal.

Sin embargo, si estuviste paseando por el Internet, podés haber notado algo extraño: mucha gente está empezando a escribir código que se ve como `import miModulo from './miModulo';`, y `export default algunaCosa;`... en JavaScript!

**Qué es esta locura?**

Eso, mi amigo, es la sintaxis de módulos ECMAScript, introducida en ES6.

Permitime explicar - luego de que Node popularizó el uso de `require` y `module.exports`, los mantenedores de la especificación de ECMAScript reconocieron la necesidad de un sistema de módulos nativo en JavaScript. Sin embargo, en vez de basar este nuevo sistema en la popular sintaxis de Node, la especificación aprobó una sintaxis diferente usando keywords como `import` y `export` - el cual es mucho más similar a la sintaxis que usa Java.

Para muchos, esto fue una decepción. Para otros, fue una victoria para ![análisis estático](https://en.wikipedia.org/wiki/Static_program_analysis) (el cual es imposible con la sintaxis de Node). Pero no nos detengamos en política - el sistema import/export es ahora parte del estándar de ECMAScript, y a pesar que no este aún soportado por ningún browser o por Node, va a eventualmente recibir soporte nativo en todos esos ambientes.

Afortunadamente para nosotros, Webpack está aquí para salvar el día! Webpack reconoce y soporta AMBOS `require`/`module.exports` y`import`/`export`! (Aunque en cualquier proyecto, deberías elegir usar uno o el otro - mezclar los dos va a ser el código difícil de entender y puede de hecho resultar en errores dado que Webpack tiene la habilidad de realizar optimizaciones extra en el código usando `import/export`).

Todo lo que necesitamos es aprender como `import` y `export` funcionan, y podemos ir y agregarlos a nuestro propio código sin perder nada.

**Nota**: El soporte a declaraciones de `import` y `export` solo están disponible desde el lanzamiento de webpack 2.x. Si llegaste a instalar una versión de webpack mas vieja (o en algún punto en el pasado instalaste webpack globalmente y estas usando esa copia), asegurate de actualizarlo a la última versión.

### Export

Declaraciones de import y export tienen un montón más de sintaxis especializada que `require` y `module.exports`. Afortunadamente, podemos manejar cualquier cosa que queremos hacer con solo las bases.

Para exportar un valor de un módulo, simplemente decí export:

```js
export const foo = 42;
export function bar () {
  // etc
}
```

Podés exportar la cantidad de expresiones que quieras. Sin embargo, podes especificar un (y solo un) default export, de esta forma:

```js
export const foo = 42;
export function bar () { /* etc */ }

// este es nuestro default export
export default function myDefault () {
  // otras cosas...
}
```


La diferencia entre un export normal y un default export va a ser importante cuando importemos... entonces aprendamos como hacer eso a continuación.

### Import

Ahora que sabemos como exportar, miremos como importar.

Dado el siguiente ejemplo de antes (vamos a llamar esto 'exports.js'):

```js
// exports.js

export const foo = 42;
export function bar () {
  // etc
}
```

Importaríamos los valores de esta forma:
```js
import { foo, bar } from './exports';

console.log(foo) // 42
bar(); // etc
```

Cada export con nombre va entre un par de llaves, separados por coma.

Sin embargo, si tu archivo tiene un default export, las cosas se ven un poco mas lindas. Otra vez, digamos que este es nuestro "exports.js":

```js
// exports.js

export const foo = 42;
export function bar () {
  // etc
}

export default function baz () {
  // blah blah
}
```

Si queremos importar el default export de este módulo, no necesitamos usar llaves:

```js
import baz from './exports.js';

baz(); // blah blah
```

Esta sintaxis que se ve mejor recompensa a los desarrolladores por escribir módulos con un solo default export, en vez de muchos múltiples exports con nombre (y en general, es una buena idea para un módulo simplemente tener un export default, en mantenerse con el principio UNIX de "hacer una cosa y hacerla bien").

Habiendo dicho esto, es perfectamente correcto que hayan módulos que tienen un default export y múltiples exports con nombre. Cuando importas, podes incluso combinar el default export y los exports con nombre en la misma declaración:

```js
import baz, { foo, bar } from './exports.js';

baz(); // blah blah
console.log(foo) // 42
bar(); // etc
```

Hay otras variaciones que podés tomar de este patrón fundamental de `import`/`export` (por ejemplo, podes hacer cosas como `import * from './exports.js'`) y asignar aliases a imports/exports usando el keyword `as`), pero esos ya son cerezas de la torta. Con lo que hemos cubierto hasta ahora, podemos fácilmente remplazar `require` y `module.exports`.

### Una ultima vez

Esta bien - hagamos esto una vez más. Ve a través de tus archivos JavaScript y remplazá el sistema require/module.exports con el sistema import/export. Toma extra cuidado con las diferencias entre `export` y `export default`
