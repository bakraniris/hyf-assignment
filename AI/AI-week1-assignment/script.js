const button = document.querySelector('.color-button');
let isDark = false;

button.addEventListener('click', () => {
  if (!isDark) {
    document.body.style.backgroundColor = '#5b2a86';
    isDark = true;
  } else {
    document.body.style.backgroundColor = '#ffd3e6';
    isDark = false;
  }
});
