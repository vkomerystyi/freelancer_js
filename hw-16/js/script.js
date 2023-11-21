/* 
Самі вирішуйте які поля треба захищати і які коректні значення. 
В усіх задача повинен бути toString!!!
 */
/* Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
-   Дата представляється структурою із трьома полями. 
-   Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. 
-   Введення та виведення дати реалізувати за допомогою методу  toString. */
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
class Company {
  constructor(companyName, createInfo, servicesList, branchsList) {
    this.companyName = companyName
    this.createdDate = new CreatedDate(createInfo)
    this.services = new Services(servicesList)
    this.branches = new Branches(branchsList)
  }
  toString() {
    return `Фірма ${this.companyName} створена ${this.createdDate.companyYearsOld} роки тому в ${this.createdDate.createYear} році </br>`
  }
}
class Services {
  constructor(servicesList) {
    this.servicesList = servicesList
  }
  getAvailableServices(money, time) {
    for (const service of this.servicesList) {
      let serviceTime = service.serviceTime
      if (service.servicePrice <= money && serviceTime <= time) {
        document.write(`${service.serviceName} </br>`)
      }
    }
  }
}

class CreatedDate {
  constructor({ createMonth, createYear }) {
    this.createMonth = createMonth
    this.createYear = createYear
  }
  get companyYearsOld() {
    const monthNow = new Date().getMonth() + 1
    const yearNow = new Date().getFullYear()
    let yearOld = yearNow - this.createYear
    let monthsOld = monthNow - this.createMonth
    if (monthsOld < 0) {
      yearOld -= 1
      monthsOld += 12
    }
    return yearOld
  }
}

class Branches {
  constructor(branchesList) {
    this.branchesList = branchesList
  }
  getBrancesInCity(userCity) {
    for (const branch of this.branchesList) {
      if (branch.branchCity === userCity)
        document.write(
          `Можете сходити за адресою: вулиця ${branch.branchStreet} будинок ${branch.branchBuildingNumber} </br>`
        )
    }
  }
}
let firstCompany = new Company(
  'True1',
  { createMonth: 'January', createYear: 2020 },
  [
    { serviceName: 'Cleaning', servicePrice: 1000, serviceTime: 120 },
    { serviceName: 'Washing', servicePrice: 500, serviceTime: 60 },
    { serviceName: 'Drying', servicePrice: 250, serviceTime: 40 },
  ],
  [
    { branchCountry: 'England', branchCity: 'London', branchStreet: 'Good', branchBuildingNumber: '10' },
    { branchCountry: 'England', branchCity: 'London', branchStreet: 'Black', branchBuildingNumber: '14' },
    { branchCountry: 'Germany', branchCity: 'Berlin', branchStreet: 'Bad', branchBuildingNumber: '15' },
    { branchCountry: 'Spain', branchCity: 'Madrid', branchStreet: 'So-So', branchBuildingNumber: '8' },
  ]
)
console.log(firstCompany)
document.write(firstCompany)
firstCompany.services.getAvailableServices(2000, 120)
firstCompany.branches.getBrancesInCity('London')
/* Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
 */
class TBankomat {
  #banknotes
  constructor(banknktes) {
    this.Banknotes = banknktes
  }
  get Banknotes() {
    return this.#banknotes
  }
  set Banknotes(value) {
    this.#banknotes = value
  }
  minSum() {
    let res = +Infinity
    for (const el of this.Banknotes) {
      if (el.Nominal < res) res = el.Nominal
    }
    return res
  }
  maxSum() {
    return this.Banknotes.reduce((prevRes, el) => prevRes + el.Quantity * el.Nominal, 0)
  }
  withdrawalMoney(value) {
    if (this.maxSum() - value < 1) throw new Error('Мало грошей')
    for (let i = 0; i < this.Banknotes.length; i++) {
      while (value >= this.Banknotes[i].Nominal && this.Banknotes[i].Quantity > 0) {
        value -= this.Banknotes[i].Nominal
        this.Banknotes[i].Quantity = this.Banknotes[i].Quantity - 1
      }
    }
  }
}
class Banknote {
  #quantity
  #nominal
  constructor(quantity, nominal) {
    this.Quantity = quantity
    this.Nominal = nominal
  }
  get Quantity() {
    return this.#quantity
  }
  set Quantity(value) {
    if (value < 0) throw new Error('error quantity')
    this.#quantity = value
  }
  get Nominal() {
    return this.#nominal
  }
  set Nominal(value) {
    if (value < 5 && value > 200) throw new Error('error nominal')
    this.#nominal = value
  }
}
const banknoteValue = [
  new Banknote(10, 200),
  new Banknote(100, 100),
  new Banknote(30, 50),
  new Banknote(50, 20),
  new Banknote(120, 10),
  new Banknote(10, 5),
]

let t = new TBankomat(banknoteValue)
console.log(t.minSum())
console.log(t.maxSum())
console.log(t.Banknotes)
t.withdrawalMoney(15050)
console.log(t.maxSum())
console.log(t.Banknotes)
