'use strict';
const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const btnThree = document.querySelector('.btn-3');
const container = document.querySelector('#container');
const modal = document.querySelector('.modal');
const text = document.querySelector('#text');
const btnModal = document.querySelector('#btn-open-modal');
let feedback = '';

function buttonLog(btnAll) {
  btnAll.style.backgroundColor = 'rgba(99, 237, 99, 0.849)';
  btnAll.style.color = 'white';
  if (btnAll === btnOne) {
    feedback = 'Unhappy';
  } else if (btnAll === btnTwo) {
    feedback = 'Neutral';
  } else {
    feedback = 'Satisfied';
  }
  text.textContent = feedback;
}
btnOne.addEventListener('click', function () {
  buttonLog(btnOne);
});
btnTwo.addEventListener('click', function () {
  buttonLog(btnTwo);
});
btnThree.addEventListener('click', function () {
  buttonLog(btnThree);
});

btnModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  container.classList.add('hidden');
});
