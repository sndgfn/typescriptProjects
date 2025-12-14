"use strict";
// spread --> choray deya b vag kora
// chorano gula k ek kora
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ['ram', 'rahim'];
const schoolFriends = ['rahim', "babul", 'jaman'];
const collegeFriends = ['smart', "vSmart", 'overSmart'];
friends.push(...schoolFriends); ///-->scool frnd gula r frnds er moddhe vag kore disi
console.log(friends);
//object a spread
const user = { name: 'mezba', phnNum: "10121" };
const otherInfo = { hobbby: 'outing', color: 'red' };
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
///rest operator----> chorano data ek kore dey 
const sendInvite = (...friends) => {
    // rest operator is used in friends(...friends)
    friends.forEach((friend) => console.log(`send invite to ${friend}`));
};
sendInvite('pntu', 'montu', 'bulbul');
//# sourceMappingURL=spreadAndRest.js.map