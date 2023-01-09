const inputEl = document.querySelector('#validation-input');
const lengthInputText = inputEl.dataset.length;

inputEl.addEventListener('blur', onChangeInputFocus);

function onChangeInputFocus(event) {
  if (event.currentTarget.value.length == lengthInputText) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
