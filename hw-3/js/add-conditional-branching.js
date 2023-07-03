"use strict"
/* ===============================================================================
Задача 1. 
На екран виводиться меню:
1. Веселий
2. Сумний
3. Обурений
Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла. 
=============================================================================== */
const menu = parseInt(prompt("1 - Веселий 2 - Сумний 3 - Обурений"))

if (!menu) alert("Нічого не вибрали")
else if (menu === 1) alert("😊")
else if (menu === 2) alert("😧")
else if (menu === 3) alert("😠")
else alert("вибір тільки від 1 до 3")
/*===============================================================================
Задача 2. 
Комп'ютер випадковим чином вибирає початок і кінець проміжку 
(проміжок повинен знаходитися в межах від 1 до 100). 
Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, 
або розташоване від нього (від лівого або правого краю) не більше ніж на 10.
=============================================================================== */
const randomNumber = Math.floor(Math.random() * (25 - 1 + 1)) + 1
const userNumber = parseInt(prompt("Вгадайте число від 1 до 100"))
const userNumberless10 = userNumber - 10
const userNumberBig10 = userNumber + 10
if (!userNumber) {
    alert("Нічого не ввели")
} else if (randomNumber >= userNumberless10 && userNumberBig10 >= randomNumber) {
    alert(`Загадане число ${randomNumber} в проміжку -+ 10 від вашого`)
} else {
    alert(`Наступоного разу вам пощастить. Загадане число було ${randomNumber}`)
}
/* ===============================================================================
Задача 3. 
Комп'ютер загадує число від 1 до 10. 
Двоє користувачів надають свої відповіді. 
Виграє той, у кого число знаходиться ближче до загаданого комп'ютером числа.
 =============================================================================== */
const randomNum = Math.floor(Math.random() * 10) + 1
const answerUser1 = parseInt(prompt("Число 1-го користувача"))
const answerUser2 = parseInt(prompt("Число 2-го користувача"))

const user1 = Math.abs(randomNum - answerUser1)
const user2 = Math.abs(randomNum - answerUser2)

if (!answerUser1 || !answerUser2) {
    alert("Нічого не ввели")
} else if (user1 < user2) {
    alert(`Виграє 1-ший користувач с відповідь'ю: ${answerUser1} загадане число: ${randomNum}`)
} else if (user2 < user1) {
    alert(`Виграє 2-ший користувач с відповідь'ю: ${answerUser2} загадане число: ${randomNum} `)
} else {
    alert("Ніч'я")
}

/* ===============================================================================
Задача 4. 
Морський бій. 
Ворожий корабель, може знаходитись в одному із квадратів 
(кількість квадратів вводиться з клавіатури), 
які розташовані лінійно (один за одним) на річці. 

Позиція корабля визначається комп'ютером випадковим чином.
Гра відбувається за правилами: 
1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), 
то корабель потоплено;
2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, 
де знаходиться корабель, то корабель пошкоджено (про це повідомляємо користувача).
За два постріли спробувати потопити корабель.
=============================================================================== */
const lengthField = parseInt(prompt("Кількість квадратів в полі гри"))
const positionShip = Math.floor(Math.random() * lengthField) + 1
const userShot = parseInt(prompt(`Перший постріл від 1 до ${lengthField}`))

if (Math.abs(userShot - positionShip) <= 1) {
    alert("корабель пошкоджено")
    const userShot2 = parseInt(prompt(`Другий постріл від 1 до ${lengthField}`))
    userShot2 === positionShip ? alert("корабель потоплено") : alert("промазав")
} else if (userShot === positionShip) {
    alert("корабель потоплено")
} else {
    alert("промазав")
    const userShot2 = parseInt(prompt(`Другий постріл від 1 до ${lengthField}`))
    userShot2 === positionShip ? alert("корабель потоплено") : alert("промазав")
}
/* ===============================================================================
Задача 5. 
Модифікувати попередню задачу з можливістю після пострілу переміщення 
корабля у випадковим чином вибрану сусідню клітинку 
(якщо звичайно корабель не було потоплено за першим разом).
=============================================================================== */
const length = parseInt(prompt("Кількість квадратів в полі гри"))
let ship = Math.floor(Math.random() * length) + 1
const shot = parseInt(prompt(`Перший постріл від 1 до ${length}`))

if (Math.abs(shot - ship) <= 1) {
    alert("корабель пошкоджено")
    const shot2 = parseInt(prompt(`Другий постріл від 1 до ${length}`))
    shot2 === ship ? alert("корабель потоплено") : alert("промазав")
} else if (shot === ship) {
    alert("корабель потоплено")
} else {
    alert("промазав")
    if (ship > 1 && ship < length - 1) {
        const step = Math.random(Math.random())
        const plusStep = step === 0 ? -1 : 1
        ship += plusStep
        const shot2 = parseInt(prompt(`Другий постріл від 1 до ${length}`))
        shot2 === ship ? alert("корабель потоплено") : alert("промазав")
    } else if (ship === 0) {
        ship += 1
        const shot2 = parseInt(prompt(`Другий постріл від 1 до ${length}`))
        shot2 === ship ? alert("корабель потоплено") : alert("промазав")
    } else {
        ship -= 1
        const shot2 = parseInt(prompt(`Другий постріл від 1 до ${length}`))
        shot2 === ship ? alert("корабель потоплено") : alert("промазав")
    }
}
/* ===============================================================================
Задача 6. 
Полювання. Заєць знаходиться у верхньому лівому кутку поля. 
Поле складається з двох рядків і двох стовпців.

За один крок заєць може стрибнути у будь-яку із вільних клітинок. 
Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. 
Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. 
Якщо користувач зловить зайця за другою спробою, то одержує 50 балів. 
=============================================================================== */
const min = 1
const max = 2
const randomX = Math.floor(Math.random() * (max - min + 1)) + min
const randomY = Math.floor(Math.random() * (max - min + 1)) + min

const userX = parseInt(prompt("Користувач ставить пастку вказуючи номер рядка від 1 до 2: "))
const userY = parseInt(prompt("Користувач ставить пастку вказуючи номер стовпця від 1 до 2: "))

if (randomX === userX && randomY === userY) {
    alert("Користувач виграв і отримав 100 балів")
} else {
    alert("Не піймав. Друга спроба:")
    const userX2 = parseInt(prompt("Користувач ставить пастку вказуючи номер рядка від 1 до 2: "))
    const userY2 = parseInt(prompt("Користувач ставить пастку вказуючи номер стовпця від 1 до 2: "))
    if (randomX === userX2 && randomY === userY2) {
        alert("Користувач зловить зайця за другою спробою, то одержує 50 балів")
    } else {
        alert("Не піймав")
    }
}
/* ===============================================================================
Задача 7. 
Гра в кості. Правила гри:
1) користувач може кинути кості не більше двох разів 
(користувач сам вирішує чи робити, чи не робити другий кидок);
2) якщо випадає парне число, то кількість балів збільшується на це число;
3) якщо випадає непарне число, то кількість балів зменшується на це число;
4) виграє той, у кого кількість балів більша.
===============================================================================*/

/* ===============================================================================
Задача 8. 
З клавіатури вводиться кількість сторін багатокутника. 
Необхідно вивести назву фігури («трикутник», «чотирикутник», «п'ятикутник», «шестикутник»). 
=============================================================================== */

/* ===============================================================================
Задача 9. З клавіатури вводиться перша літера розширення файлу 
(«html», «doc», «jpeg», «mp3», «xls»). 
Вивести на екран назву програми, яка може відкрити цей тип файлу. 
=============================================================================== */
