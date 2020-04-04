let toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  document.body.classList.toggle('dark');
})