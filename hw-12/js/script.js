/*

Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
 */

const minValue = 0
const maxValue = 100

function randomNun(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV
}
function randomArray(countNun, min, max) {
    const arr = []
    for (let i = 0; i < countNun; i++) {
        arr.push(randomNun(min, max))
    }
    return arr
}
const randomArrNumber = randomArray(30, minValue, maxValue)
console.log(randomArrNumber)
const arrTask1 = [...randomArrNumber]
// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
function sortBubble(arr) {
    let isNum
    let count = 0
    do {
        isNum = false
        for (let i = 1; i <= arr.length - 1; i++) {
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = temp
                count++
                isNum = true
            }
        }
    } while (isNum)
    return count
}
console.log("Підрахувати скільки було обмінів під час сортування бульбашкою")
console.log(sortBubble(arrTask1))

// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.