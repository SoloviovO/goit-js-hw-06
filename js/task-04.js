const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

// version two

// decrementBtnEl.addEventListener('click', () => {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// });

// incrementBtnEl.addEventListener('click', () => {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// });
