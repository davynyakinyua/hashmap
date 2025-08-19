console.log("index.js");

import {Hashing} from './script.js'



const hashFunc = new Hashing(0.75);

console.log('LOAD FACTOR');
console.log(hashFunc.loadFactor);

console.log('CAPACITY');
console.log(hashFunc.capacity);

// set data
hashFunc.set('apple', 'red');
hashFunc.set('banana', 'yellow');
hashFunc.set('carot', 'orange');
hashFunc.set('dogs', 'brown');
hashFunc.set('elephant', 'gray');
hashFunc.set('frog', 'green');
hashFunc.set('grapes', 'purple');
hashFunc.set('hat', 'black');
hashFunc.set('ice cream', 'white');
hashFunc.set('jacket', 'blue');
hashFunc.set('kite', 'pink');
hashFunc.set('lion', 'golden');
hashFunc.set('moon', 'silver');
hashFunc.set('s', 'moon');
hashFunc.set('wolf', 'bane');


console.log('HAS');
//console.log(hashFunc.has('david'));

console.log('GET');
//console.log(hashFunc.get('david'));

console.log('LENGTH');
console.log(hashFunc.length());

console.log("KEYS");
console.log(hashFunc.keys());

console.log('VALUES');
console.log(hashFunc.values());

console.log('ENTRIES');
console.log(hashFunc.entries());

console.log('REMOVE');

console.log('CLEAR');

console.log('LOAD FACTOR');
console.log(hashFunc.loadFactor);

console.log('CAPACITY');
console.log(hashFunc.capacity);
