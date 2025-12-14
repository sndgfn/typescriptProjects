"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === 'admin') {
        return 'admin Dashboarf';
    }
    else if (role === "user") {
        return 'user Dashboard';
    }
    else {
        return 'guest';
    }
};
getDashboard('guest');
const ChowdhurySaheb = {
    id: 1245,
    name: 'chowdhury',
    phoneNo: '12156',
    designation: 'manager',
    teamSize: 1
};
//# sourceMappingURL=unionAndIntersection.js.map