let data = [
  { id: 802052, name: "Ahmed", age: 22 },
  { id: 8888, name: "Ali", age: 99 },
];
let selectedId = 802052;
let students = [
  { id: 1, name: "Faris Talal", age: 16, mark: 85, school: "Greenwood High" },
  {
    id: 2,
    name: "Ibrahim Taher",
    age: 17,
    mark: 90,
    school: "Blue Valley School",
  },
  {
    id: 3,
    name: "Abdulla Talal",
    age: 16,
    mark: 88,
    school: "Sunrise Academy",
  },
  { id: 4, name: "Shane White", age: 18, mark: 92, school: "Northview High" },
];
// use map to create new arry that has only name
let q1 = students.map((item) => {
  return item.name;
});
console.log(q1);
// use map to create new array with new school value that equal to Sunrise Academy
let q2 = students.map((item) => {
  return { ...item, school: "Sunrise Academy" };
});
console.log(q2);
// use map to change the user that has age of 18 to 21
let q3 = students.map((item) => {
  if (item.age == 18) {
    return { ...item, age: 21 };
  }
});
// use map to add new properity which called passed and the value is true only for mark above 90
// if not above 90 make passed as false
let q4 = students.map((item) => {
  if (item.mark > 90) {
    return { ...item, passed: true };
  } else {
    return { ...item, passed: false };
  }
});

// use map to delete properity school from user with age of 18
let q5 = students.map((item) => {
  if (item.age == 18) {
    delete item.school;
    return item;
  } else {
    return item;
  }
});

// get all the students that has age of 16
let f1 = students.filter((item) => {
  return item.age == 16;
});
console.log(f1, "filter by age");

// delete student that has an id of 3
let selectedID = 3;
let f2 = students.filter((item) => {
  return item.id != selectedID;
});
