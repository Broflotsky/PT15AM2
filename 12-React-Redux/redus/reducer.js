const reducer = function(state, action){
  switch(action.type){
    case "INCREMENTAR_COUNTER":
      return state + 1;
    case "DECREMENTAR_COUNTER":
      return state - 1;
    case "INCREMENTAR_N":
      return state + action.payload;
    default:
      return state; // caso por defecto
  }
}

module.exports =  reducer;
