"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class >> object
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    //method>> class ba obj er moddhe kono fun thakle
    makeSound() {
        console.log(`${this.name} is making ${this.sound} sound`);
    }
}
const dog = new Animal('dogesh', 'dog', 'ghew ghew');
// console.log(dog.makeSound())
dog.makeSound();
//# sourceMappingURL=class.js.map