const links = [...document.querySelectorAll('.navigation__link')];
const checkbox = document.querySelector('.navigation__checkbox');

links.forEach((link) => {
  link.addEventListener('click', function () {
    checkbox.checked = false;
  });
});
