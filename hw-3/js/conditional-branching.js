"use strict"
//1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова

/* const nameUser1 = prompt("Введіть ім'я першої дитини")
const nameUser2 = prompt("Введіть ім'я другої дитини")

const countUser1 = parseInt(prompt("Кількість цукерок першої дитини"))
const countUser2 = parseInt(prompt("Кількість цукерок другої дитини"))

if (countUser1 > countUser2) console.log(`${nameUser1} - цукерок є більшe`)
else if (countUser1 === countUser2) console.log(`${nameUser1} і ${nameUser2} кількість однакова`)
else console.log(`${nameUser2} - цукерок є більшe`)
 */
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

//3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби

//4.  клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

//5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

//6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

//7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
