type student={ id: number; name:    string; dateOfBirth: string; class: string }

const addStudentToCourse = <T extends student >(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};

const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
};

const student2 = {
    id: 321,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true,
};
const student3 = {
    id: 444,
    name: "abdur Mahbub",
    isMarried: true,
    dateOfBirth:'11 tarik',
    class:'2'
};



const result = addStudentToCourse(student3);
console.log(result);