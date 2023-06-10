"use strict"

// 1. Обчислити значення виразів
const userNumFirst = parseInt(prompt("Num a = "))
const userNumSecond = parseInt(prompt("Num b = "))

console.log("1. Обчислити значення виразів")

if (!userNumFirst && !userNumSecond) {
    alert("Введіть числа!")
} else {
    const sumUserNumber = userNumFirst + 12 + userNumSecond
    console.log(sumUserNumber)
}

// 2. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

console.log("2. Знайти суму, добуток та частку двох дійсних чисел")
if (!userNumFirst && !userNumSecond) {
    alert("Введіть числа!")
} else {
    const sumNumber = userNumFirst + userNumSecond
    const multiNumber = userNumFirst * userNumSecond
    const dividendNumber = userNumFirst / userNumSecond
    console.log("--- сума")
    console.log(sumNumber)
    console.log("--- добуток")
    console.log(multiNumber)
    console.log("--- частка")
    console.log(dividendNumber)
}

// 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років

const userYear = parseInt(prompt("Введіть рік народження"))
const year = parseInt(prompt("Введіть поточний рік"))
console.log("3. Знайти кількість років")
if (!userYear && !year) {
    alert("Введіть числа!")
} else {
    const countYear = year - userYear
    console.log("--- кількість років")
    console.log(countYear)
}
// 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

const priceProduct = 256
const countProduct = 12
console.log("4. Знайти загальну вартість та ПДВ (5% від загальної вартості).")

const totalPriceProduct = priceProduct * countProduct
const PDV = totalPriceProduct * 0.05
console.log("--- загальну вартість")
console.log(totalPriceProduct)
console.log("---  ПДВ (5% від загальної вартості)")
console.log(Math.round(PDV * 100) / 100)

// 5. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

const lengthCentimeter = 15

console.log("5. Дано довжину у сантиметрах")
const lengthMeter = lengthCentimeter / 100
console.log("--- скільки це метрів")
console.log(lengthMeter)

const lengthKilometer = lengthCentimeter / 100000
console.log("--- скільки це кілометрів")
console.log(lengthKilometer)

//6. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
console.log("6. Дано кількість секунд, що пройшла від початку доби.")
const second = 980

const minute = second / 60
const hour = second / 60 / 60

console.log("--- скільки це хвилин")
console.log(Math.round(minute * 100) / 100)
console.log("--- скільки це годин ")
console.log(Math.round(hour * 100) / 100)

//7. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

const enterPriceProductOne = parseInt(prompt("Введіть вартість товару 1"))
const numberOfUnitsOne = parseInt(prompt("Кількість товару 1"))

const enterPriceProductTwo = parseInt(prompt("Введіть вартість товару 2"))
const numberOfUnitsTwo = parseInt(prompt("Кількість товару 2"))

const enterPriceProductThree = parseInt(prompt("Введіть вартість товару 3"))
const numberOfUnitsThree = parseInt(prompt("Кількість товару 3"))

console.log(
    "7. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість."
)
const totalPriceProductOne = enterPriceProductOne * numberOfUnitsOne
const totalPriceProductTwo = enterPriceProductTwo * numberOfUnitsTwo
const totalPriceProductThree = enterPriceProductThree * numberOfUnitsThree
const totalPriceAll = totalPriceProductOne + totalPriceProductTwo + totalPriceProductThree
console.log("--- вартість товару 1 ")
console.log(totalPriceProductOne)
console.log("--- вартість товару 2 ")
console.log(totalPriceProductTwo)
console.log("--- вартість товару 3 ")
console.log(totalPriceProductThree)
console.log("--- загальну вартість")
console.log(totalPriceAll)

//8. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

const randomMonth = Math.floor(Math.random() * 12) + 1

const randomDay = Math.floor(Math.random() * (6 + 1))

console.log("8. Знайти суму випадкового номера місяця")
const randomSum = randomMonth + randomDay
console.log("--- сума")
console.log(randomSum)
