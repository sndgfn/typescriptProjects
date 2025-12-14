//class >> object
class Animal {
    constructor(public name: string, public species: string, public sound: string) {
    }
    //method>> class ba obj er moddhe kono fun thakle
    makeSound() {
        console.log(`${this.name} is making ${this.sound} sound`)
    }
}


const dog = new Animal('dogesh', 'dog', 'ghew ghew')

// console.log(dog.makeSound())
dog.makeSound()