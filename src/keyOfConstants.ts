// keyof : type operator

type RichPeoplesVehicle = {
  car: string; // key: value
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";// nichertao  same
type Myvehicle2 = keyof RichPeoplesVehicle;

const myVehicle: Myvehicle2 = "ship"; // read the error

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, // key: value
  name: "Mezba",
  address: {
    city: "ctg",
  },
};


const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");