// Задача 1.
// const number = +prompt("Введите число для проверки на чётность");

// if (number % 2 === 0) {
//   console.log(`${number} является чётным числом`);
// } else {
//   console.log(`${number} является нечётным числом`);
// }

// Задача 2. Вариант с тернарным оператором.
// const age = +prompt("Ваш возраст");
// const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
// console.log(`Размер скидки: ${discount}%`);

// Задача 2. Вариант с switch-case.
// const age = +prompt("Ваш возраст");
// let discount = 0;

// switch (true) {
//   case age < 18:
//     discount = 10;
//     break;
//   case age <= 65:
//     discount = 20;
//     break;
//   case age > 65:
//     discount = 30;
//     break;
//   default:
//     discount = 0;
// }

// console.log(`Размер скидки: ${discount}%`);

// Задача 3.
// const username = prompt("Введите имя пользователя:");
// const password = prompt("Введите пароль:");

// if ((username === "admin" || username === "user") && password === "123456") {
//   alert("Доступ разрешен");
// } else {
//   alert("Доступ запрещен");
// }

// Задача 4.
const weight = +prompt("Введите вес посылки (в кг):");

if (weight <= 0 || isNaN(weight)) {
  alert("Некорректный вес посылки");
} else {
  const deliveryType = prompt(
    "Введите тип доставки (Стандарт, Экспресс, Премиум):",
  );

  const baseCost = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
  let coefficient = 0;

  switch (deliveryType) {
    case "Стандарт":
      coefficient = 1;
      break;
    case "Экспресс":
      coefficient = 1.5;
      break;
    case "Премиум":
      coefficient = 2;
      break;
    default:
      alert("Неверный тип доставки");
      coefficient = 0;
  }

  if (coefficient !== 0) {
    const finalCost = baseCost * coefficient;
    alert(`Итоговая стоимость доставки: ${finalCost}$`);
  }
}
