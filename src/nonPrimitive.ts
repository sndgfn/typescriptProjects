// reference type:object
// const user:{
//     organization:"programming hero";//value takei type hisab a define kortese------>literal types 
//     firstName:string;
//     middleName?:string;//optional type-> thakteo pare nao thakte pare
//     lastName:string;
//     isMarried:boolean;
// }={
//     organization:"programming hero",
//     firstName:'mezba',
//     // middleName:"abedin",
//     lastName:"forhan",
//     isMarried:true,
// }

// user.organization="fireeeeeee"

// console.log(user)


const user:{
    readonly organization:string;//access modifier 
    firstName:string;
    middleName?:string;//optional type-> thakteo pare nao thakte pare
    lastName:string;
    isMarried:boolean;
}={
    organization:"programming hero",
    firstName:'mezba',
    // middleName:"abedin",
    lastName:"forhan",
    isMarried:true,
}

user.organization="fireeeeeee"
