/*
Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
Задача 9. Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
 */
// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
console.log("Задача 1")
const task1 = document.querySelector(".main__task1")
const div1 = document.createElement("div")
const subjectEvaluations = [5, 5, 5, 7, 9, 8, 12, 11]
// знайти середній бал
function getAverageScore(arr) {
    let average = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        average = sum / arr.length
    }
    return average
}
const averageScoreStudent = getAverageScore(subjectEvaluations)
// з'ясувати до якої категорії він відноситься
function findCategoryStudent(arr) {
    let category
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 4) {
            return (category = "двійочник")
        } else if (arr[i] < 7) {
            return (category = "трійочник")
        } else if (arr[i] < 10) {
            return (category = "хорошист")
        } else {
            return (category = "відмінник")
        }
    }
}
const categoryStudent = findCategoryStudent(subjectEvaluations)
div1.innerHTML = `<h3>Середній бал студента</h3>
                <div>${averageScoreStudent}</div>
                <h3>Категорія студента</h3> 
                <div>${categoryStudent}</div>               
    `
task1.append(div1)
// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
console.log("Задача 2")
const numberVisitorsStoreWeek = [40, 10, 25, 5, 30, 40, 5]
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
function countVisitorsLess20(arr) {
    const numberDay = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 20) numberDay.push(i)
    }
    return numberDay
}
const visitorLess20 = countVisitorsLess20(numberVisitorsStoreWeek)
console.log(visitorLess20)
// номери днів, коли кількість відвідувачів була мінімальною;
function numberDayVisitorMin(arr) {
    const number = []
    let min = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
            number.length = 0
            number.push(i)
        } else if (min === arr[i]) {
            number.push(i)
        }
    }
    return number
}
const daysMinVisitor = numberDayVisitorMin(numberVisitorsStoreWeek)
console.log(daysMinVisitor)
// номери днів, коли кількість відвідувачів була максимальною;
function numberDayVisitorMax(arr) {
    const number = []
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
            number.length = 0
            number.push(i)
        } else if (max === arr[i]) {
            number.push(i)
        }
    }
    return number
}
const daysMaxVisitor = numberDayVisitorMax(numberVisitorsStoreWeek)
console.log(daysMaxVisitor)
// загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.
function countVisitorDay(arr, startDay, endDay) {
    let allVisitor = 0
    for (let i = startDay; i < endDay; i++) {
        allVisitor += arr[i]
    }
    return allVisitor
}
const workingDay = countVisitorDay(numberVisitorsStoreWeek, 0, 5)
console.log(workingDay)
const weekendsDay = countVisitorDay(numberVisitorsStoreWeek, 5, 7)
console.log(weekendsDay)
// Задача 3. Дано масив імен учнів. З'ясувати скільки разів зустрічається ім’я «Іван».
console.log("Задача 3")
students = ["Олександр", "Іван", "Михайло", "Олена", "Іван", "Софія", "Максим", "Іван", "Дмитро", "Юлія"]
function startNameStudent(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase() // переводимо в нижній регістр елементи масиву
        if (arr[i][0] === "і") count++
    }
    return count
}
const startNameI = startNameStudent(students)
console.log(startNameI)
// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які:
console.log("Задача 4")
let carNumbers = [
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
// кількість номерів, які починаються на букву «А»;
function startNumber(arr, letter) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase()
        if (arr[i][0] === letter) count++
    }
    return count
}
const countStartA = startNumber(carNumbers, "a")
console.log(countStartA)
// кількість номерів перша і остання літери співпадають;
function firstLastLettersMatch(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === arr[i][arr[i].length - 1]) {
            count++
        }
    }
    return count
}
const matchLetters = firstLastLettersMatch(carNumbers)
console.log(matchLetters)
// кількість номерів які складаються з більше ніш 7 символів;
function moreThanSevenChar(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 7) count++
    }
    return count
}
const moreSevenChar = moreThanSevenChar(carNumbers)
console.log(moreSevenChar)
// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
console.log("Задача 5")
const scoreStudent = [4, 2, 5, 5, 3, 4, 5, 3, 2, 5]
// двійок
function countTwo(arr) {
    count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            count++
        }
    }
    return count
}
const twoCount = countTwo(scoreStudent)
console.log(twoCount)
// кількість хороших оцінок (добре, відмінно);
function countGoodScore(arr) {
    count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3) {
            count++
        }
    }
    return count
}
const goodScore = countGoodScore(scoreStudent)
console.log(goodScore)
// кількість оцінок, які нижче середнього.
function countAverageScore(arr) {
    let average = 0
    let sum = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    average = sum / arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < average) {
            count++
        }
    }
    return count
}
const countAverage = countAverageScore(scoreStudent)
console.log(countAverage)
// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
console.log("Задача 6")
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]
let prices = [10.99, 5.99, 15.49, 8.75, 12.25, 9.99, 7.49, 6.99, 14.99, 11.25]
let names = [
    "Товар 1",
    "Товар 2",
    "Товар 3",
    "Товар 4",
    "Товар 5",
    "Товар 6",
    "Товар 7",
    "Товар 8",
    "Товар 9",
    "Товар 10",
]
const countMoney = 10
function enoughMoneyPrices(arrPrices, moneyUser) {
    let enoughPrises = []
    for (let i = 0; i < arrPrices.length; i++) {
        if (moneyUser >= arrPrices[i]) {
            enoughPrises.push(arrPrices[i])
        }
    }
    return enoughPrises
}
function namesPrices(arrPrices, productName, moneyUser) {
    let namesProd = []
    for (let i = 0; i < arrPrices.length; i++) {
        if (moneyUser >= arrPrices[i]) {
            namesProd.push(productName[i])
        }
    }
    return namesProd
}
let productsPrices = enoughMoneyPrices(prices, countMoney)
console.log(productsPrices)
let productsTitles = namesPrices(prices, names, countMoney)
console.log(productsTitles)
// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
console.log("Задача 7")
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
