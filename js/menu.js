(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('menu-button--cross');

    mobileMenuRef.classList.toggle('is-open');
  });
})();
