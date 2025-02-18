// document.getElementById('print-btn').onclick = function(){
// alert('Hello world');
// }

// document.getElementById('guessBtn').onclick = function(){
//     let num=0; 
//         num = Math.floor(Math.random() * 10) + 1;
//         if (num == parseInt(document.getElementById('guessField').value)){
//             alert('Congratulations! You guessed right');
//             return;
//         }
//         // else if (num > parseInt(document.getElementById('guessField').value)){
//         //     alert('Your guess is too high');
//         // }
//     else{alert('Sorry, but your guess is incorrect. The number was'+ num);
// }}

// const applyCallbackToEachElement=(arr, callback) =>{
//     let newArray =[];
//     for (let i=0; i<arr.length; i++){
//         newArray.push(callback(arr[i]));
//     }
//     return newArray;    
// }
// const arr=[1,2,3,4,5];
// const squareCallback =(num) => num*num; 
//  const result = applyCallbackToEachElement(arr, squareCallback);
//  console.log(result); // [1, 4, 9, 16, 25]

// const calculateDiscountedPrice=(price, discount, callback) =>{
// price = price - (price * (discount/100));
// callback(price);
// }
// const showDiscountedPrice =(price)=>console.log(price) ;
// calculateDiscountedPrice(100,10, showDiscountedPrice);//discounted price: 90