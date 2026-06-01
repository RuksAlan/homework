// Задача 1

let a = 8;

if (a % 2) {
  console.log("Это число нечетное");
} else {
  console.log("Это число четное");
}

// Задача 2

let age = 30;
let tenDiscount = 10;
let twentyDiscount = 20;
let thirtyDiscount = 30;

const discount =
  age < 18
    ? tenDiscount
    : age >= 18 && age <= 65
      ? twentyDiscount
      : age > 65
        ? thirtyDiscount
        : "Ого, вы крутой пенсионер";

console.log(`Ваша скидка составляет ${discount}%`);

// Задача 3
const username = prompt("Ваш логин");
const password = +prompt("Ваш пароль");

if ((username === "admin" || username === "user") && password === "123456") {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// Задача 4*
// const weight = +prompt("Вес посылки(в килограммах)");

// if (weight <= 0 || isNaN(weight)) {
//   console.log("Некорректный вес посылки");
// } else {
//   const deliveryType = prompt("Тип доставки (Стандарт, Экспресс, Премиум)");
//   const baseCost = weight <= 1 ? 5 : weight <= 5 ? 10 : 15;
//   let koef = 0;

//   switch (deliveryType) {
//     case "Стандарт":
//       koef = 1;
//       break;
//     case "Экспресс":
//       koef = 1.5;
//       break;
//     case "Премиум":
//       koef = 2;
//       break;
//     default:
//       console.log("Неверный тип доставки");
//       koef = 0;
//   }

//   if (koef !== 0) {
//     const result = baseCost * koef;
//     alert(`Итоговая стоимость доставки: ${result}$`);
//   }
// }
