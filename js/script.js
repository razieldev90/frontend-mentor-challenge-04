let toggle = document.querySelector('.toggle__btn');
toggle.addEventListener('click', () => {
  toggle.parentElement.classList.toggle('active');
  document.body.classList.toggle('dark');
})