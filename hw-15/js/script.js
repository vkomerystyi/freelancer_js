/*
Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
Тир	


Поля(властивості)
Масив, у якому зберігається поле з зайцями
Методи (дії)
Метод пострілу (задається позиція пострілу)
Виведення ігрового поля


Задача 2. Створити об’єкт «Авто». 
Авто	


Поля(властивості)
Марка
Розмір бака
Кількість наявних літрів
Кількість місць
Кількість пасажирів
Методи (дії)
Заправка на вказану кількість літрів
Виведення кількості пасажирів
Додавання пасажирів
Висадка пасажирів


Задача 3. Розробити клас MultChecker для перевірки таблиці множення
Поля
Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
Кількість правильних відповідей
Кількість неправильних відповідей
Методи
Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
Перевірка правильності вказаної відповіді
render - виведення інформації про тестування на екран




Задача 4. Розробити клас Baner
Поля
Масив об’єктів ( графічних зображень та посилань на сайти)


методи
Метод випадкового вибору об’єкта (графічного зображення та посилання)
Метод виведення випадкового банера




Задача 5. Розробити клас «Керівник танців»
Поля
Масив імен хлопців
Масив імен дівчат
Методи
Метод випадкового вибору імені хлопця
Метод випадкового вибору імені дівчини
Метод виведення пари для танців
Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

 */
/*  Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
Використати обидва методи стосовно обидвох об’єктів (використати call, apply) */
/* const obj1 = {
  arr1: [1, 23, 24, 98],
  sumNumber: function () {
    return this.arr1.reduce((acc, el) => acc + el, 0)
  },
}
const obj2 = {
  arr1: [435, 32, 23, 23],
  prodNum: function () {
    return this.arr1.reduce((acc, el) => (el > 20 && el < 30 ? acc * el : acc), 1)
  },
}
const sum = obj1.sumNumber()
console.log(sum)
const prod = obj2.prodNum()
console.log(prod) */

/* ============= */
let product = {
  title: 'table',
  price: 100,
  count: 34,
  paymentDay: 25,
  delivery: {
    auto: 'audi',
    kilom: 100,
  },
  getDelivery: function (kilomCount) {
    return this.delivery.kilom * kilomCount
  },
  // metods
  getTotalPrice: function () {
    return this.price * this.count
  },
  getDayPrice: function (dayCount) {
    return dayCount * this.paymentDay
  },
  reducePrice: function (value) {
    this.price = this.price - (this.price * value) / 100
  },
  incremPrice: function (value) {
    this.price = this.price + (this.price * value) / 100
  },
  toString: function () {
    return `${this.title} - ${this.price}`
  },
}
console.log(product)
console.log(product.toString())
console.log('hello ' + product)
// Приклад. Описати об’єкт «Інвойс»
// ----- Властивості-характеристики (дані) ----
// номер інвойса
// перелік виконаних робіт
// сума грошей
// ----- Методи --------------------
// перетворення у рядок (вивести номер інвойса, кількість виконаних робіт, сума грошей
// перетворення у число (повертається сума грошей)

// Використовуючи такий опис створити масив інвойсів. Вивести інформацію про інвойси у формі нумерованого списку
//  та знайти загальну вартість використовуючи метод перетворення об’єкта у число

let invoices = [
  {
    invNumber: 232,
    complTask: ['Created task', 'updated form', 'add button'],
    money: 2000,
    toString: function () {
      return `${this.invNumber} - ${this.complTask.length} - ${this.money}`
    },
    valueOf: function () {
      return this.money
    },
  },
  {
    invNumber: 232,
    complTask: ['Created task', 'updated form', 'add button'],
    money: 3000,
    toString: function () {
      return `${this.invNumber} - ${this.complTask.length} - ${this.money}`
    },
    valueOf: function () {
      return this.money
    },
  },
  {
    invNumber: 232,
    complTask: ['Created task', 'updated form', 'add button'],
    money: 4000,
    toString: function () {
      return `${this.invNumber} - ${this.complTask.length} - ${this.money}`
    },
    valueOf: function () {
      return this.money
    },
  },
  {
    invNumber: 232,
    complTask: ['Created task', 'updated form', 'add button'],
    money: 5000,
    toString: function () {
      return `${this.invNumber} - ${this.complTask.length} - ${this.money}`
    },
    valueOf: function () {
      return this.money
    },
  },
  {
    invNumber: 232,
    complTask: ['Created task', 'updated form', 'add button'],
    money: 2000,
    toString: function () {
      return `${this.invNumber} - ${this.complTask.length} - ${this.money}`
    },
    valueOf: function () {
      return this.money
    },
  },
]

const div = document.querySelector('.main__task1')
const ol = document.createElement('ol')
for (const invoice of invoices) {
  const li = document.createElement('li')
  li.textContent = invoice
  ol.appendChild(li)
}
div.appendChild(ol)
const divSum = document.createElement('div')
//  та знайти загальну вартість використовуючи метод перетворення об’єкта у число

let sum = invoices.reduce((prevSum, invoice) => prevSum + invoice, 0)

divSum.textContent = `Общая самма ${sum}`
div.appendChild(divSum)

const objF = {
  a: 11,
  b: 22,
  c: [2, 3, 5, 7],
}
/* Object.freeze(objF) */
objF.a = 100
console.log(objF)
