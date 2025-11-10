//function
//arrow function , normal function


//normal function
function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}
addNormal(2, 2);


//arrow fnction
const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(3, 3)
// console.log(addArrow(2,5))


//object er moddhe  function--> method
const poorUser = {
    balance: 0,
    addBalance(value: number): number {
        return value + this.balance;
    }
}
poorUser.addBalance(10000)

//array function(map)
 const arr:number[]=[1,4,6];
 const sqrArr=arr.map((element:number) :number=>element*element)
