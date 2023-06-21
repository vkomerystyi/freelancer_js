"use strict"
/* ---------------------------------------------------------- */
/* - - -  1  - - -  */
/* ---------------------------------------------------------- */

//1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова

const nameUser1 = prompt("Введіть ім'я першої дитини")
const nameUser2 = prompt("Введіть ім'я другої дитини")

const countUser1 = parseInt(prompt("Кількість цукерок першої дитини"))
const countUser2 = parseInt(prompt("Кількість цукерок другої дитини"))

if (countUser1 > countUser2) console.log(`${nameUser1} - цукерок є більшe`)
else if (countUser1 === countUser2) console.log(`${nameUser1} і ${nameUser2} кількість однакова`)
else console.log(`${nameUser2} - цукерок є більшe`)

/* ---------------------------------------------------------- */
/* - - -  2  - - -  */
/* ---------------------------------------------------------- */

//2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

const priceProduct = parseFloat(prompt("Ціна товару"))
const countMoney = parseFloat(prompt("Кількість грошей"))
const ticket = 4
const lessMoney = priceProduct > countMoney
const buyTicket = priceProduct + ticket <= countMoney

if (lessMoney) {
    const rest = priceProduct % countMoney
    alert(`Не вистачає ${rest} грн`)
} else if (buyTicket) {
    const countTicket = Math.floor((countMoney - priceProduct) / ticket)
    const rest = (countMoney - priceProduct) % ticket
    alert(`можете купити ${countTicket} білети за 4 грн решта ${rest} грн`)
} else {
    const rest = countMoney % priceProduct
    alert(`дякую ваша решта ${rest} грн`)
}

/* ---------------------------------------------------------- */
/* - - -  3  - - -  */
/* ---------------------------------------------------------- */

//3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби
//Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются

const maxValue = 5
const minValue = 1
const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue

const userAnswer1 = parseInt(prompt("Введіть перше число"))
if (randomNumber === userAnswer1) {
    alert(`Ви вгадали: ${randomNumber}`)
} else {
    alert(`Не вгадали`)
    const userAnswer2 = parseInt(prompt("Введіть друге число"))
    if (randomNumber === userAnswer2) {
        alert(`Ви вгадали: ${randomNumber}`)
    } else {
        alert(`Спроби скінчились правильна відповідь: ${randomNumber}`)
    }
}

/* ---------------------------------------------------------- */
/* - - -  4  - - -  */
/* ---------------------------------------------------------- */

//4.  клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const ageUser = parseInt(prompt("Вік людини"))

const ageChild = 7
const ageSchool = 17
const ageStudent = 23
const ageWorker = 60

if (ageUser < ageChild) alert("дитина")
else if (ageUser < ageSchool) alert("школярем")
else if (ageUser < ageStudent) alert("студентом")
else if (ageUser < ageWorker) alert("працівником")
else alert("пенсіонером")

/* ---------------------------------------------------------- */
/* - - -  5  - - -  */
/* ---------------------------------------------------------- */

//5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

const userDriveCar = prompt("А - мотоцикл, В - легковий автомобіль, С - вантажний автомобіль")

if (!userDriveCar) alert("Ні чого не ввели")
else if (userDriveCar === "А") alert("мотоцикл")
else if (userDriveCar === "В") alert("легковий автомобіль")
else if (userDriveCar === "С") alert("вантажний автомобіль")
else alert("не має категорії")

/* ---------------------------------------------------------- */
/* - - -  6  - - -  */
/* ---------------------------------------------------------- */

//6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

//7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
