"use strict";
// Generic Function
Object.defineProperty(exports, "__esModule", { value: true });
const createArrrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrObj = createArrrayWithGeneric({
    id: 123,
    name: "Next Level",
});
// tuple
const createArrayWithTuple = (param1, param2) => [
    param1,
    param2,
];
const createArrayTupleWithGeneric = (param1, param2) => [
    param1,
    param2,
];
const res1 = createArrayTupleWithGeneric("Mezba", false);
const res2 = createArrayTupleWithGeneric(222, { name: "Mezba" });
//
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};
const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
};
const student2 = {
    id: 321,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true,
};
const result = addStudentToCourse(student2);
console.log(result);
//# sourceMappingURL=genericFunction.js.map