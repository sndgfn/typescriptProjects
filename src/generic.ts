//dynamically generalize

type GenericArray<value> = Array<value>


// const friends:string[]=['x','y','z']
// const friends:GenericArray=['x','y','z'] // uprer tao same
const friends1: GenericArray<string> = ['x', 'y', 'z'] // uprer tao same

// const rollNumber:number[]=[4,7,11];
const rollNumber: GenericArray<Number> = [4, 7, 11]; // uprer tao same

const isElegible: GenericArray<boolean> = [true, false, true]




const userList: GenericArray<{ name: string, age: number }> = [
    {
        name: 'x',
        age: 22
    },
    {
        name: 'y',
        age: 25
    }
]













type CoOrdinates<x, y> = [x, y]

const coOrdinated1: CoOrdinates<number, number> = [20, 30];
const coOrdinated2: CoOrdinates<string, string> = ["20", "30"]
