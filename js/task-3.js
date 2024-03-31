const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', () => {
    const trimmedValue = inputText.value.trim();

    if (trimmedValue !== '') {
        outputText.textContent = trimmedValue;
    } else {
        outputText.textContent = 'Anonymous';
  }
});
