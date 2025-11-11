//union\------>> (or)
type UserRole = 'admin' | "user" | "guest" // union

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'admin Dashboarf'
    } else if (role === "user") {
        return 'user Dashboard'
    } else {
        return 'guest'
    }
}

getDashboard('guest')


// intersetion -> (&)
type Employee = {
    id: number,
    name: string,
    phoneNo: string,
};
type Manager = {
    designation: string;
    teamSize: number,
};
type EmployeeManager = Employee & Manager
const ChowdhurySaheb: EmployeeManager = {
    id: 1245,
    name: 'chowdhury',
    phoneNo: '12156',
    designation: 'manager',
    teamSize: 1
}