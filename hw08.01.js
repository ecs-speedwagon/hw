// const selectDrink= document.getElementById('select');
// selectDrink.addEventListener('change', () => {
// const selectVal= selectDrink.value;

//     let coffe =(document.getElementsByClassName('coffe').value);
//     let tea =(document.getElementsByClassName('tea').value);
//     let juice =(document.getElementsByClassName('juice').value);
  
//     switch(selectVal){
//         case "coffe":
//             alert('Ви обрали каву');
//             break;
//         case "tea":
//             alert("Ви обрали чай");
//             break;
//         case "juice": 
//             alert("Ви обрали сік");
//             break;
//         default:
//             alert("Ви нічого не обрали");
//     }

// })


// ------------2----------

// document.getElementById('btn').onclick = function(){
// let sigma =(document.getElementById('input-sigma').value)
// switch(sigma){
//     case "понеділок" || "вівторок" || "середа" || "четвер" || "пятниця":
//         alert("Це робочий день");
//         break;
//     case "Субота" || "Неділя":
//         alert("Вихідний");
//         break;
//     default: alert("НЕ то")
// }
// }





// ---------3---------
// document.getElementById('month-btn').onclick=function(){
// let monthSigmo =Number(document.getElementById('month').value)
// switch(true){
//     case monthSigmo == 1 || monthSigmo == 2 || monthSigmo==12:
//         alert("Зима");
//         break;
//     case monthSigmo == 3 || monthSigmo == 4 || monthSigmo==5:
//         alert("Весна");
//         break;
//     case monthSigmo == 6 || monthSigmo == 7 || monthSigmo==8:
//         alert("Літо");
//         break;
//     case monthSigmo == 9 || monthSigmo == 10 || monthSigmo==11:
//         alert("осінь");
//         break;
//         default:
//             alert("Такого місяця немає")
// }
// }


// ----------------4---------------
// document.getElementById('month-btn').onclick=function(){
//     let monthSigmo =Number(document.getElementById('month').value)
//     switch(true){
//         case monthSigmo%2 === 0 &&  monthSigmo !== 2:
//             alert("31 день");
//             break;
//          case monthSigmo === 8:
//              alert("31 день");
//              break;
//         case monthSigmo%2 !== 0:
//             alert("30 днів");
//             break;

//         case monthSigmo === 2:
//             alert("29");
//             break;
        
//             default:
//                 alert("Такого місяця немає")
//     }
//     }
    
// -----------------5-------------
// document.getElementById('color-btn').onclick=function(){
//     let color =(document.getElementById('color-input').value)
//     switch (color){
//         case "Червоний":
//             alert("стоп");
//             break;
//         case "Зелений":
//             alert("йти");
//             break;
//         case "жовтий":
//             alert("чекати");
//             break;
//         default: 
//         alert("Ви ввели не то");
//     }
// }


// ----------------last one------------
// let result = "";

// document.getElementById('number-btn').onclick=function(){

//     const selectAct= document.getElementById('select');
//     let plus =(document.getElementById('plus').value);
//     let minus =(document.getElementById('minus').value);
//     let multiply =(document.getElementById('multiply').value);
//     let divide =(document.getElementById('divide').value);
//     let firstInput = Number(document.getElementById('first-number').value);
//     let secondInput = Number(document.getElementById('second-number').value);
// switch(selectAct){
//     case plus:
//         result = firstInput +secondInput;
//         alert(result);
//     break;
//     case minus:
//          result = firstInput -secondInput;
//          alert(result);
//      break;
//     case multiply:
//         result = firstInput *secondInput;
//         alert(result);
//     break;
//     case divide:
//         result = firstInput /secondInput;
//         alert(result);
//     break;    
//     default: 
//     alert("Ви не обрали щось")
// }
// }

