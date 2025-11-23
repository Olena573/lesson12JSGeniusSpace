/*
-----1----
Напишіть функцію printNumbers(from, to) 
яка виводить число кожну секунду,
починаючи від from і закінчуючи to.
Зробіть два варіанти рішення.
Використовуючи setInterval.
Використовуючи вкладений setTimeout
*/

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

function printNumbers(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }

  setTimeout(go, 1000);
}

/*
-----2----
Вбудована функція setTimeout використовує колбек-функції. Створіть
альтернативу яка базується на промісах.
Функція delay(ms) повинна повертати проміс, 
який перейде в стан resolved через
ms мілісекунд, так щоб ми могли додати до нього .then:
function delay(ms) {
// ваш код
}delay(3000).then(() => alert('виконалось через 3 секунди'));
*/

/*
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}
*/

/*
написати собі більше задач на setTimeout і проміси, 
на практику, бо я на них дивлюсь і туплю тупку
я не розумію як писати альтернативу колбек-функціям, 
і як вони функціонують, тому
в мене не вийшло написати альтернативу їм на промісах

*/

/*
Створи функцію doSomething(action), 
яка приймає одну колбек-функцію action і викликає її.

Приклад вимог:

Напиши функцію sayHello(), яка виводить у консоль "Hello!".

Напиши функцію sayBye(), яка виводить "Bye!".

Функція doSomething(action) має приймати одну 
з цих функцій як аргумент і запускати її.
*/

function sayHello(){
  console.log("Hello!");
}

function sayBye(){
  console.log("Bye!");
}

function doSomething(action){
  action();
}

doSomething(sayHello);
doSomething(sayBye);

/*
Завдання №2: “Калькулятор з колбеком”

Напиши функцію calculate(a, b, action), яка:

приймає два числа a і b

приймає колбек-функцію action

викликає цю колбек-функцію, передаючи в неї a і b

показує результат у консоль
*/


function addition(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function minus(a, b) {
  return a - b;
}

function calculate(a, b, action){
  console.log(action(a, b));
}

calculate(5, 3, addition);
calculate(5, 3, multiply);
calculate(5, 3, minus);
calculate(5, 3, division);

/*
Завдання: зробити свій маленький setTimeout 
щоб вона працювала так само, як стандартний setTimeout, 
тільки у дуже спрощеному вигляді
Умова:

myTimeout має приймати два аргументи:
callback — функція, яку треба виконати
ms — кількість мілісекунд
Функція повинна виконати колбек після затримки.
*/

function myTimeout(callback, ms) {
  setTimeout(callback, ms);
}

myTimeout(sayHello, 3000);
myTimeout(sayBye, 4000);


/*
Тепер ти можеш зробити справжній кастомний setTimeout, 
без використання вбудованого setTimeout.
Тобто — реалізувати затримку самій, через Date.now() і цикл.
*/

//Моя реалізація (неправильна і часткова):

function customTimeout(callback, ms) {
  let startTime = Date.now();
  let secondTime = startTime + ms;
  setStart(callback, secondTime);
}

customTimeout(sayHello, 3000);
customTimeout(sayBye, 4000);

/*
Реалізація Chatgpt (правильна і робоча):

function customTimeout(callback, ms) {
  const startTime = Date.now();              // фіксуємо час старту

  function check() {                         // функція перевірки
    const now = Date.now();                  // поточний час

    if (now >= startTime + ms) {             // якщо вже пройшло достатньо часу
      callback();                            // запускаємо колбек
    } else {
      requestAnimationFrame(check);          // інакше перевіряємо знову
    }
  }

  requestAnimationFrame(check);              // запускаємо цикл перевірок
}

customTimeout(sayHello, 3000);
customTimeout(sayBye, 4000);

JS сам по собі не вміє "спати".
Тому затримку доводиться робити так:
Запам’ятати поточний час
Запустити цикл, який перевіряє, чи пройшов потрібний інтервал
Коли час минув → запускаємо колбек
requestAnimationFrame викликає функцію приблизно 60 разів 
на секунду, тому він добре підходить для "ручного" таймера.

*/