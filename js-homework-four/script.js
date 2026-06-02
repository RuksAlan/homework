// Задача 1
function calculateFinalPrice(basePrice, discountProcent, taxRate) {
  const discount = (basePrice * discountProcent) / 100;
  const priceDiscount = basePrice - discount;
  const tax = priceDiscount * taxRate;
  const result = priceDiscount + tax;
  console.log(result);
  return;
}

calculateFinalPrice(100, 10, 0);

// Задача 2
function checkAccess(username, password) {
  if (username === "admin" && password === "123456") {
    console.log("Доступ разрешен");
    return;
  }
  console.log("Доступ запрещен");
  return;
}

checkAccess("admin", "123456");

// Задача 3
function getTimeOfDay(currentTime) {
  if (currentTime <= 5) {
    console.log("Ночь");
    return;
  }
  if (currentTime <= 11) {
    console.log("Утро");
    return;
  }
  if (currentTime <= 17) {
    console.log("День");
    return;
  }
  if (currentTime <= 23) {
    console.log("Вечер");
    return;
  }
  console.log("Некорректное время");
  return;
}

getTimeOfDay(4);

// Задача 4
function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(`Первое четное число: ${i}`);
      return;
    }
  }
  console.log("Четных чисел нет");
  return null;
}

findFirstEven(1, 10);
