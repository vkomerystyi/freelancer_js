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
function printUserAge(idUserDate, idUserAge) {
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
