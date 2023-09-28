/* Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
----- Властивості ------
назва компанії на час розробки (назву періодично змінюють)
власник компанії
споснсори (масив спонсорів)
            * прізвище спонсора
            * ім’я  спонсора
            * сума вкладень спонсора
рік випуску
вартість сайту
Знайти:
1) загальну вартість усіх сайтів
2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
5) знайти рік, коли прибуток був найбільшим
6) упорядкувати список за спаданням прибутку
7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
//====================================================
Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
//=================================
Задача 3. Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари) 

(весь текст масиву, що в кінці документу скопіюєте в код). 
1) Загальну вартість (нові ціни - price)
2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
3) Товари, які доступні (sell_status:"available")
4) сформувати новий список об”єктів тільки доступних  для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)
*/

/* ===================== */
// Задача. Дано список книг (назва, автор, рік видання, вартість, кількість одиниць).
const booksList = [
    {
        title: "Title 0",
        author: "Author 0",
        year: 2000,
        price: 2000,
        count: 100,
    },
    {
        title: "Title 1",
        author: "Author 1",
        year: 2001,
        price: 10000,
        count: 200,
    },
    {
        title: "Title 2",
        author: "Author 2",
        year: 2005,
        price: 200,
        count: 20,
    },
    {
        title: "Title 3",
        author: "Author 3",
        year: 2010,
        price: 20000,
        count: 1,
    },
]
// кількість книг, що було видано після 2000 року
const countBookAfter2000 = booksList.reduce((prevNum, book) => (book.year > 2000 ? prevNum + book.count : prevNum), 0)
console.log(countBookAfter2000)
// знайти загальну вартість кожної із книг
const allPriceEveryBook = booksList.map((book) => book.price * book.count)
console.log(allPriceEveryBook)
// знайти загальну вартість усіх книг
const allPriceBook = booksList.reduce((prevSum, book) => prevSum + book.price * book.count, 0)
console.log(allPriceBook)
// визначити, чи є книга, що була видана у 2000 році
if (booksList.some((book) => book.year === 2000)) {
    console.log("true")
}
// визначити, чи усі книги були визаді після 2005 року
if (booksList.every((book) => book.year > 2005)) console.log(true)
else console.log(false)
// сформувати список книг, ціна яких менше за 1000 грн
const listBookPriceLess1000 = booksList.filter((book) => book.price > 1000)
console.log(listBookPriceLess1000)
// знайти загальну вартість книг, які було видано у 2000 році
const allPriceBook2000 = booksList.reduce(
    (prev, book) => (book.year === 2000 ? prev + book.price * book.count : prev),
    0
)
console.log(allPriceBook2000)
// знайти першу книгу, вартість якої більше за 3000грн
const firstBook3000 = booksList.find((book) => book.price > 3000)
console.log(firstBook3000)
// знайти номер першої книги, вартість якої більше за 3000грн
const firstNumBook3000 = booksList.findIndex((book) => book.price > 3000)
console.log(firstNumBook3000)

// Задача. Дано масив імен. Підхраувати кількість входжень кожного імені за зразком
const usersNames = ["Ivan", "Petro", "Olga", "Ivan", "Olga", "Petro", "Olga", "Olga", "Ivan", "Ivan", "Petro", "Ivan"]

const usersNamesObj = {}
for (const userName of usersNames) {
    if (userName in usersNamesObj) {
        usersNamesObj[userName]++
    } else {
        usersNamesObj[userName] = 1
    }
}
for (const key in usersNamesObj) {
    console.log(`${key} : ${usersNamesObj[key]}`)
}
// Задача. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде місяць через N місяців.
let userDate = {
    day: 23,
    month: 9,
    year: 2023,
}

// function getObjMonth(date, N) {
//     return ((date.month - 1 + N) % 12) + 1
// }

function getObjMonth({ month }, N) {
    return ((month - 1 + N) % 12) + 1
}
const currDate = getObjMonth(userDate, 3)
console.log(currDate)
