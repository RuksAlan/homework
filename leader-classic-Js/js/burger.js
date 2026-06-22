export default class BurgerMenu {
  constructor(config, headerFixedInstance = null) {
    this.config = config;
    this.burgerButton = document.querySelector(`.${this.config.BURGER}`);
    this.burgerMenu = document.querySelector(`.${this.config.HEADER_MENU}`);
    this.html = document.querySelector(`.${this.config.PAGE}`);
    this.headerFixedInstance = headerFixedInstance;
    this.main = document.querySelector(`.${this.config.MAIN}`);

    if (!this.burgerButton || !this.burgerMenu || !this.html) {
      throw new Error("Required DOM elements are missing.");
    }

    this.isMobileView = window.innerWidth <= this.config.BREAKPOINT;

    this.onBurgerClick = this.onBurgerClick.bind(this);
    this.onHtmlClick = this.onBodyClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    this.manageEvents();
    window.addEventListener("resize", this.onWindowResize);
  }

  manageEvents() {
    if (this.isMobileView) {
      this.initEvents();
    } else {
      this.removeEvents();
      this.hideBurgerMenu();
    }
  }

  initEvents() {
    // Click events
    this.burgerButton.addEventListener("click", this.onBurgerClick);
    this.html.addEventListener("click", this.onBodyClick);

    // Touch events
    this.html.addEventListener("touchstart", this.handleTouchStart);
    this.html.addEventListener("touchmove", this.handleTouchMove);
    this.html.addEventListener("touchend", this.handleTouchEnd);
  }

  removeEvents() {
    // Click events
    this.burgerButton.removeEventListener("click", this.onBurgerClick);
    this.html.removeEventListener("click", this.onBodyClick);

    // Touch events
    this.html.removeEventListener("touchstart", this.handleTouchStart);
    this.html.removeEventListener("touchmove", this.handleTouchMove);
    this.html.removeEventListener("touchend", this.handleTouchEnd);
  }

  onWindowResize() {
    const isNowMobileView = window.innerWidth <= this.config.BREAKPOINT;

    if (this.isMobileView !== isNowMobileView) {
      this.isMobileView = isNowMobileView;
      this.manageEvents();
    }
  }

  // Click events
  onBurgerClick() {
    const isOpen = this.burgerButton.classList.toggle(this.config.BURGER_OPEN);
    this.burgerButton.ariaLabel = isOpen
      ? this.config.lABEL.CLOSE
      : this.config.lABEL.OPEN;
    this.burgerButton.ariaExpanded = isOpen;
    this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);
    this.html.classList.toggle(this.config.PAGE_NO_SCROLL, isOpen);

    if (this.main) {
      this.main.style.pointerEvents = isOpen ? "none" : "";
    }

    if (this.headerFixedInstance) {
      if (isOpen) {
        this.headerFixedInstance.removeFixedClass();
      } else {
        this.headerFixedInstance.updateFixedClass();
      }
    }
  }

  hideBurgerMenu() {
    const wasOpen = this.isBurgerMenuOpen();
    this.burgerButton.classList.remove(this.config.BURGER_OPEN);
    this.burgerButton.ariaLabel = this.config.lABEL.OPEN;
    this.burgerButton.ariaExpanded = false;
    this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN);
    this.html.classList.remove(this.config.PAGE_NO_SCROLL);

    if (this.main) {
      this.main.style.pointerEvents = "";
    }

    if (wasOpen && this.headerFixedInstance) {
      this.headerFixedInstance.updateFixedClass();
    }
  }

  isBurgerMenuOpen() {
    return this.burgerMenu.classList.contains(this.config.HEADER_MENU_OPEN);
  }

  onBodyClick(event) {
    const target = event.target;
    const isLinkInMenu = target.classList.contains(this.config.MENU_LINK);
    const isMenuOpen = this.isBurgerMenuOpen();
    const isClickOutsideMenu =
      !target.closest(`.${this.config.HEADER_MENU}`) &&
      !target.closest(`.${this.config.BURGER}`);

    if (
      (isLinkInMenu && window.innerWidth <= this.config.BREAKPOINT) ||
      (isMenuOpen && isClickOutsideMenu)
    ) {
      this.hideBurgerMenu();
    }
  }

  // Touch events
  handleTouchStart(event) {
    if (!this.isBurgerMenuOpen()) return;
    this.touchStartX = event.changedTouches[0].screenX;
    this.burgerMenu.style.transition = "none";
  }

  handleTouchMove(event) {
    if (!this.isBurgerMenuOpen()) return;
    const currentX = event.changedTouches[0].screenX;
    const translateX = Math.max(0, currentX + this.touchStartX);
    this.burgerMenu.style.left = `-${translateX}px`;
  }

  handleTouchEnd(event) {
    if (!this.isBurgerMenuOpen()) return;
    const touchEndX = event.changedTouches[0].screenX;
    const swipeDistance = touchEndX + this.touchStartX;

    this.burgerMenu.style.transition = "";
    this.burgerMenu.style.left = "";

    if (swipeDistance > 70) {
      this.hideBurgerMenu();
    }
  }
}
