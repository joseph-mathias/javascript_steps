// named exports and imports

import * as Math from './appTest'
import {division,PIE} from './appTest2'

import Animal from './appTest3'

console.log(Math.add(4, 6));

console.log(division(9,3));
console.log('Hey');

var animal = new Animal();
animal.getClassType();