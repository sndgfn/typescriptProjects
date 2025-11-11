//obj destructuring
const user = {
    id: 123,
    name: {
        firstName: 'myFezba',
        middleName: 'abeddin',
        lastName: "forhadm",
    },
    gender: 'male',
    favcolour: 'pink',
}
// const myFavcolour=user.favcolour
// const myMiddleName=user.name.middleName;
// //destructuring

const { favcolour: myFavouriteColor, name: { middleName } } = user //destruturing er somoy type define kora jabe na 
console.log(myFavouriteColor, middleName)



// array destructuring
const friends = ['karin', 'rahim', 'mahim']

const [,, myBestFriend] = friends;
console.log(myBestFriend)