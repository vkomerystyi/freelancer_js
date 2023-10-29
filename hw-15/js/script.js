/*
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

/* Задача 0. 
Дано два об’єкта. Обидва містять масив цілих чисел. 
При цьому у одному з них є функція знаходження суми, а у іншому + 
функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.+
Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
 */
let objGivenOne = {
  dataArr: [6, 7, 8, 9, 10],
  sumArr: function () {
    let sum = 0
    for (const item of this.dataArr) {
      sum += item
    }
    return sum
  },
}
let objGivenTwo = {
  dataArr: [1, 2, 3, 4, 5],
  prodArr: function (minV, maxV) {
    let prod = 1
    for (const item of this.dataArr) {
      if (minV <= item && item <= maxV) {
        prod *= item
      }
    }
    return prod
  },
}
console.log(objGivenOne.sumArr())
console.log(objGivenTwo.prodArr(2, 4))
console.log('--call--')
let sumCall = objGivenOne.sumArr.call(objGivenTwo)
let sumApply = objGivenOne.sumArr.apply(objGivenTwo)
console.log(sumCall)
console.log(sumApply)
let prodCall = objGivenTwo.prodArr.call(objGivenOne, 7, 9)
let prodApply = objGivenTwo.prodArr.apply(objGivenOne, [7, 9])
console.log('--apply--')
console.log(prodCall)
console.log(prodApply)
/* Задача 1. 
Створити об’єкт «Тир». 
У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.

Тир	
Поля(властивості) - Масив, у якому зберігається поле з зайцями
Методи (дії) - Метод пострілу (задається позиція пострілу)
Виведення ігрового поля */

const shootingGallery = {
  gallery: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  shot: function (x) {
    if (this.gallery[x] === 1) {
      console.log('Ви попали')
      this.gallery[x] = 0
    } else {
      console.log('Не попали')
    }
  },
  printField: function () {
    console.log('Игровое поле')
    console.log(this.gallery.join(' '))
  },
}

shootingGallery.printField()
shootingGallery.shot(3)
shootingGallery.printField()
shootingGallery.shot(2)
shootingGallery.printField()
/* Задача 2. 
Створити об’єкт «Авто». 
Авто	
Поля(властивості) - Марка
                    Розмір бака
                    Кількість наявних літрів
                    Кількість місць
                    Кількість пасажирів
Методи (дії) -  Заправка на вказану кількість літрів
                Виведення кількості пасажирів
                Додавання пасажирів
                Висадка пасажирів */

class Auto {
  // Поля(властивості)
  constructor(brand, tankSize, numberOfLitresAvailable, numberOfSeats, numberOfPassengers) {
    this.brand = brand
    this.tankSize = tankSize
    this.numberOfLitresAvailable = numberOfLitresAvailable
    this.numberOfSeats = numberOfSeats
    this.numberOfPassengers = numberOfPassengers
  }
  // Методи (дії)
  // Заправка на вказану кількість літрів
  refuellingNumberOfLitres(litre) {
    if (this.tankSize - this.numberOfLitresAvailable > 0 && this.numberOfLitresAvailable + litre <= this.tankSize) {
      this.numberOfLitresAvailable += litre
      console.log(`В баку тепер ${this.numberOfLitresAvailable}`)
    } else {
      console.log(`Можна залити ${this.tankSize - this.numberOfLitresAvailable}`)
    }
  }
  // Виведення кількості пасажирів
  displayingNumberOfPassengers() {
    console.log(`Кількість пасажирів: ${this.numberOfPassengers}`)
  }
  // Додавання пасажирів
  addingPassengers(passenger) {
    if (this.numberOfPassengers + passenger <= this.numberOfSeats) {
      this.numberOfPassengers += passenger
    }
    return this.numberOfPassengers
  }

  // Висадка пасажирів
  disembarkingPassengers(passenger) {
    if (this.numberOfPassengers > 0 && this.numberOfPassengers >= passenger) {
      this.numberOfPassengers -= passenger
    }
    return this.numberOfPassengers
  }
}
let autoAudi = new Auto('Audi', 40, 20, 5, 2)
autoAudi.refuellingNumberOfLitres(1)
autoAudi.refuellingNumberOfLitres(9)
autoAudi.refuellingNumberOfLitres(1)
autoAudi.refuellingNumberOfLitres(11)

autoAudi.displayingNumberOfPassengers()
autoAudi.addingPassengers(2)
autoAudi.displayingNumberOfPassengers()
autoAudi.disembarkingPassengers(3)
autoAudi.displayingNumberOfPassengers()
/* Задача 3. 
Розробити клас MultChecker для перевірки таблиці множення

Поля -  Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
        Кількість правильних відповідей
        Кількість неправильних відповідей
Методи -  Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
          Перевірка правильності вказаної відповіді
          render - виведення інформації про тестування на екран */

class MultChecker {
  constructor(numberCheck) {
    this.numberCheck = numberCheck
    this.countTrue = 0
    this.countFalse = 0
    this.randomValue = 0
  }
  generateExam() {
    this.randomValue = 1 + Math.floor(Math.random() * (10 - 1 + 1))
    return `Чому дорівнює добуток? ${this.numberCheck} * ${this.randomValue}`
  }
  checkTask(answer) {
    let res = this.numberCheck * this.randomValue

    if (res === answer) {
      this.countTrue++
      return 'Правильно'
    } else {
      this.countFalse++
      return 'Неправильно'
    }
  }
  render() {
    console.log(`Правильні відповіді: ${this.countTrue}, Неправильні відповіді: ${this.countFalse}`)
  }
}

const checker = new MultChecker(5)
const question = checker.generateExam()
console.log(question)

const answer = 25
const result = checker.checkTask(answer)
console.log(result)

checker.render()
