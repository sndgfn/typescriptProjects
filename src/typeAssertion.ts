// type assertion--> type jokhon sure hoye boila dibo 

let anything: any;
anything = 22202;

const kgToGm = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000
    } else if (typeof input === 'string') {
        const [value] = input.split(' ')
        return `converted Output is :${Number(value) * 1000}`
    }
}

const result1 = kgToGm(2) as number
console.log(result1)
const result2 = kgToGm('2 kg') as string
console.log(result2)

