//incrementar en uno el counter
const INCREMENTAR_COUNTER = {
 type: 'INCREMENTAR_COUNTER'
};
// decrementar en uno el counter
const DECREMENTAR_COUNTER = {
  type: 'DECREMENTAR_COUNTER'
};

// action creator
function  increment(n) {
  return {
    type: 'INCREMENTAR_N',
    payload: n
  }
}

module.exports = {
  INCREMENTAR_COUNTER,
  DECREMENTAR_COUNTER,
  increment,
};
