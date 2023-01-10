function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBtnClick() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  textColorRandomEl.textContent = hexColor;
}

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('.change-color');
const textColorRandomEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', onChangeColorBtnClick);
