let toggle = document.getElementById('toggle');
let body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});