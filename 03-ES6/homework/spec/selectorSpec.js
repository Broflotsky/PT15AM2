describe("selectorTypeMatcher", function() {
  it("debe retornar el tipo 'id' para un selector de id", function() {
    var type = selectorTypeMatcher('#pagetitle');
    expect(type).toEqual("id");
  });

  it("debe retornar el tipo 'class'  para un selector de clase", function() {
    var type = selectorTypeMatcher('.image');
    expect(type).toEqual("class");
  });

  it("debe retornar  el tipo 'tag.class' para un selector de tag.class", function() {
    var type = selectorTypeMatcher('img.thumbnail');
    expect(type).toEqual("tag.class");
  });

  it("debe retornar el tipo 'tag' para un selector de tag", function() {
    var type = selectorTypeMatcher('div');
    expect(type).toEqual("tag");
  });
});

describe("matchFunctionMaker", function() {

  it("Debe retornar una funcion que matchie el ID que devuelve TRUE si el elemento matchea el ID", function() {
    var selector = "#price";
    var matcher = matchFunctionMaker(selector);
    var sampleDivEl = document.createElement("DIV");
    sampleDivEl.id = "price"; // el elemento tiene tres distintas clases en él
    expect(matcher(sampleDivEl)).toEqual(true);
  });

  it("debe retoranar una función que devuelve FALSE si el elemento no matchea el ID", function() {
    var selector = "#price";
    var matcher = matchFunctionMaker(selector);
    var sampleDivEl = document.createElement("DIV");
    sampleDivEl.id = "logo"; // el elemento tiene tres distintas clases en él
    expect(matcher(sampleDivEl)).toEqual(false);
  });

  it("Debería retornar una funcion que matchie la CLASS que devuelve TRUE si el elemento matchea la className", function() {
    var selector = ".heading";
    var matcher = matchFunctionMaker(selector);
    var sampleDivEl = document.createElement("DIV");
    sampleDivEl.className = "heading";
    expect(matcher(sampleDivEl)).toEqual(true);
  });

  it("debería retornar una función que matchie la CLASS que devuelva TRUE si el elemento matche la classNAme, incluso cuando hay multiples clases en el elemento", function() {
    var selector = ".heading";
    var matcher = matchFunctionMaker(selector);
    var sampleEl = document.createElement("H1");
    sampleEl.className = "lead heading lightback"; // el elemento tiene tres distintas clases en él
    expect(matcher(sampleEl)).toEqual(true);
  });

  it("deberia retornar una function que matchie la CLASS que devuelva FALSE si el elemento no matchie ningun className", function() {
    var selector = ".photo";
    var matcher = matchFunctionMaker(selector);
    var sampleEl = document.createElement("H1");
    sampleEl.className = "photos lightback abstract"; // el elemento tiene tres distintas clases en él
    expect(matcher(sampleEl)).toEqual(false);
  });

  it("debería devolver un función que matchie el TAG que devuelva TRUE cuando el elemento matchea el tagName", function() {
    var selector = 'div';
    var matcher = matchFunctionMaker(selector);
    var sampleDivEl = document.createElement("div");
    expect(matcher(sampleDivEl)).toEqual(true);
  });

  it("debería devolver un función que matchie el TAG.CLASS que devuelva TRUE cuando el elemento matchea el tagName AND Class", function() {
    var selector = "img.thumbnail";
    var matcher = matchFunctionMaker(selector);
    var sampleDivEl = document.createElement("img");
    sampleDivEl.className = "thumbnail lead lightback"; // el elemento tiene tres distintas clases
    expect(matcher(sampleDivEl)).toEqual(true);
  });

  it("debería devolver un función que matchie el TAG.CLASS que devuelva FALSE si el elemento no matchea el tag", function() {
    var selector = "img.photo";
    var matcher = matchFunctionMaker(selector);
    var sampleEl = document.createElement("div");
    sampleEl.className = "photos lightback abstract"; // el elemento tiene tres distintas clases
    expect(matcher(sampleEl)).toEqual(false);
  });

  it("debería devolver un función que matchie el TAG.CLASS que devuelva FALSE si el elemento no matchea el className", function() {
    var selector = "img.photo";
    var matcher = matchFunctionMaker(selector);
    var sampleEl = document.createElement("img");
    sampleEl.className = "photos lightback abstract"; // el elemento tiene tres distintas clases
    expect(matcher(sampleEl)).toEqual(false);
  });

});

describe("funcion de selector $ ", function() {
  var elements;

  it("debe seleccionar un elemento por tag name (el root en este caso)", function() {
    elements = $('body');
    expect(elements[0].tagName.toLowerCase()).toEqual("body");
  });

  it("debería seleccionar un id", function() {
    elements = $('#pagetitle');
    expect(elements.length).toEqual(1);
  });

  it("deberia seleccionar el elmento correcto por id", function() {
    elements = $('#pagetitle');
    expect(elements[0].innerHTML).toEqual("My Photos");
  });

  it("debería seleccionar tag names", function() {
    elements = $('h2');
    expect(elements.length).toEqual(3);
  });

  it("debería seleccionar por clase", function() {
    elements = $('.photo');
    expect(elements.length).toEqual(4);
  });

  it("deberia seleccionar por clase incluyendo elementos con multiples clases", function() {
    elements = $('.lead');
    expect(elements.length).toEqual(3);
  });

  it("deberia seleccionar por tag name y className", function() {
    elements = $('h2.small');
    expect(elements.length).toEqual(2);
  });

});

describe("Credito Extra", function () {
  describe("Selector de Jerarquía", function (){
    it("debe seleccionar los elementos correctos cuando el selector incluye a un child combinator (>)", function () {
        elements = $('div > img');
        expect(elements.length).toEqual(7);

        elements = $('body > img');
        expect(elements.length).toEqual(0);
    });

    it("debe seleccionar los elementos correctos cuando el selector incluye un descendant combinator (espacio en blanco)", function () {
        elements = $('body p');
        expect(elements.length).toEqual(2);

        elements = $('body img');
        expect(elements.length).toEqual(7);
    });
  });
});
