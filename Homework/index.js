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