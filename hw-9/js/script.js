// 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
console.log("задача 1")
const userArrNum1 = 5
const arrUser1 = new Array(userArrNum1)
arrUser1.fill(0)
console.log(arrUser1)
// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
console.log("задача 2")
const userArrNum2 = 10
const secondHalf = Math.round(userArrNum2 / 2)
const arrUser2 = new Array(userArrNum2)
arrUser2.fill(0)
arrUser2.fill(1, secondHalf)
console.log(arrUser2)
// 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
console.log("задача 3")
const userArrNum3 = 12
const arrUser3 = new Array(userArrNum3)
arrUser3.fill(1, 0, 5)
arrUser3.fill(7, 5)
console.log(arrUser3)
// Тут використати цикл for..of
// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100

const arrUser4 = [123, 135, 256, 12, 356, 55, 69, 65, 78, 12, 99]
const arrUser4new = []
for (const elem of arrUser4) {
    if (elem > 100) arrUser4new.push(elem)
}
console.log(arrUser4new)
// 5.Дано масив елементів. Знайти добуток додатних елементів
console.log("задача 5")
const arrUser5 = [1, -135, 256, 12, 356, -55, 69, -65, 78, -12, 99]
let product = 1
for (const elem of arrUser5) {
    if (elem > 0) {
        product *= elem
    }
}
console.log(product)
// 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
console.log("задача 6")
const arrUser6 = [120, 130, 250, 12, 350, 55, 70, 65, 80, 10, 100]
arrUser6.forEach((elem, index, arrRef) => {
    if (elem > arrRef[0]) {
        arrRef[index] *= 2
    }
})
console.log(arrUser6)

// 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 100 грн. дати 30% знижки.
console.log("задача 7")
const arrUser7 = [120, 130, 250, 12, 350, 55, 70, 65, 80, 10, 100]
arrUser7.forEach((elem, index, arrRef) => {
    if (elem > 100) {
        arrRef[index] *= 0.7
    }
})
console.log(arrUser7)
// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
console.log("задача 8")
const carNumbers = [
    "AB1234BA",
    "CD567D",
    "EF9101FE",
    "GH2345GY",
    "AB1235AS",
    "KL14KL",
    "MN568NM",
    "OP9101PO",
    "QR25QR",
    "ST6789AT",
]
const startNumberA = carNumbers.filter((elem) => elem[0] === "A")
console.log(startNumberA)
// 9. Дано масив імен. Сформувати масив з перших літер цих імен.
console.log("задача 9")
const arrName = ["ABBA", "CDD", "EFFE", "GHGY", "ABAS", "KLKL", "MNM", "OPPO", "QRR", "STAT"]
const newArrName = arrName.map((elem) => elem[0])
console.log(newArrName)
// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
console.log("задача 10")
const arrUser10 = [120, 130, 250, 12, 350, 55, 70, 65, 80, 10, 100]
const newArrUser10 = arrUser10.map((elem) => elem * 0.2)
console.log(newArrUser10)
