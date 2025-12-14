"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(hours) {
        console.log(`${this.name} ${hours} ghonta ghumay`);
    }
}
const student1 = new Student('karin', 18, 'dhaka');
student1.getSleep(15);
//# sourceMappingURL=inheritence.js.map