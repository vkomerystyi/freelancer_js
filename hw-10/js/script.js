//   Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 2000)
const minValue = 1
const maxValue = 2000
function randomPrice(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV
}
function arrayPrice(count, minV, maxV) {
    const arr = []
    for (let i = 0; i < count; i++) {
        arr.push(randomPrice(minV, maxV))
    }
    return arr
}
const priceHistory = arrayPrice(10, minValue, maxValue)
console.log(priceHistory)
//  1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
console.log("Задача 1")
const arrTask1 = [...priceHistory]
const newArrTask1 = arrTask1.filter((elem) => elem > 1000)
console.log(newArrTask1)
// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
console.log("Задача 2")
const arrTask2 = [...priceHistory]
const newArrTask2 = []
for (let i = 0; i < arrTask2.length; i++) {
    if (arrTask2[i] > 1000) newArrTask2.push(i)
}
console.log(newArrTask2)
// 3)Сформувати список з тих цін, які більші за попереднє значення
console.log("Задача 3")
const arrTask3 = [...priceHistory]
const newArrTask3 = []
for (let i = 1; i < arrTask3.length; i++) {
    if (arrTask3[i] > arrTask3[i - 1]) {
        newArrTask3.push(arrTask3[i])
    }
}
console.log(newArrTask3)
// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
console.log("Задача 4")
const arrTask4 = [...priceHistory]
const maxNunTask4 = Math.max(...arrTask4)
const newArrTask4 = arrTask4.map((elem) => {
    if (maxNunTask4 >= elem) {
        return (elem * 100) / maxNunTask4
    }
})
console.log(newArrTask4)
// 5)Підрахувати кількість змін цін
console.log("Задача 5")
const arrTask5 = [1952, 505, 581, 505, 179, 232, 1481, 1175, 1733, 1275]
// не вірно!!! виправити
console.log("не вірно!!! виправити")
let count = 1
for (let i = 1; i < arrTask5.length; i++) {
    if (arrTask5[i] !== arrTask5[i - 1]) count++
}
console.log(count)
// 6)Визначити, чи є ціна, що менше 1000
console.log("Задача 6")
const arrTask6 = [...priceHistory]
const newArrTask6 = arrTask6.some((elem) => elem < 1000)
console.log(newArrTask6)
// 7)Визначати, чи усі ціни більше за 1000
console.log("Задача 7")
const arrTask7 = [...priceHistory]
const newArrTask7 = arrTask7.some((elem) => elem > 1000)
console.log(newArrTask7)
// 8)Підрахувати кількість цін, що більше за 1000
console.log("Задача 8")
const arrTask8 = [...priceHistory]
let count8 = 0
for (const elem of arrTask8) {
    if (elem > 1000) count8++
}
console.log(count8)
// 9)Підрахувати суму цін, що більше за 1000
console.log("Задача 9")
const arrTask9 = [...priceHistory]
const newArrTask9 = arrTask9.reduce((prevValue, elem) => {
    return elem > 1000 ? (prevValue += elem) : prevValue
}, 0)
console.log(newArrTask9)
// 10)Знайти першу ціну, що більше за 1000
console.log("Задача 10")
const arrTask10 = [...priceHistory]
const elem10 = arrTask10.find((elem) => elem > 1000)
console.log(elem10)
// 11)Знайти індекс першої ціни, що більше за 1000
console.log("Задача 11")
const arrTask11 = [...priceHistory]
const index11 = arrTask11.findIndex((elem) => elem > 1000)
console.log(index11)
// 12)Знайти останню ціну, що більше за 1000
console.log("Задача 12")
const arrTask12 = [...priceHistory]
const findLast12 = arrTask12.findLast((elem) => elem > 1000)
console.log(findLast12)
// 13)Знайти індекс останньої ціни, що більше за 1000
console.log("Задача 13")
const arrTask13 = [...priceHistory]
const lastIndex13 = arrTask13.findLastIndex((elem) => elem > 1000)
console.log(lastIndex13)
