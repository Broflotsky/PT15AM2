const Store = require('./store.js');
const reducer = require('./reducer.js');
const { INCREMENTAR_COUNTER,  DECREMENTAR_COUNTER, increment } = require('./actions.js');

const store = new Store(0, reducer);

console.log(store.getState()); //0
store.dispatch( INCREMENTAR_COUNTER  )
console.log(store.getState()); //1
store.dispatch( DECREMENTAR_COUNTER  )
console.log(store.getState()); //0
store.dispatch( increment(10)  )
console.log(store.getState()); //10


var unsuscribe = store.suscribe( function() {
    console.log(store.getState());
} );

var funcionDos = store.suscribe(() => console.log(store.getState() * 10));

store.dispatch( INCREMENTAR_COUNTER  ); // 11
store.dispatch( INCREMENTAR_COUNTER  ); // 12
store.dispatch( DECREMENTAR_COUNTER  ); // 11

unsuscribe(); // dejamos de recibir notificaciones;

store.dispatch( DECREMENTAR_COUNTER  );
// console.log(store.getState()); // 10
