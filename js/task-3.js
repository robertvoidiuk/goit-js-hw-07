const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', (event) => refs.span.textContent = event.target.value.trim() || 'Anonymous');

// function onInput(event) {
//     const input = event.target;

//     // refs.span.textContent = input.value.trim() || 'Anonymous';

//     // if (input.value.trim()) {
//     //     refs.span.textContent = input.value.trim()
//     // } else {
//     //     refs.span.textContent = 'Anonymous';
//     // }

//     input.value.trim() ? refs.span.textContent = input.value.trim():refs.span.textContent = 'Anonymous';
// }
