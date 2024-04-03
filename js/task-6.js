function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
    }

    const controlsDiv = document.getElementById('controls');
    const input = controlsDiv.querySelector('input');
    const createButton = controlsDiv.querySelector('[data-create]');
    const destroyButton = controlsDiv.querySelector('[data-destroy]');
    const boxesDiv = document.getElementById('boxes');

    createButton.addEventListener('click', createBoxes);
    destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
      destroyBoxes();
      const amount = Number(input.value);
      if (amount >= 1 && amount <= 100) {
        const boxes = [];
        for (let i = 0; i < amount; i++) {
          const size = 30 + i * 10;
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = `${size}px`;
          box.style.height = `${size}px`;
          box.style.backgroundColor = getRandomHexColor();
          boxes.push(box);
        }
        boxesDiv.append(...boxes);
        input.value = '';
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    }

    function destroyBoxes() {
      boxesDiv.innerHTML = '';
    }
