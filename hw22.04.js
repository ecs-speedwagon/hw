const gallery = document.querySelector('ul');
document.addEventListener('keydown', event =>{
    event.preventDefault();
    if(event.code === 'KeyX'){;
        gallery.scrollBy({
            left: 300
     
        });}
        else if(event.code === 'KeyZ'){;
            gallery.scrollBy({
                left: -300

            });  
    }
});

// const input = document.querySelector('input');
// const box = document.getElementById('boxes');
// const renderButton = document.querySelector('[data-action="render"]');
// const destroyButton = document.querySelector('[data-action="destroy"]');
// renderButton.addEventListener('click',() => {
//    let amount =parseInt(input.value);
   
//    if(!isNaN(amount) && amount >0){
//     for(let i= 0; i < amount; i++){
//         const crBox = document.createElement("div");
//             crBox.style.width= `${30 + i * 10}px`;
//             crBox.style.height= `${30 + i * 10}px`;
//             crBox.style.margin = "5px";
//             crBox.style.borderRadius = "8px";
//             crBox.style.backgroundColor =`#${Math.floor(Math.random()*16777215).toString(16)}`;
//         box.append(crBox);
//     }}
// })
// destroyButton.addEventListener('click', ()=>{
// box.innerHTML = '';
// })