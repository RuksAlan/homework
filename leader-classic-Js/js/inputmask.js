const input = document.getElementById("phone");

input.addEventListener("input", () => {
  // Удаляем все символы, кроме цифр
  let cleaned = input.value.replace(/\D/g, "");

  // Ограничение длины (например, под российский формат 11 цифр)
  if (cleaned.length > 11) {
    cleaned = cleaned.slice(0, 11);
  }

  // Форматируем номер
  let formatted = "";

  if (cleaned.length > 0) {
    // Например, для российского номера +7 (123) 456-78-90
    // Можно добавить условие, если нужен другой формат
    if (cleaned.startsWith("7")) {
      formatted = "+7 ";
      if (cleaned.length > 1) {
        // Область
        formatted += "(" + cleaned.slice(1, 4) + ") ";
      }
      if (cleaned.length >= 5) {
        // Первая часть номера
        formatted += cleaned.slice(4, 7) + "-";
      }
      if (cleaned.length >= 8) {
        // Вторая часть номера
        formatted += cleaned.slice(7, 9) + "-";
      }
      if (cleaned.length >= 10) {
        // Третья часть номера
        formatted += cleaned.slice(9, 11);
      }
    } else {
      // Можно сделать формат для других стран или оставить только цифры
      formatted = cleaned;
    }
  }

  input.value = formatted;
});
