## HW 13: React-Hooks | Integración

## **Duración estimada 🕒**

2 horas

<br />

---

## **Rick & Morty App**

## **INTRO**

En esta homework crearemos dos cosas😄

-  Por un lado, haremos un **filtrado** para nuestros personajes favoritos. Vamos a filtrar todos los personajes por su género. En total hay cuatro géneros:

```javascript
['Male', 'Female', 'unknown', 'Genderless'];
```

-  Por otro lado, haremos un **ordenamiento** también para nuestros personajes favoritos. Vamos a ordenar todos los personajes por su id (de mayor a menor y viceversa).

<br />

---

## **👩‍💻 EJERCICIO 1**

### **ACTIONS**

Dirígete al archivo en el que se encuentran tus **actions**. Allí deberás:

1. Crear una action-creator con el nombre "**_filterCards_**". Esta action-creator recibirá por parámetro un **status**. La action que retornará tendrá un _type_ llamado "**FILTER**", y dentro del _payload_ irá el género recibido.

2. Crear una action-creator con el nombre "**_orderCards_**". Esta action-creator recibirá por parámetro un **id**. La action que retornará tendrá un _type_ llamado "**ORDER**", y dentro del _payload_ irá el id recibido.

<br />

---

## **👩‍💻 EJERCICIO 2**

### **REDUCER**

Para comenzar a trabajar, primero tendremos que crear un estado global en el que se guarden todos nuestros personajes a medida que los vamos agregando. Dirígete al archivo en el que se encuentra tu reducer:

1. Crea un nuevo estado global (dentro del _initialState_) llamado _**allCharacters**_. Este debe ser un arreglo vacío.

2. Dentro del caso **ADD_FAV** estás haciendo una copia de tu estado _**myFavorites**_. Tendrás que reemplazar esto por una copia de tu nuevo estado _**allCharacters**_. Una vez hecho esto, en el estado que retorna este caso deberás agregar también la propiedad _**allCharacters**_ e igualarla a la copia de tu estado.

3. Crea un caso con el nombre "_FILTER_". Haz una copia de tu estado "**_allCharacters_**" mediante destructuring. Filtra aquellos personajes que tengan el mismo género que recibes por payload. Retorna tu estado global, pero que la propiedad **_myFavorites_** sea igual al filtrado que haz hecho.

4. Crea un caso con el nombre "_ORDER_". Haz una copia de tu estado "**_allCharacters_**" mediante destructuring. Utiliza el método **sort** de arreglos para ordenar tus personajes en base al número de su ID. Si el _payload_ es "**Ascendente**", entonces de menor a mayor. Si el _payload_ es "**Descendiente**, entonces de mayor a menor. Retorna tu estado global, pero que la propiedad **_myFavorites_** sea igual al ordenamiento que haz hecho.

> **NOTA:** investiga en la web sobre cómo funciona el método sort.

<br />

---

## **👩‍💻 EJERCICIO 3**

### **FILTER/ORDER COMPONENT**

Dirígete al archivo en el que se encuentra tu componente **Favorites**. Allí deberás:

1. Dentro de un `div`, crea dos elementos de HTML **selector**.

   -  Dentro del primero le pasaremos dos opciones: **Ascendente** y **Descendente**. Asegúrate de pasarles estos valores en sus atributos `value`. Por ejemplo:

   ```html
   <option value="Ascendente">Ascendente</option>
   ```

   -  Dentro del segundo pásales las opciones: **Male**, **Female**, **Genderless** y **unknown**. Asegúrate de pasarles estos valores en sus atributos `value`. Por ejemplo:

2. Cada vez que se seleccione una opción de ordenamiento, despacha la action "**orderCards**". Recuerda pasarle por parámetro el `e.target.value` del input. Utiliza el hook `useDispatch`.

3. Cada vez que se seleccione una opción de filtrado, despacha la action "**filterCards**". Recuerda pasarle por parámetro el `e.target.value` del input. Utiliza el hook `useDispatch`.

<br />

---

A esta altura, tu filtro y ordenamiento debería estar funcionando de la siguiente manera!

<img src="./img/example.gif" alt="" />
