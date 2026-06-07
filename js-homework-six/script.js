// Задание 1.
const users = [
  {
    name: "Alex",
    age: 24,
    isAdmin: false,
  },
  {
    name: "Bob",
    age: 13,
    isAdmin: false,
  },
  {
    name: "John",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Jane",
    age: 20,
    isAdmin: false,
  },
];

users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);

console.log(users);

// Задание 2.
function getUserAverageAge(users) {
  let sumAge = 0;
  for (let i = 0; i < users.length; i++) {
    sumAge += users[i].age;
    averageAge = sumAge / users.length;
  }
  return averageAge;
}

console.log(getUserAverageAge(users));

// Задание 3.
function getAllAdmins(users) {
  const admins = [];
  users.forEach((user) => {
    if (user.isAdmin === true) {
      admins.push(user);
    }
  });
  return admins;
}

console.log(getAllAdmins(users));

// Сделала наперед - ГЕНИЙ
// const getAllAdmins = users.filter(function (users) {
//   return users.isAdmin === true;
// });

// console.log(getAllAdmins);

// Задача 4
function first(arr, n) {
  const lengthArr = arr.length;
  if (lengthArr < n) {
    console.error(`${n} не может быть меньше длины массива ${lengthArr}`);
  }
  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(first([5, 8, 10, 25, 38, 56], 3));
