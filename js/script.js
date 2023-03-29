// Задание№1

let day = +prompt('Когда др?');

if (day >= 1 && day <=10) {

    alert("Первая декада месяца")
    
} else if ( day >= 11 && day <=20) {

    alert("Вторая декада месяца")

}  else if ( day >= 21 && day <=31) {

    alert("Третья декада месяца")
} else {
    alert("НЕ ЗНАЕШЬ СКОЛЬКО ДНЕЙ В МЕСЯЦЕ? ಠ益ಠ")
}

// Задание№2

let name = prompt('Введите Имя').toLowerCase().trim()
if ( name === 'alex') {
    account = +prompt('Номер счета?')
    // +prompt("Номер счета?");

} else  {
    alert("Пользователь не найден, досвидули");
}

// let account = +prompt('Номер счета?')

if (account === 7777) {
    money = +prompt('Сколько обналичить?')
    // +prompt("Сколько обналичить?");

} else {
    alert("СЧЁТ не найден, досвидули");
}

// let money = +prompt('Сколько обналичить?')
let coin = 10000
if (money <= coin) {
    alert(`Все отлично! Баланс: ${money - coin}$`)
} else {
    alert(" Не достаточно средств!")
}


// Задание№3

let nameA = prompt('Введите Имя').trim().toLowerCase()
// let age = +prompt('Сколько лет?')
// let cash = +prompt('Сколько денег?')

if (nameA.slice(0,1) === "a") {
  age = +prompt('Сколько лет?')
    
} else  {
    alert("Пользователь не найден, досвидули")    
}

if (age >= 20 && age <= 40) {
    cash = +prompt('Сколько денег?')
}else {
    alert("Вдругой раз")
}
 
if (cash >=100) {
    alert("Проходишь, а ты богач ;)")
    
} else {
    alert("Заработай денег :(")
}







// Задание№2

// let name = prompt('Введите Имя').toLowerCase().trim()
// let account =  7777                //+prompt('Номер счета?')
// let money = 10000                  //+prompt('Сколько обналичить?')

// if (name === 'alex') { 
//       +prompt("Номер счета?");
//     // account
    
// }else if ( name !== 'alex') {
    
//     alert("Пользователь не найден, досвидули");

// } else if ( account === 7777 ) {
//      +prompt("Сколько обналичить?");
//     //money
    
// } //else if ( name === 'alex' && account !== 7777 ) {

// //     alert("СЧЁТ не найден, досвидули");

// //}
//  else if ( name ==='alex' && account === 7777 && money <= 10000 ) {

//     alert(" Все отлично!")

// } // else if ( name ==='alex' && account === 7777 && money !== 10000 ) {

//    // alert(" Не достаточно средств!")
// //}
// else {
//     alert("GoogBye")
// }

// let name = prompt('Введите Имя').toLowerCase().trim()
// let account = +prompt('Номер счета?')
// let money = +prompt('Сколько обналичить?')

// name === 'alex' ? alert(account) : alert("Пользователь не найден, досвидули")


// account === 7777 ? alert(money) : alert("СЧЁТ не найден, досвидули")


// money <= 10000 ? alert("Все отлично!") :  alert(" Не достаточно средств!")

