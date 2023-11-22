/*Задача 1. 
Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)    */
class ArrayOperations {
  static numberOfPositives(arr) {
    return arr.reduce((prevR, number) => (number > 0 ? prevR + 1 : prevR), 0)
  }
  static numberOfNegatives(arr) {
    return arr.reduce((prevR, number) => (number < 0 ? prevR + 1 : prevR), 0)
  }
  static numberOfCount(arr, num) {
    let count = 0
    for (const item of arr) {
      if (item === num) count++
    }
    return count
  }
}
let testArr = [0, 1, -1, -5, -2, 3, 5, 6, 2, 3]
console.log(ArrayOperations.numberOfPositives(testArr))
console.log(ArrayOperations.numberOfNegatives(testArr))
console.log(ArrayOperations.numberOfCount(testArr, 3))
/* Задача 2.
Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу. */

class CompanyCar {
  static companyCar
  constructor(driver, logo, number) {
    if (CompanyCar.companyCar) {
      return CompanyCar.companyCar
    }
    this.driver = driver
    this.logo = logo
    this.number = number
    CompanyCar.companyCar = this
  }
  toString() {
    return `${this.driver} - ${this.logo} - ${this.number}`
  }
}
let car = new CompanyCar('Ivan', 'BMW', 'BC3232BA')
console.log(car)
let car2 = new CompanyCar('Petro', 'BMW', 'BC3232BA')
console.log(car2)
/* Задача 3.
Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера. */

class Reminder {
  static reminder

  constructor(message, seconds) {
    if (Reminder.reminder) return Reminder.reminder
    this.message = message
    this.seconds = seconds
    this.counter = 1
    this.timer = this.setInterval()
    Reminder.reminder = this
  }
  setInterval() {
    return setInterval(() => console.log(`${this.message} ${this.counter++}`), 1000 * this.seconds)
  }
  set ChangeMessage(value) {
    this.message = value
  }
  stopTimer() {
    clearInterval(this.timer)
  }
}
let reminder = new Reminder('message', 1)
// reminder.ChangeMessage = 'new message'
reminder.stopTimer()
