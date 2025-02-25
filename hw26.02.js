// let mood ='happy';
// let user={
//     hobby:"Watching TV",
//     premium:"true",
//     mood
// };

// let userDetails = Object.keys(user);
// for (let keys of userDetails){
//     console.log(`${keys}: ${user[keys]}`);
// }


// objectUser={
//     name:"John",
//     age:30,
//     hobby:"reading",
//     isStudent:true
// };
//  function countProps(objectUser){
//     let count=0;
//     for(let key in objectUser){
//         count++;
//     }
//     return count;
//  }
//  console.log(countProps(objectUser));


// let employees={
//     John: 25,
//     Alice: 30,
//     Bob: 35,
// }
// let entries = Object.entries(employees);
// function countTotalSalary(employees){
//     let totalSalary = 0;
//     for(let i = 0; i < entries.length; i++){
//         totalSalary += entries[i][1];
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary(employees));
//  function findBestEmployee(employees){
//     let bestEmployee = entries[0];
//     for(let i = 1; i < entries.length; i++){
//         if(employees[entries[i][0]] > employees[bestEmployee[0]]){
//             bestEmployee = entries[i];
//         }
//     }
//     return bestEmployee;
//  }
//  console.log(findBestEmployee(employees));

// let products =[
//     {name:"Apple", price: 100},
//     {name:"Banana", price: 50},
//     {name:"Orange", price: 70},
//     {name:"Grapes", price: 120},
// ];
// let allProdcuts= Object.entries(products);
// let productName =Object.keys(products);
// function calculateTotalPrice(allProdcuts, productName){
//     let totalPrice = 0;
//     for(let i = 0; i < allProdcuts.length; i++){
//         totalPrice += allProdcuts[i][1].price;
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice(allProdcuts, productName));

// let account={
//     balance: 1000,
//     transactions: [
//         {type: "deposit", amount: 500},
//         {type: "withdrawal", amount: 200},
//         {type: "deposit", amount: 300},
//     ]
// }

// function calculateAccountBalance(account){
//     let totalBalance = account.balance;
//     for(let i = 0; i < account.transactions.length; i++){
//         if(account.transactions[i].type === "deposit"){
//             totalBalance += account.transactions[i].amount;
//         } else {
//             totalBalance -= account.transactions[i].amount;
//         }
//     }
//     return totalBalance;
// }

// console.log(calculateAccountBalance(account));