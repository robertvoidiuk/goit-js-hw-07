const inputText = document.querySelector('#name-input');
console.log(inputText);

const outputText = document.querySelector('#name-output');
console.log(outputText);

inputText.addEventListener('input', () => {
    const trimmedValue = inputText.value.trim();

    if (trimmedValue !== '') {
        outputText.textContent = trimmedValue;
    } else {
        outputText.textContent = 'Anonymous';
  }
});
