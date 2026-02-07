let step = 1;

function next() {
  document.querySelector('.screen.active').classList.remove('active');
  step++;
  document.querySelector(`.screen[data-step="${step}"]`).classList.add('active');
}

function wrong() {
  document.body.classList.add('shake');
  setTimeout(() => {
    document.body.classList.remove('shake');
  }, 350);
}