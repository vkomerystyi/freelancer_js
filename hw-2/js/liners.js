"use strict"
/* 
//1. Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. Визначити ширину елементів, які повинні бути відображені у цьому рядку.

const widthMonitor = 1920
const countElem = 500

const widthElem = widthMonitor / countElem
console.log("--- ширина елементів")
console.log(Math.round(widthElem * 100) / 100)

//2. З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. Визначити розмір соціальної допомоги (ввжаємо, що заробітна плата є меншою).

const salaryAmount = parseInt(prompt("Розмір заробітної плати"))
const sizeSubsistenceMinimum = parseInt(prompt("Розмір прожиткового мінімуму"))

const socialAssistance = sizeSubsistenceMinimum - salaryAmount
console.log("--- розмір соціальної допомоги")
console.log(socialAssistance)

//3. З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів. Вивести на екран вартість кожного з видів товарів окремо і загальну вартість

const unitCostOne = parseInt(prompt("вартість одиниці 1 товару"))
const unitCostTwo = parseInt(prompt("вартість одиниці 2 товару"))
const numberOfUnitsOne = parseInt(prompt("кількість одиниць 1 товару"))
const numberOfUnitsTwo = parseInt(prompt("кількість одиниць 2 товару"))

const costOffProductOne = unitCostOne * numberOfUnitsOne
const costOffProductTwo = unitCostTwo * numberOfUnitsTwo
const totalCost = costOffProductOne + costOffProductTwo
console.log("--- вартість 1 товару")
console.log(costOffProductOne)
console.log("--- вартість 2 товару")
console.log(costOffProductTwo)
console.log("--- загальна вартість")
console.log(totalCost)

//4. З клавіатури вводиться вік дитини. Вивести на екран через скільки років вона буде відвідувати садочок, піде у школу, закінчить школу, вступить і закінчить

const ageChild = parseInt(prompt("Age ="))

const garden = 3
const school = 6
const university = 17
const endUniversity = 22

const startGarden = garden - ageChild
const startSchool = school - ageChild
const startUniversity = university - ageChild

console.log("--- через років піде в садочок")
console.log(startGarden)
console.log("--- через років піде до школи")
console.log(startSchool)
console.log("--- через років піде до уніврситету")
console.log(startUniversity)

// 5. Визначити, яку платню одержить на фірмі сумісник за виконану роботу, якщо йому нараховано Sum грн., а податок становить 20%.

const salaryWorkDone = parseInt(prompt("sum = "))

const accruedUser = salaryWorkDone - salaryWorkDone * 0.2

console.log("---платню одержить на фірмі")
console.log(accruedUser)
 */
//6. Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином: змінна a набуває значення змінної b, змінна b набуває значення змінної c, а змінна  c – попереднє значення змінної a.

let numA = 5
let numB = 60
let numC = 300

console.log("--- значення змінних")
console.log(`змінна a ${numA}`)
console.log(`змінна b ${numB}`)
console.log(`змінна c ${numC}`)

const temp = numA
numA = numB
numB = numC
numC = temp

console.log("--- алгоритм, який міняє місцями значення цих змінних")
console.log(`змінна a ${numA}`)
console.log(`змінна b ${numB}`)
console.log(`змінна c ${numC}`)

//7. Скласти алгоритм, який обчислює цілу і дробову частину даного числа х. Наприклад: число 23,56  => ціла: 23, дробова: 0,56.

let numX = 23.56

const calculatesTheWhole = Math.floor(numX)
const fractionalPart = numX - calculatesTheWhole

console.log("--- алгоритм, який обчислює цілу і дробову частину даного числа")
console.log(`число: ${numX}  ціла: ${calculatesTheWhole} дробова частина: ${Math.round(fractionalPart * 100) / 100}`)

//8. Розробити програму (не використовувати if), яка за номером року Y визначає номер століття C (врахувати, що початком XX століття був 1901, а не 1900 рік).

const centuryNumber = 1901

const century = Math.ceil(centuryNumber / 100)
console.log("за номером року Y визначає номер століття C")
console.log(century)

//9. Скласти програму для розв’язування задачі: йде N-а секунда доби, визначити скільки повних годин і повних хвилин пройшло до цього моменту.

const second = 351456

const fullMinutes = Math.floor(second / 60)
const fullHours = Math.floor(second / 3600)

console.log("--- повних хвилин пройшло ")
console.log(fullMinutes)
console.log("--- повних годин пройшло ")
console.log(fullHours)

//10. З клавіатури вводиться кількість монет номіналом 1 копійка. Визначити скільки гривень і копійок є у даній сумі . Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок.

const countMoney = 24505

const resultGrnMoney = Math.floor(countMoney / 100)
const resultCopMoney = countMoney % 100
console.log("--- дано 245 копійок, а вивести 2 грн 45 копійок")
console.log(`${resultGrnMoney} грн ${resultCopMoney} копійок`)

//11. Дано поточну кількість годи, хвилин, секунд (як на годиннику). Визначити 1) яка кількість секунд буде на годиннику через N секунд.2) яка кількість хвилин буде на годиннику через N секунд, X хвилин.

const userTimeHour = 12
const userTimeMinute = 12
const userTimeSecond = 12
