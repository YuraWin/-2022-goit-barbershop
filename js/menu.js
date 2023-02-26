(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const links = document.querySelector('[data-links]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('menu-button--cross');

    mobileMenuRef.classList.toggle('is-open');
  });

  links.addEventListener('click', () => {
    menuBtnRef.classList.toggle('menu-button--cross');
    mobileMenuRef.classList.toggle('is-open');
  });
})();
