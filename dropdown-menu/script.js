const options = document.querySelector('.options');
const trigger = document.querySelector('.trigger');

trigger.addEventListener('click', () => {
  options.classList.toggle('active');
  options.style = 'pointer-events: all;';
});

document.addEventListener('click', (e) => {
  if (e.target!==trigger) {
    options.classList.remove('active');
  }
});
