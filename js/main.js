const elCondition = document.querySelector('.condition');
const elButton = document.querySelector('.toggle-button');

let buttonText = '+';

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}



function toggleText() {
  const x = getRandomNumber();
  const y = getRandomNumber();


  switch (buttonText) {
    case '+':
      buttonText = '-';
      elCondition.textContent = `${x} va ${y} ning ayirmasini hisoblang!`;
      break;
    case '-':
      buttonText = 'x';
      elCondition.textContent = `${x} va ${y} ning ko'paytmasini hisoblang!`;
      break;
    case 'x':
      buttonText = '+';
      elCondition.textContent = `${x} va ${y} ning yig'indisini hisoblang!`;
      break;
    default:
      buttonText = '+';
      elCondition.textContent = `${x} va ${y} ning yig'indisini hisoblang!`;
  }
  elButton.textContent = buttonText;
}
