// spread --> choray deya b vag kora
// chorano gula k ek kora

const friends = ['ram', 'rahim']

const schoolFriends = ['rahim', "babul", 'jaman']

const collegeFriends = ['smart', "vSmart", 'overSmart']

friends.push(...schoolFriends)///-->scool frnd gula r frnds er moddhe vag kore disi

console.log(friends)

//object a spread
const user = { name: 'mezba', phnNum: "10121" }
const otherInfo = { hobbby: 'outing', color: 'red' };

const userInfo = { ...user, ...otherInfo }
console.log(userInfo)





///rest operator----> chorano data ek kore dey 
const sendInvite = (...friends:string[])=>{
// rest operator is used in friends(...friends)
    friends.forEach((friend:string)=>console.log(`send invite to ${friend}`))
}

sendInvite('pntu','montu','bulbul')
