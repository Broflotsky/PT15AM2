let traverseDomAndCollectElements = function (matchFunc, startEl) {
  let resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl)

  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...result]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


let selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id'
  if (selector[0] === '.') return 'class'
  if (selector.includes('.')) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { // #  'string'
    matchFunction = (el) => {
      return `#${el.id}` === selector
    }
  } else if (selectorType === "class") {
    matchFunction = (el) => {
      let classes = el.classList // []
      for (let i = 0; i < classes.length; i++) {
        if (`.${classes[i]}` === selector) return true
      }
      return false
    }
  } else if (selectorType === "tag.class") { // div.buenas
    matchFunction = (el) => {
      let [t, c] = selector.split('.')
      return matchFunctionMaker(t)(el) && matchFunctionMaker(`.${c}`)(el)
    }
  } else if (selectorType === "tag") {  // TAGNAME me retorna el texto en MAYUSCULAS
    matchFunction = (el) => {
      return el.tagName === selector.toUpperCase()
    }
  }
  return matchFunction;
};

let $ = function (selector) {
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
