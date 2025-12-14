"use strict";
//function
//arrow function , normal function
Object.defineProperty(exports, "__esModule", { value: true });
//normal function
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(2, 2);
//arrow fnction
const addArrow = (num1, num2) => num1 + num2;
addArrow(3, 3);
// console.log(addArrow(2,5))
//object er moddhe  function--> method
const poorUser = {
    balance: 0,
    addBalance(value) {
        return value + this.balance;
    }
};
poorUser.addBalance(10000);
//array function(map)
const arr = [1, 4, 6];
const sqrArr = arr.map((element) => element * element);
//# sourceMappingURL=function.js.map