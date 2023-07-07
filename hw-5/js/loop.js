/* Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
 */
console.log("Задача -2")
let evenCount = 0
let oddCount = 0
const minValue = 1
const maxValue = 1000
for (let i = 1; i <= 100; i++) {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
    randomNumber % 2 === 0 ? evenCount++ : oddCount++
}
const result = evenCount > oddCount ? `Парних більше ${evenCount}` : `Непарних більше ${oddCount}`
console.log(result)
console.log("Задача -1")
/* Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8) */
for (let i = 3; i <= 8; i++) {
    const month = i
    console.log(month)
}
/* Задача 0. Вивести на екран 8 кнопок з написом “Hello”. */
const bnt = document.querySelector(".main__button")
for (let i = 0; i < 8; i++) {
    const button = document.createElement("button")
    button.textContent = "Hello " + i
    bnt.append(button)
}
/* 
Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. Приклад:
 */

const divUl = document.querySelector(".main__ul")
const ul = document.createElement("ul")
const userNumber = 5

for (let i = 0; i < userNumber; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    const li = document.createElement("li")
    li.textContent = randomNumber
    ul.append(li)
    divUl.append(ul)
}
/* Задача 2. Створити 10 елементів для введення цін продуктів
 */

const divInput = document.querySelector(".main__input")

for (let i = 0; i < 10; i++) {
    const div = document.createElement("div")
    div.className = "input-body"
    const input = document.createElement("input")
    const text = document.createTextNode(`Product ${i + 1} `)
    div.append(text)
    div.append(input)
    divInput.append(div)
}
/* Задача 3. Вивести таблицю з одним рядком і  7 стовпцями. */
const tableDiv = document.querySelector(".main__table")
const table = document.createElement("table")
table.className = "table-row"
const tr = document.createElement("tr")
for (let i = 0; i < 7; i++) {
    const td = document.createElement("td")
    td.innerText = `${i + 1}`
    tr.append(td)
}
table.append(tr)
tableDiv.append(table)
/* Задача 4. Вивести таблицю з 3 рядків і 7 стовпців */
const tableDiv3 = document.querySelector(".main__table3")
const table3 = document.createElement("table")
table3.className = "table-row"

for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < 7; j++) {
        const td = document.createElement("td")
        td.innerText = `${j + 1}`
        tr.append(td)
    }
    table3.append(tr)
}
tableDiv3.append(table3)
/* Задача 5. Вивести таблицю */
/* Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
 */

const tableDiv5 = document.querySelector(".main__table5")
const table5 = document.createElement("table")
const table6 = document.createElement("table")
const table7 = document.createElement("table")
table5.className = "table-row"
table6.className = "table-row"
table7.className = "table-row"

let countTd = 1

for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < 3; j++) {
        const td = document.createElement("td")
        td.innerText = `${countTd++}`
        tr.append(td)
    }
    table5.append(tr)
}
tableDiv5.append(table5)
for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < 3; j++) {
        const td = document.createElement("td")
        td.innerText = `${countTd++}`
        tr.append(td)
    }
    table6.append(tr)
}
tableDiv5.append(table6)
for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < 3; j++) {
        const td = document.createElement("td")
        td.innerText = `${countTd++}`
        tr.append(td)
    }
    table7.append(tr)
}
tableDiv5.append(table7)
/* Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:
 */
const divSeven = document.querySelector(".main__seven")

for (let i = 0; i < 4; i++) {
    const h1 = document.createElement("h1")
    h1.innerText = `Заголовок ${i + 1}`
    divSeven.append(h1)
    for (let j = 0; j <= i; j++) {
        const p = document.createElement("p")
        const hr = document.createElement("hr")
        p.innerText = `Розділ ${i + 1}. Параграф ${j + 1}`
        divSeven.append(p)
        divSeven.append(hr)
    }
}
/* Задача 8. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm). */
/* const userNumber8 = 7

let a = 3
do {
    const randomComp = Math.floor(Math.random() * 10) + 1
    const ansComp = confirm(`Ваше число ${randomComp}`)
    if (ansComp) {
        break
    }
    a--
} while (a > 0) */
/* Задача 9. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
 */
/* const userNumber9 = 7

do {
    const randomComp = Math.floor(Math.random() * 10) + 1
    const ansComp = confirm(`Ваше число ${randomComp}`)
    if (ansComp) {
        break
    }
    a--
} while (true) */
/* Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.  */

const minInt = 2
const maxInt = 25
let sumInt = 0
for (let i = minInt; i < maxInt; i++) {
    if (i % 2 !== 0) {
        sumInt += i
    }
}
const task10 = document.querySelector(".main__nine")
const h3 = document.createElement("h3")
h3.innerText = sumInt
task10.append(h3)

/* Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
 */
const minInt11 = 2
const maxInt11 = 250
let sumInt11 = 0
let iter = 0
for (let i = minInt11; i < maxInt11; i++) {
    if (i % 2 !== 0) {
        sumInt11 += i
        iter++
        if (iter === 5) {
            break
        }
    }
}
const task11 = document.querySelector(".main__eleven")
const h11 = document.createElement("h3")
h11.innerText = sumInt11
task11.append(h11)
/* Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером). */
console.log("--------------")
const task12 = document.querySelector(".main__twelve")
let countImg1 = 0
let countImg2 = 0
let countImg3 = 0
let countImg4 = 0
for (let i = 0; i < 3; i++) {
    const divImg1 = document.createElement("div")
    divImg1.className = "divImg1"
    const divImg2 = document.createElement("div")
    divImg2.className = "divImg2"
    const divImg3 = document.createElement("div")
    divImg3.className = "divImg3"
    const divImg4 = document.createElement("div")
    divImg4.className = "divImg4"
    let randomImg = Math.floor(Math.random() * 4) + 1
    switch (randomImg) {
        case 1:
            divImg1.innerHTML = `<img src="img/${randomImg}.jpg" alt="">`
            task12.append(divImg1)
            countImg1++
            break
        case 2:
            divImg2.innerHTML = `<img src="img/${randomImg}.jpg" alt="">`
            task12.append(divImg2)
            countImg2++
            break
        case 3:
            divImg3.innerHTML = `<img src="img/${randomImg}.jpg" alt="">`
            task12.append(divImg3)
            countImg3++
            break
        case 4:
            divImg4.innerHTML = `<img src="img/${randomImg}.jpg" alt="">`
            task12.append(divImg4)
            countImg4++
            break
    }
}
/* 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. */
const task13 = document.querySelector(".main__thirteen")
const numN = 1
const numM = 10
let numK = 3

const ship = 1 + Math.floor(Math.random() * (numM - numN + 1))
do {
    const shot = parseInt(prompt(`Постріл в заданий інтервал від ${numN} до ${numM} `))
    if (ship === shot) alert(`Потопив ${ship}`)
    numK--
} while (numK > 0)
task13.append(ship)
/* 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).
 */
