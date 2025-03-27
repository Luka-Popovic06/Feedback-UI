'use strict';
const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const btnThree = document.querySelector('.btn-3');
const container = document.querySelector('#container');
const modal = document.querySelector('.modal');
const text = document.querySelector('#text');
const btnModal = document.querySelector('#btn-open-modal');
btnOne.addEventListener('click', function () {
  btnOne.style.backgroundColor = 'rgba(99, 237, 99, 0.849)';
  btnOne.style.color = 'white';
  text.textContent = 'Unhappy';
});
btnTwo.addEventListener('click', function () {
  btnTwo.style.backgroundColor = 'rgba(99, 237, 99, 0.849)';
  btnTwo.style.color = 'white';
  text.textContent = 'Neutral';
});
btnThree.addEventListener('click', function () {
  btnThree.style.backgroundColor = 'rgba(99, 237, 99, 0.849)';
  btnThree.style.color = 'white';
  text.textContent = 'Satisfied';
});

btnModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  container.classList.add('hidden');
});
