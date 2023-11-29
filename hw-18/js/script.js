/* let buttons = document.querySelectorAll('.btn')

for (const button of buttons) {
  button.onclick = () => {
    let btnValue = button.innerHTML

    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    let result = document.getElementById('result')
    switch (btnValue) {
      case '+':
        result.value = firstNumber + secondNumber
        break
      case '-':
        result.value = firstNumber - secondNumber
        break
      case '*':
        result.value = firstNumber * secondNumber
        break
      case '/':
        result.value = firstNumber * secondNumber
        break
    }
  }
}
 */
/* function currencyConverter(dollarRate = 39, euroRate = 40) {
  document.getElementById('btnConvert').onclick = function () {
    let sumGrn = parseFloat(document.getElementById('sumGrn').value)
    division('sumEuro', sumGrn, euroRate)
    division('sumDollars', sumGrn, dollarRate)
  }
}

function division(idSelector, sum, rate) {
  document.getElementById(idSelector).value = sum / rate
}
currencyConverter()
 */
/* function printUserAge(idUserDate, idUserAge) {
  let userYears = document.getElementById(idUserDate)
  userYears.oninput = function () {
    let userYearsValue = parseInt(userYears.value)
    document.getElementById(idUserAge).value = countAge(userYearsValue)
  }
}

function countAge(userYears) {
  let currentYear = new Date().getFullYear()
  return currentYear - userYears
}
printUserAge('userDate', 'userAge')
 */

/* 
function randomIndex(arr) {
  let randInx = Math.floor(Math.random() * arr.length)
  let wish = arr[randInx]
  return wish
}

window.onload = function () {
  // Створили новий тег
  let wishes1 = document.createElement('div')
  let wishes2 = document.createElement('div')
  let wishes3 = document.createElement('div')

  // додаем нове
  wishes1.innerHTML = `${randomIndex(wishesAll)}`
  wishes2.innerHTML = `${randomIndex(wishesAll)}`
  wishes3.innerHTML = `${randomIndex(wishesAll)}`
  // знаходимо id тег куди хочемо додати
  const app = document.getElementById('wish-app')
  app.append(wishes1)
  app.append(wishes2)
  app.append(wishes3)
}
 */
/* let wishesAll = ['love', 'money', 'peace', 'victory', 'luck']

function getRandom(minV, maxV) {
  return minV + Math.floor(Math.random() * (maxV - minV + 1))
}

function getWish(arr) {
  for (let i = 0; i < 3; i++) {
    let index = getRandom(0, arr.length - 1)
    let div = document.createElement('div')
    div.innerHTML = arr[index]
    arr.splice(index, 1)
    const app = document.getElementById('wish-app')
    app.append(div)
  }
}
getWish(wishesAll)
 */
/* const task5 = document.querySelector('.main__task5')

function getRandom(minV, maxV) {
  return minV + Math.floor(Math.random() * (maxV - minV + 1))
}

function createTableUser(row, col, parent, minV, maxV) {
  let table = document.createElement('table')
  table.style.cssText = 'border: 8px double black;'

  for (let i = 0; i < row; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < col; j++) {
      let td = document.createElement('td')
      td.style.border = '2px solid grey'
      td.style.padding = '10px'
      td.innerHTML = getRandom(minV, maxV)
      tr.append(td)
    }
    table.append(tr)
  }
  parent.append(table)
}

createTableUser(4, 4, task5, 1, 9)
 */
function createTable() {
  let inputBNumber = parseInt(document.getElementById('count__number').value)
  let table = document.createElement('table')
  document.querySelector('.table__wrapper').prepend(table)
  let tr = document.createElement('tr')
  table.prepend(tr)
  for (let i = 0; i < inputBNumber; i++) {
    let td = document.createElement('td')
    let input = document.createElement('input')
    td.prepend(input)
    input.classList.add('for__sum')
    tr.prepend(td)
  }
  let button = document.createElement('button')
  button.classList.add('aver__btn')
  button.innerText = 'Get sum'
  document.querySelector('.table__wrapper').after(button)
  document.querySelector('.aver__btn').onclick = getAverage
}

function getAverage() {
  let sumItem = document.querySelectorAll('.for__sum')
  let sum = 0
  for (const item of sumItem) {
    sum += parseFloat(item.value)
  }
  let average = sum / sumItem.length
  let div = document.createElement('div')
  div.innerText = `The average number : ${average.toFixed(2)}`
  document.querySelector('.aver__btn').after(div)
}

document.getElementById('create__table').onclick = createTable
