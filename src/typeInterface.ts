type User = {
    name: string;
    age: number
};

// interface sudhu object type datatype a kaj korbe :array , obj ,and function --> interface type extend korte kaje lage 
interface Iuser {
    name: string;
    age: number;
}

type Role = {
    role: 'admin' | "user"
}
type UserWithRole = User & Role

interface IUserWithRole extends Iuser {
    role: 'admin' | 'user';
}




const user1: User = {
    name: 'kasem',
    age: 24
}

const user2: UserWithRole = {
    name: 'babul,',
    age: 20,
    role: 'user', //akhon role na dile mind korbe .karon type hisab a UserWithRole use korsi 
}



// function
type Add = (num1: number, num2: number) => number

interface IAdd {
    (num1: number, num2: number): number

}

const add: IAdd = (num1, num2) => num1 + num2