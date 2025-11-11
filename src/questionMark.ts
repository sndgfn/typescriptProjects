// ? --> turnary operator
const biyerJonnoEligible = (age: number) => {
    const result = age >= 21 ? "you are eligible " : "you are not "
    console.log(result)
}
biyerJonnoEligible(20)


// ??--> nullish coalescing operator(null / undefined value er jonno kaj korbe )
const userTheme = undefined;
const selectedTheme = userTheme ?? "light theme"
console.log(selectedTheme)

//test
const isAuthenticated = null
const resultWithTernary = isAuthenticated ? isAuthenticated : 'u are guest'
const resultWithNUllish=isAuthenticated??'uoy are guest'

// ?. -->optional chaining

const user:{
   address:{
    city:string;
    town:string;
    postalCOde?:string;
   }
}={
    address:{
        city:'dhaka',
        town:'banani'
    }
}

const postalCOde=user?.address?.postalCOde //oooptional chaining --> mane value thakteo pare nao thakte pare
console.log(postalCOde)

