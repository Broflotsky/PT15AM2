const html = require('fs')
  .readFileSync('./index.html')
  .toString();

document.documentElement.innerHTML = html;

const {
  ToDo,
  buildToDo,
  buildToDos,
  addToDo,
  completeToDo,
  toDoItems,
} = require('../DOMhomework.js');
let desc, newToDo;

describe('Agregar tu nombre como creador', () => {
  it('Agregar tu nombre como creador', () => {
    const nameLength = document.querySelector('#createdBy').innerHTML.length;
    expect(nameLength).toBeGreaterThan(24);
  });
});

describe('Clase ToDo', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html;
    desc = 'Crear ToDo';
    newToDo = new ToDo(desc);
  });

  it('Crear un ToDo', () => {
    expect(newToDo.description).toEqual(desc);
    expect(newToDo.complete).toEqual(false);
  });

  it('Agregar completeToDo al prototipo de ToDo', () => {
     expect(typeof ToDo.prototype.completeToDo).toBe('function');
  });

  it('El método completeToDo camabia el atributo \'complete\' to true', () => {
    newToDo.completeToDo();
    expect(newToDo.complete).toBe(true);
  });
});

describe('Array toDoItems', () => {
  it('Debe existir un array denominado \'toDoItems\'', () => {
    expect(Array.isArray(toDoItems)).toBe(true);
  });
});

describe('Función buildToDo', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html;
    desc = 'Crear ToDo';
  });

  it('Crea toDo HTML desde un Objeto ToDo', () => {
    const newToDo = new ToDo(desc);
    const toDoHTML = buildToDo(newToDo);
    expect(toDoHTML).not.toBeUndefined();
    expect(toDoHTML.className).toEqual('toDoShell');
  });
});

describe('Función buildToDos', () => {
  it('Existe y es una función', () => {
    expect(typeof buildToDos).toBe('function');
  });

  it('Devuelve un array de ToDos', () => {
    const newToDo = new ToDo('Crear nuevo ToDo');
    const builtToDo = buildToDo(newToDo, 0);
    expect(buildToDos([])).toEqual([]);
    expect(buildToDos([newToDo])).toEqual([builtToDo]);
  });
});

describe('Functión addToDo', () => {
  it('Es una función', () => {
    expect(typeof addToDo).toBe('function');
  });

  it('Agrega un ToDo al array \'toDoItems\'', () => {
    document.querySelector('#toDoInput').value = 'Creae nuevo ToDo';
    addToDo();
    expect(toDoItems.length).toBeGreaterThan(0);
  });
});

describe('Función completeToDo', () => {
  it('Es una función', () => {
    expect(typeof completeToDo).toBe('function');
  });

  it('Marca un elemento del array \'toDoItems\' como completado', () => {
    const e = { target: { id: 1 } };
    toDoItems.push(new ToDo('Crear nuevo toDo'));
    completeToDo(e);
    expect(toDoItems[1].complete).toBeTrue;
  });
});
