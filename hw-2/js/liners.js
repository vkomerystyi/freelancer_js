"use strict"

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

//6. Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином: змінна a набуває значення змінної b, змінна b набуває значення змінної c, а змінна  c – попереднє значення змінної a.
