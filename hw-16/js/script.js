/* 
Самі вирішуйте які поля треба захищати і які коректні значення. 
В усіх задача повинен бути toString!!!

Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
 */
/* Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
-   Дата представляється структурою із трьома полями. 
-   Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. 
-   Введення та виведення дати реалізувати за допомогою методу  toString.
 */
class TDate {
  constructor(initDay, initMonth, initYear) {
    this.day = initDay
    this.month = initMonth
    this.year = initYear
  }
  incrYear(valYear) {
    this.year = this.year + valYear
  }
  incrMonth(valMonth) {
    this.month = this.month + valMonth
    this.incrYear(Math.floor(this.month / 12))
    this.month = this.month % 12
  }
  incrDay(valDay) {
    this.day = this.day + valDay
    this.incrMonth(Math.floor(this.day / 30))
    this.day = this.day % 30
  }
  decrYear(valYear) {
    if (this.year >= valYear) this.year = this.year - valYear
  }
  decrMonth(valMonth) {}
  decrDay(valDay) {}

  toString() {
    return `${this.day} : ${this.month} : ${this.year}`
  }
}

let d = new TDate(30, 1, 2023)
d.incrDay(56)
console.log(d.toString())

/* Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.  */
class TMoney {
  static exchangeRate = 40
  #dollars

  constructor(dollars) {
    this.Dollars = dollars
  }
  get Dollars() {
    return this.#dollars
  }
  set Dollars(value) {
    if (value < 0) throw new Error('Error')
    this.#dollars = value
  }

  setUaToDollars(value) {
    this.Dollars += value / TMoney.exchangeRate
  }
  getUaToDollars(value) {
    if (this.Dollars - value / TMoney.exchangeRate < 0) throw new Error('Замало грошей')
    this.Dollars -= TMoney.exchangeRate
  }
  getExchangeRateFor100UaIncrease() {
    return (this.Dollars * TMoney.exchangeRate + 100) / this.Dollars
  }
}

let user = new TMoney(400)
console.log(user)
console.log('set')
user.setUaToDollars(800)
console.log(user)
console.log('get')
user.getUaToDollars(300)
console.log(user)
console.log(user.getExchangeRateFor100UaIncrease())
/* Задача 3. Об’єкт “Фірма” (використати члени-класи)
поля
назва фірми;
дата заснування (рік, місяць);
послуги (назва послуги, вартість, термін виконання);
адреси філіалів (країна, місто, вулиця, номер будинку);
методи
визначення кількості років існування фірми;
виведення всіх філіалів фірми у вказаному місті;
виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
 */
