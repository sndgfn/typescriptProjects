//typeAlias --> type er name diya dilam 

type User = {
    id: number,
    name: {
        firstNAme: string,
        lastNAme: string,
    },
    gender: 'male' | "female",
    contactNo: string,
    adress: {
        division: string,
        city: string,
    }
}

const user1: User = {
    id: 123,
    name: {
        firstNAme: 'MR',
        lastNAme: 'xxxx'
    },
    gender: 'male',
    contactNo: '242412',
    adress: {
        city: 'cattogram',
        division: 'chattogram'
    }
}


const user2: User = {
    id: 12653,
    name: {
        firstNAme: 'MR',
        lastNAme: 'yyy'
    },
    gender: 'female',
    contactNo: '2423544412',
    adress: {
        city: 'pabna',
        division: 'pabna'
    }
}

const user3: User = {
    id: 12635453,
    name: {
        firstNAme: 'MS',
        lastNAme: 'sithi'
    },
    gender: 'female',
    contactNo: '242111112',
    adress: {
        city: 'pabna',
        division: 'pabna'
    }
}

// function
type addFunc = (num1: number, num2: number) => number

const add: addFunc = (nim1, num2) => nim1 + num2;