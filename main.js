// obsługa hamburgera

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelectorAll('.hamburger>.fas').forEach(el => el.classList.toggle('active'))
  document.querySelector('.mobile').classList.toggle('active');
})
