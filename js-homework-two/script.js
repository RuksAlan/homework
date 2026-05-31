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
const userName = prompt("Ваш логин");
const userPassword = +prompt("Ваш пароль");

const admin = "admin";
const user = "user";
const password = 123456;

switch (userName && userPassword) {
  case admin:
  case user:
  case password:
    console.log("Доступ разрешен");
    break;
  default:
    console.log("Доступ запрещен");
}

// Задача 4*
const weight = +prompt("Вес посылки(в килограммах)");
const deliveryType = prompt("Тип доставки");
let delivery = ["Стандарт", "Экспресс", "Премиум"];

if (weight <= 0) {
  console.log("Некорректный вес посылки");
} else if (deliveryType !== delivery) {
  console.log("Неверный тип доставки");
}

const costSmall = 5;
const costMedium = 10;
const costLarge = 15;

const baseCost =
  weight < 1
    ? costSmall
    : weight >= 1 && weight <= 5
      ? costMedium
      : weight > 5
        ? costLarge
        : "Больше скидки нет(";

const koef = (delivery = "Стандарт"
  ? 1
  : (delivery = "Экспресс" ? 1.5 : (delivery = "Премиум" ? 2 : "Пу-пу-пу")));

const result = baseCost * koef;

alert(`Итоговая стоимость доставки: ${result}$`);
