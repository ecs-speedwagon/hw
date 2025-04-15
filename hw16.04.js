// const red = document.querySelector('.red');
// const white = document.querySelector('.white');
// const green = document.querySelector('.green');
// const body = document.body;
// function radioCheckedHandler(){
//     if(red.checked){
//         body.style.backgroundColor = 'red';
//     }
//     else if(white.checked){
//         body.style.backgroundColor = 'white';
//     }
//     else if(green.checked){
//         body.style.backgroundColor = 'green';
//     }
// };
// red.addEventListener('change', radioCheckedHandler);
// white.addEventListener('change', radioCheckedHandler);
// green.addEventListener('change', radioCheckedHandler);
// const radioButtons = document.querySelectorAll('input[type="radio"]');
// radioButtons.forEach(item => item.addEventListener('change', radioCheckedHandler));



// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');
// nameInput.addEventListener('input', () => {
// if(nameInput.value){
//     nameOutput.textContent = nameInput.value;
// }
// else{
//     nameOutput.textContent = 'незнайомець';
// }
// })
// const validInput = document.querySelector('#validation-input');
// validInput.addEventListener('input', () => {
//     if(validInput.value.length === 6){
//         validInput.classList.add('valid');
//         validInput.classList.remove('invalid');
//     }
//     else{
//         validInput.classList.remove('valid');
//         validInput.classList.add('invalid');
//     }
// })   
// const controle = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// controle.addEventListener('input', () => {
//     text.style.fontSize = `${controle.value}px`;
// })