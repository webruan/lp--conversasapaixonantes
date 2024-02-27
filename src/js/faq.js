document.addEventListener("DOMContentLoaded", function() {
  let item = document.querySelectorAll('.q-a');

  item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
      item.forEach(a => a.classList.remove('open'));
      item[index].classList !== 'open'
      ? item[index].classList.add('open')
      : item[index].classList.remove('open');
    });
  });
});