let buttonText = '+';
const button = document.querySelector('.toggle-button');

function toggleText() {
  switch (buttonText) {
    case '+':
      buttonText = '-';
      break;
    case '-':
      buttonText = 'x';
      break;
    case 'x':
      buttonText = '+';
      break;
    default:
      buttonText = '+';
  }
  button.textContent = buttonText;
}