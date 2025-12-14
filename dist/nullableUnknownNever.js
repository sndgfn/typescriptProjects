"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// nullable type
const getUser = (input) => {
    if (input) {
        console.log(`from database ${input}`);
    }
    else {
        console.log('from database all users');
    }
};
// unknown tupe
const discountCalculator = (input) => {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }
    else if (typeof input === 'string') {
        const [discountedPrice] = input.split('');
        console.log(Number(discountedPrice) * 0.1);
    }
};
discountCalculator(100);
discountCalculator('100 taka');
discountCalculator(null);
//void
const throwError = (msg) => {
    throw new Error(msg);
};
//# sourceMappingURL=nullableUnknownNever.js.map