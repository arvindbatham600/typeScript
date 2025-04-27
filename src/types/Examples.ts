// union
// Let’s say you want to print the id of a user, which can be a number or a string.

type Id = string | number;

const printId = (id: Id) => {
  console.log("Your Id is ", id);
};

printId("21"); // string
printId(22); // number






// intersection
// What if you want to create a type that has every property of multiple types/ interfaces

type Employee = {
  name: string;
  startDate: Date;
};
interface Manager {
  name: string;
  department: string;
}

type teamLead = Employee & Manager;

const Lead: teamLead = {
  name: "arvind",
  startDate: new Date(),
  department: "Software Developer",
};

