
function Store(estadoInicial, reducer) {
  this._state = estadoInicial;
  this.reducer = reducer;
  this._listeners = [];
}

Store.prototype.getState = function getState() {
  return this._state;
};

Store.prototype.dispatch = function dispatch(action) {
  this._state = this.reducer(this._state, action);
  this._listeners.forEach(function(listener){
    listener();
  });
};

Store.prototype.suscribe = function suscribe(listener) {
  this._listeners.push(listener);
  return () => {
    this._listeners = this._listeners.filter(l => l !== listener);
  }
}

module.exports = Store;
