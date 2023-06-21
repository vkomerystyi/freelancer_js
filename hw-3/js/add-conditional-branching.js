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
Комп’ютер випадковим чином вибирає початок і кінець проміжку 
(проміжок повинен знаходитися в межах від 1 до 100). 
Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, 
або розташоване від нього (від лівого або правого краю) не більше ніж на 10.
=============================================================================== */
let randomNumber = Math.floor(Math.random() * (25 - 1 + 1)) + 1
let userNumber = parseInt(prompt("Вгадайте число від 1 до 100"))

if (!userNumber) {
    alert("Нічого не ввели")
} else if (userNumber >= randomNumber - 10 && userNumber <= randomNumber + 10) {
    alert(`Загадане число ${randomNumber} в проміжку -+ 10 від вашого`)
} else {
    alert(`Наступоного разу вам пощастить. Загадане число було ${randomNumber}`)
}
/* ===============================================================================
Задача 3. 
Комп’ютер загадує число від 1 до 10. 
Двоє користувачів надають свої відповіді. 
Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.
 =============================================================================== */

/* ===============================================================================
Задача 4. 
Морський бій. 
Ворожий корабель, може знаходитись в одному із квадратів 
(кількість квадратів вводиться з клавіатури), 
які розташовані лінійно (один за одним) на річці. 

Позиція корабля визначається комп’ютером випадковим чином.
Гра відбувається за правилами: 
1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), 
то корабель потоплено;
2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, 
де знаходиться корабель, то корабель пошкоджено (про це повідомляємо користувача).
За два постріли спробувати потопити корабель.
=============================================================================== */

/* ===============================================================================
Задача 5. 
Модифікувати попередню задачу з можливістю після пострілу переміщення 
корабля у випадковим чином вибрану сусідню клітинку 
(якщо звичайно корабель не було потоплено за першим разом).
=============================================================================== */

/* ===============================================================================
Задача 6. 
Полювання. Заєць знаходиться у верхньому лівому кутку поля. 
Поле складається з двох рядків і двох стовпців.

За один крок заєць може стрибнути у будь-яку із вільних клітинок. 
Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. 
Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. 
Якщо користувач зловить зайця за другою спробою, то одержує 50 балів. 
=============================================================================== */

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
Необхідно вивести назву фігури («трикутник», «чотирикутник», «п’ятикутинк», «шестикутник»). 
=============================================================================== */

/* ===============================================================================
Задача 9. З клавіатури вводиться перша літера розширення файлу 
(«html», «doc», «jpeg», «mp3», «xls»). 
Вивести на екран назву програми, яка може відкрити цей тип файлу. 
=============================================================================== */
