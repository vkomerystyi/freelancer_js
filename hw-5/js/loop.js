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
