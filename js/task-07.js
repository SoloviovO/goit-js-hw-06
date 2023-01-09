const inputEl = document.querySelector('#font-size-control');
const inputTextEl = document.querySelector('#text');

inputEl.addEventListener('input', onFontSizeTextChange);

function onFontSizeTextChange(event) {
  inputTextEl.style.fontSize = event.currentTarget.value + 'px';
}
