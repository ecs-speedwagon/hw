// const first = document.querySelectorAll('#categories .item').length;
// console.log(`У списку ${first} елементів`);


// const categories = document.querySelectorAll('#categories .item');
// categories.forEach( category =>{
//     let heading = category.querySelector('h2').textContent;
//     let elements = category.querySelectorAll('.item li').length;
//     console.log(`Категорія: ${heading}. Кількість елементів: ${elements}`);
    
// })

// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//    ];
// const ulIngradients = document.getElementById('ingredients');

// const items = ingredients.map( ingredient =>{
//     let li = document.createElement('li');
//     li.textContent = ingredient;
//     return li
// })
// ulIngradients.append(...items)




// const images = [
//     {
//      url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'White and Black Long Fur Cat',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Group of Horses Running',
//     },
//    ];

//    const ul = document.getElementById('gallery');
//    let imgs = images.map( img =>`<li><img src="${img.url}" alt="${img.alt}" width="300"></li>`)
//    ul.insertAdjacentHTML('beforeend', imgs);
let counterValue = 0;
let valueEl = document.getElementById('value');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');

buttonIncrement.addEventListener('click', function() {
counterValue +=1;
valueEl.textContent = counterValue;
});
buttonDecrement.addEventListener('click', function() {
    counterValue -=1;
    valueEl.textContent = counterValue;
    });
    