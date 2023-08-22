
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const backButton = document.getElementById('backspace');

let currentValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    currentValue += button.dataset.value;
    display.value = currentValue;
  });
});

equalsButton.addEventListener('click', () => {
  try {
    currentValue = eval(currentValue).toString();
    display.value = currentValue;
  } catch (error) {
    display.value = 'Error';
  }
});

clearButton.addEventListener('click', () => {
  currentValue = '';
  display.value = '';
});

backButton.addEventListener('click', () => {
  currentValue = currentValue.slice(0, -1);
  display.value = currentValue;
});
