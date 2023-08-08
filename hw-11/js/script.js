/* 
Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
 */
const min = 1
const max = 100
function randomNum(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV
}
function multiArray(rows, columns, minV, maxV) {
    const arr = []
    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < columns; j++) {
            const numRand = randomNum(minV, maxV)
            row.push(numRand)
        }
        arr.push(row)
    }
    return arr
}
const startArray = multiArray(4, 4, min, max)
console.log("Задача 1. Знайти суми елементів у вказаній області")
const arrTask1 = JSON.parse(JSON.stringify(startArray))
console.log(arrTask1)
// Задача 1. Знайти суми елементів у вказаній області
// 1) перша четверть: 1/4
console.log("перша четверть: 1/4")
let sum1 = 0
for (let i = 0; i < arrTask1.length / 2; i++) {
    for (let j = 0; j < arrTask1[i].length / 2; j++) {
        sum1 += arrTask1[i][j]
    }
}
console.log("Сума 1")
console.log(sum1)
// 2) друга четверть: 2/4
console.log("2) друга четверть: 2/4")
let sum2 = 0
for (let i = 0; i < arrTask1.length / 2; i++) {
    for (let j = arrTask1[i].length / 2; j < arrTask1[i].length; j++) {
        sum2 += arrTask1[i][j]
    }
}
console.log("Сума 2")
console.log(sum2)
// 3) третя чверть: 3/4
console.log("3) третя чверть: 3/4")
let sum3 = 0
for (let i = arrTask1.length / 2; i < arrTask1.length; i++) {
    for (let j = 0; j < arrTask1[i].length / 2; j++) {
        sum3 += arrTask1[i][j]
    }
}
console.log("Сума 3")
console.log(sum3)
// 4) четверта четверть: 4/4
console.log("4) четверта четверть: 4/4")
let sum4 = 0
for (let i = arrTask1.length / 2; i < arrTask1.length; i++) {
    for (let j = arrTask1[i].length / 2; j < arrTask1[i].length; j++) {
        sum4 += arrTask1[i][j]
    }
}
console.log("Сума 4")
console.log(sum4)
// 5) Суму парних рядків
console.log("5) Суму парних рядків")
let sum5 = 0
for (let i = 0; i < arrTask1.length; i++) {
    for (let j = 0; j < arrTask1[i].length; j++) {
        if (i % 2 === 0) {
            sum5 += arrTask1[i][j]
        }
    }
}
console.log("Сума 5")
console.log(sum5)
// 6) Суму непарних стовпців
console.log("6) Суму непарних стовпців")
let sum6 = 0
for (let i = 0; i < arrTask1.length; i++) {
    for (let j = 0; j < arrTask1[i].length; j++) {
        if (j % 2 !== 0) {
            sum6 += arrTask1[i][j]
        }
    }
}
console.log("Сума 6")
console.log(sum6)
// 7) У парних рядках – непарні стовпці, у непарних – парні.
console.log("7) У парних рядках – непарні стовпці, у непарних – парні.")
let sum7 = 0
for (let i = 0; i < arrTask1.length; i++) {
    for (let j = 0; j < arrTask1[i].length; j++) {
        if (i % 2 === 0 && j % 2 !== 0) {
            sum7 += arrTask1[i][j]
        }
        if (i % 2 !== 0 && j % 2 === 0) {
            sum7 += arrTask1[i][j]
        }
    }
}
console.log("Сума 7")
console.log(sum7)
// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти
const shopK = multiArray(5, 7, min, max)
console.log(shopK)
// 1) загальний прибуток кожного масиву за тиждень;
function allPriceWeek(arr) {
    const weekAllPrice = []
    for (const shop of arr) {
        let totalPrice = 0
        for (const price of shop) {
            totalPrice += price
        }
        weekAllPrice.push(totalPrice)
    }
    return weekAllPrice
}
const task2_1 = allPriceWeek(shopK)
console.log("1) загальний прибуток кожного масиву за тиждень;")
console.log(task2_1)
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
function allProductShop(arr, day) {
    const totalProduct = []
    let product = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === day) product += arr[i][j]
        }
    }
    totalProduct.push(product)
    return totalProduct
}
const task2_2 = allProductShop(shopK, 0)
console.log(
    "2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);"
)
console.log(task2_2)
// 3) загальний прибуток за робочі дні
function allProductShopPeriod(arr, startDay, endDay) {
    const totalProduct = []
    for (let i = 0; i < arr.length; i++) {
        let product = 0
        for (let j = 0; j < arr[i].length; j++) {
            if (j >= startDay && j <= endDay) product += arr[i][j]
        }
        totalProduct.push(product)
    }
    return totalProduct
}
const task2_3 = allProductShopPeriod(shopK, 0, 4)
console.log("3) загальний прибуток за робочі дні")
console.log(task2_3)
// 4) загальний прибуток за вихідні дні
console.log("4) загальний прибуток за вихідні дні")
const task2_4 = allProductShopPeriod(shopK, 5, 6)
console.log(task2_4)
// 5) максимальний прибуток за середу
function maxProductWednesday(arr, day) {
    const maxProduct = []
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === day) {
                if (max < arr[i][j]) {
                    max = arr[i][j]
                }
            }
        }
    }
    maxProduct.push(max)
    return maxProduct
}
console.log("5) максимальний прибуток за середу")
const task2_5 = maxProductWednesday(shopK, 2)
console.log(task2_5)
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
function allListFilter(arr, filter) {
    const list = []
    for (const rows of arr) {
        for (const col of rows) {
            if (col > filter) list.push(col)
        }
    }
    return list
}
console.log("6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200")
const task2_6 = allListFilter(shopK, 80)
console.log(task2_6)
// 7) відсортувати кожен тиждень за зростанням
console.log("7) відсортувати кожен тиждень за зростанням")
const arrTask2_7 = JSON.parse(JSON.stringify(shopK))
function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((el1, el2) => el1 - el2)
    }
    return arr
}
const task2_7 = sortArr(arrTask2_7)
console.log(task2_7)
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
const arrTask2_8 = JSON.parse(JSON.stringify(shopK))
console.log(" 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні")
function sortArrTask2_8(arr) {
    return arr.sort((el1, el2) => Math.max(...el1) - Math.max(...el2))
}
// const task2_8 = sortArrTask2_8(arrTask2_8)
// console.log(task2_8)
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
const arrTask2_9 = JSON.parse(JSON.stringify(shopK))
console.log("9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку ")

// Функція для обчислення суми елементів у рядку
const calculateSum = (row) => row.reduce((acc, val) => acc + val, 0)

// Використовуємо метод sort() з власною функцією порівняння за сумою рядка
arrTask2_9.sort((rowA, rowB) => calculateSum(rowB) - calculateSum(rowA))

console.log(arrTask2_9)
