const boxToCreateEl = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy');
const inputAmountEl = document.querySelector('#controls input');

btnCreateEl.addEventListener('click', onBtncreateBoxes);
btnDestroyEl.addEventListener('click', onBtndestroyBoxes);
inputAmountEl.addEventListener('blur', onInputBlurDelete);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onInputBlurDelete() {
  boxToCreateEl.innerHTML = '';
}

function onBtncreateBoxes() {
  createBoxes(Number(inputAmountEl.value));
  inputAmountEl.value = '';
}

function onBtndestroyBoxes() {
  boxToCreateEl.innerHTML = '';
  inputAmountEl.value = '';
}

function createBoxes(amount) {
  let boxArr = [];

  for (let i = 0; i < amount; i += 1) {
    boxArr.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px"></div>`
    );
  }

  boxToCreateEl.insertAdjacentHTML('afterbegin', boxArr.join(''));
}
