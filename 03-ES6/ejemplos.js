// //class
// class test{
// 	constructor(name, apellido){
// 		this._name = name;
// 		this._apellido = apellido;
// 	}
//   get nombre () {
//     return this._name + ' ' + this._apellido;
//   }
// }

// var Walter  = new test('Walter', "Moorlag");
// console.log(Walter.nombre);

// function test2(name, apellido){
// 	this._name = name;
// 	this._apellido = apellido;
// }
// test2.prototype.nombre = function(){
// 	return this._name + ' ' + this._apellido;
// }

// var Walter  = new test2('Walter', "Moorlag");
// console.log(Walter.nombre());
var p = 'sadsa'

var obj = {
    // __proto__
    propiedad: 1, // atajo para propiedad:propiedad
    // Methods
    // Computed (dynamic) property names
    [ 'prop_' + p  ]: 42
};

`In JavaScript '\n' is a line-feed.`

// Multiline strings

var name = "Bob", time = "today";

// console.dir("Hello ${name}, how are you ${time}?")
function hola(){
	return  [ [1,2,3] , 4 ];
}
var [arr, len] = hola() 

// console.log(arr, len);

// // Can be used in parameter position
// function g({name: x}) {
//   console.log(x);
// }

// g({name: 5});

// function y(v){
// 	console.log(v.name)
// }

// y({name: 5});

// // arrow functions

// // this
// var bob = {
//   _name: "Bob",
//   _friends: ['santi', 'guille'],
//   printFriends() {
//     this._friends.forEach(f  =>
//       console.log(this._name + " knows " + f));
//   },
//   printFriendsF: function(){
//   	var that = this;
//   	this._friends.forEach(function(f){
//   		console.log(that._name +'   ' + f);
//   	})
//   }
// }


// bob.printFriends();
// bob.printFriendsF();


// let fibonacci = {
//   [Symbol.iterator]() {
//     let pre = 0, cur = 1;
//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return { done: false, value: cur }
//       }
//     }
//   }
// }


// for (var n of fibonacci) {
//   // truncate the sequence at 1000
//   if (n > 1000)
//     break;
//   console.log(n);
// }


function* idMaker(){
  var index = 0;
  while(index < 5)
    yield index++;
  return 'gen';
}

var gen = idMaker();


for(i of gen){
	console.log(i)
}


// // Sets
// var s = new Set();
// s.add("hello").add("goodbye").add("hello");
// console.log(s.size === 2);
// console.log(s)

// // Maps
// var m = new Map();
// m.set("hello", 42);
// m.set(s, 34);
// m.get(s) == 34;

// Weak Maps
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(this);
ws.add(obj);

var obj = null;
console.log(ws);
console.log(ws.has(this));
console.log(ws.has(obj)) // true