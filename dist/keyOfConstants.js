"use strict";
// keyof : type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "ship"; // read the error
const user = {
    id: 222, // key: value
    name: "Mezba",
    address: {
        city: "ctg",
    },
};
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const product = {
    brand: "HP",
};
const student = {
    id: 123,
    class: "four",
};
const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");
//# sourceMappingURL=keyOfConstants.js.map