// let bankAccount={
//     ownerName:"Artem",
//     accountNumber:"123",
//     balance:10000,
//     deposit(){
//         this.balance+=parseInt(prompt("Add salary"));
//         alert(`Ur deposit is ${this.balance}`);
//     } ,  
//     withdraw(){
//         let withdrawSum=prompt("Withdraw sum");
//         if(this.balance>=withdrawSum){
//             this.balance-=withdrawSum;
//             alert(`Ur withdraw is ${withdrawSum}`);
//         }
//         else{
//             alert("Not enough money");
//         }
//         alert(`Ur balance is ${this.balance}`);
//     } 
           
//     }
// document.getElementById('deposit').onclick=function(){
//     bankAccount.deposit();
// }
// document.getElementById('withdraw').onclick=function(){
//     bankAccount.withdraw();
// }







// let weather={
//     temperature:0,
//     humidity: 20,
//     windSpeed:10,
//     tempMethode(){
//          this.temperature = parseFloat(document.getElementById('temp').value)
//     if(this.temperature < 0){
//     alert("температура нижче 0 градусів Цельсія");
//     }
//     else{
//          alert("температура більше 0 градусів або 0");
//     }
// }}


// document.getElementById('tempButton').onclick = function(){
//     weather.tempMethode();
// }



// let user ={
//     name: "Artem",
//     email:"",
//     password:0,
//     login(){
//         this.email= document.getElementById('email').value;
//         this.password= document.getElementById('password').value;
//         if (this.email.length >10 && this.password.length >4){
//             alert(`Вітаємо вас, ${this.name}`);
//         }
//         else{
//             alert("Неправильне iм'я користувача або пароль");
//         }
//     }
// }

// document.getElementById('loginButton').onclick = function(){
//     user.login();
// }




// let movie ={
//     title :'Fighting club',
//     director:'Francis Ford Coppola',
//     year:1999,
//     rating:0,
//     movieMethode(){
//         this.rating= parseFloat(document.getElementById('rating').value)
//         if(this.rating >8){
//             alert(`Title: ${this.title}, rating: ${this.rating}, year: ${this.year}`)
//         }
//         else{
//             alert("Рейтинг менше або дорівнює 8");
//         }
//     }
// }

// document.getElementById('rateButton').onclick = function(){
//     movie.movieMethode();
// }
