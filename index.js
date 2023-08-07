import { sayHello } from './say-hello.js';
import { sayGoodbye } from './say-goodbye.ts';
import { v4 } from 'uuid';
import * as person from './person.json';
import textFile from './hello.txt?raw';

sayHello("Fadjrir Herlambang");
sayGoodbye("Fadjrir Herlambang");

console.log(v4());
console.log(person.name);
console.log(person.username);
console.log(person.email);
console.log(textFile);