"use strict";
// type assertion--> type jokhon sure hoye boila dibo 
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = 22202;
const kgToGm = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `converted Output is :${Number(value) * 1000}`;
    }
};
const result1 = kgToGm(2);
console.log(result1);
const result2 = kgToGm('2 kg');
console.log(result2);
//# sourceMappingURL=typeAssertion.js.map