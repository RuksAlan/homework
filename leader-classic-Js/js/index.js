import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import CountdownTimer from "./CountdownTimer.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE: "page",
      PAGE_NO_SCROLL: "page--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 1012,
    },
    headerFixed,
  );
} catch (error) {
  console.error(error);
}

const elDays = document.querySelector(".timer__days");
const elHours = document.querySelector(".timer__hours");
const elMinutes = document.querySelector(".timer__minutes");
const elSeconds = document.querySelector(".timer__seconds");

// Конечная дата
const now = new Date();
const deadline = new Date(`${now.getFullYear()}-06-31T23:59:59`);

// Создание нового таймера
const timer = new CountdownTimer(
  deadline,
  (time) => {
    elDays.textContent = time.days;
    elHours.textContent = time.hours;
    elMinutes.textContent = time.minutes;
    elSeconds.textContent = time.seconds;
    elDays.dataset.title = time.daysTitle;
    elHours.dataset.title = time.hoursTitle;
    elMinutes.dataset.title = time.minutesTitle;
    elSeconds.dataset.title = time.secondsTitle;
  },
  () => {
    document.querySelector(".timer").textContent = "Акция закончилась!";
  },
);
