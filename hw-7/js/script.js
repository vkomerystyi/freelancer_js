/* 
Задача 5. Створити окремі функції, які переводять:
Сантиметри у дюйми;
Кілограми у фунти;
Кілометри у милі.
Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
Задача 9. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
Задача 10. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
 */

//Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
const task0 = document.querySelector(".main__task0")
const div0 = document.createElement("div")

function monthNumber(number) {
    switch (number) {
        case 1:
        case 2:
        case 12:
            return "зима"
        case 3:
        case 4:
        case 5:
            return "весна"
        case 6:
        case 7:
        case 8:
            return "літо"
        case 9:
        case 10:
        case 11:
            return "осінь"
        default:
            return "такого номера місяця не існує"
    }
}
const month0 = monthNumber(12)
div0.append(month0)
task0.append(div0)
//Задача 1. Створити функцію, яка за номером місяця повертає його назву.
const task1 = document.querySelector(".main__task1")
const div1 = document.createElement("div")
function monthName(number) {
    let month
    switch (number) {
        case 1:
            month = "січень"
            break
        case 2:
            month = "лютий"
            break
        case 3:
            month = "березень"
            break
        case 4:
            month = "квітень"
            break
        case 5:
            month = "травень"
            break
        case 6:
            month = "червень"
            break
        case 7:
            month = "липень"
            break
        case 8:
            month = "серпень"
            break
        case 9:
            month = "вересень"
            break
        case 10:
            month = "жовтень"
            break
        case 11:
            month = "листопад"
            break
        case 12:
            month = "грудень"
            break

        default:
            month = "такого номера місяця не існує "
            break
    }
    return month
}
const nameMonth = monthName(7)
task1.append(div1)
div1.append(nameMonth)
//Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
const task2 = document.querySelector(".main__task2")
const div2 = document.createElement("div")
function workingDay(numberDay) {
    if (numberDay < 6) {
        return "день робочий"
    } else if (numberDay < 8) {
        return "день вихідний"
    } else {
        return "такого номера дня не існує"
    }
}
const day = workingDay(6)
div2.append(day)
task2.append(div2)
// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
//суму;
function sumNumber(...arg) {
    let sum = 0
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i]
    }
    return sum
}
const sum = sumNumber(3, 5, 2, 10)
console.log(sum)
//добуток;
function multiNumber(...arg) {
    let multi = 1
    for (let i = 0; i < arg.length; i++) {
        multi *= arg[i]
    }
    return multi
}
const multi = multiNumber(4, 2, 10, 5)
console.log(multi)
//середнє арифметичне;
function arithmeticMean(...arg) {
    let arithmetic = 0
    let sum = 0
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i]
        arithmetic = sum / arg.length
    }
    return arithmetic
}
const arithmetic = arithmeticMean(4, 1, 10, 5)
console.log(arithmetic)
//мінімальне значення
function minValue(...arg) {
    let min = Infinity
    for (let i = 0; i < arg.length; i++) {
        if (min > arg[i]) {
            min = arg[i]
        }
    }
    return min
}
const min = minValue(4, 15, 10, 5, 2, 100)
console.log(min)
//Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
