// 1
// const numbers = [1, 2, 3, 4, 105, 6, 78, 99, 864];
// const string = numbers.join("-");
// console.log(string);

// // 2
// const string = "oLEGkAMINSKYY";
// const letters = string.split("");
// let invertedString = "";
// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   invertedString +=
//     letter === letter.toUpperCase()
//       ? letter.toLowerCase()
//       : letter.toUpperCase();
// }
// console.log(invertedString);

// 3
// const title = "How do you Do My FRIEND?";
// console.log(title);

// const slug = title.toLowerCase().split(" ").join("-");

// console.log(slug);

// 4
// const array1 = [2, 4, 5, 11];
// const array2 = [1, 6, 8, 31, 57];
// let arrayTotal = 0;

// const numbers = array1.concat(array2, [100, 200], [75]);

// console.log(arrayTotal);

// for (const number of numbers) {
//   arrayTotal += number;
// }
// console.log(arrayTotal);

// 5
// const cards = [
//   "карточка-1",
//   "карточка-2",
//   "карточка-3",
//   "карточка-4",
//   "карточка-5",
// ];

// console.table(cards);

// const cardToRemove = "карточка-4";
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(1, 3, "let's", "go", "start");

// console.table(cards);

// 6
// const array2 = [1, 6, 8, 31, 57];
// const index = array2.indexOf(57);
// console.log(index);

// 7 функции
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//   } else {
//     console.log("Операция снятия средств проведена успешно");
//   }
// }

// withdraw(10, 300);

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   //   console.log("foo");
//   bar();
//   baz();
// }

// foo();

// Напишите 2 цикла:
// - цикл, который выводит в консоль числа от max до min по убыванию
// - цикл, который выводит в консоль все четные числа от min до max

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }

// Change code above this line
// }
// checkStorage(100, 50);
// console.log(message);

// const firstElementIndex = clients[1];
// const lastElementIndex = clients.length - 1;

// console.log(firstElementIndex); // 2
// console.log(clients[firstElementIndex]);

// function getExtremeElements(array) {
//   const firstElementIndex = array[1];
//   const lastElementIndex = array[array.length - 1];
//   return lastElementIndex;

//   getExtremeElements([2, 3, 4, 5, 6, 7]);
// }

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// Напиши функцию getCommonElements(array1, array2) которая получает
// два массива произвольной длины в параметры array1 и array2,
//   и возвращает новый массив, состоящий из тех элементов, которые
// присутствуют в обоих исходных массивах.

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5];
// const newArray = [];

// console.log(array1);
// console.log(array2);

// for (const arr of array1) {
//   if (array2.includes(arr)) {
//     newArray.push(arr);
//   }
// }

// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//     newArray.push(array1[i]);
//   }
// }

// console.log(newArray);

// for (const arr1 of array1) {
//   if (array2.includes(arr1)) {
//     newArray.push(arr1);
//   }
// }

// newArray.push(1);
// console.log(newArray);
// newArray.push(2);
// console.log(newArray);
// newArray.push(3);
// console.log(newArray);
// newArray.push(4);
// console.log(newArray);
// newArray.pop();
// console.log(newArray);
// newArray.pop();
// console.log(newArray);

// console.log(newArray);

// console.log(arr1.includes(arr2));

// if (arr1.includes(arr2)) {
//   newArray.push();
//   console.log(newArray);
// }

// function getCommonElements(array1, array2) {

//   const newArray = [];

//   for (const arr of array1) {
//     if (array2.includes(arr)) {
//       newArray.push(arr);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// Дополни код так, чтобы в переменную number записывалось первое
//  число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     console.log(number);
//     number = i;
//   }
// }

// let value = "dddffd";
// console.log(Number(value));
// console.log(typeof Number(value));
// console.log(typeof value);
// console.log(Number.parseFloat(value));
// console.log(Number.isNaN(value));
// value = Number(value);
// console.log(typeof Number(value));
// console.log(Number.isNaN(value));

// const number = Number("dddddddsfdf");
// console.log(Number.isNaN(value));

// let salary = 1256.324542542;

// console.log(Number(salary.toFixed(1)));

// const number = prompt("Enter number");
// const extent = prompt("Enter extent");
// console.log(Math.pow(number, extent));
// console.log(number ** extent);

// let max = 55;
// let min = 1;
// console.log(Math.round(Math.random() * (max - min) + min));
// console.log(Math.round().toFixed());

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ДОДЕЛАТЬ!!!!!!!!!!!!!!!!!!!!!!!
// const brand = "tOyoTA hiLANDer";
// let normalizedBrand = 0;
// console.log(brand);
// // const splitBrand = brand.split(" ");
// // console.log(splitBrand);
// for (let i = 0; i >= brand.length; i += 1) {
//   normalizedBrand += i;
//   //   console.log(normalizedBrand);
//   //   array[0].toUpperCase() + array.slice(1).toLowerCase();
// }

// console.log(normalizedBrand);

// console.log(Boolean(-0));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));

// console.log(Boolean(2));
// console.log(Boolean(-333));
// console.log(Boolean(true));
// console.log(Boolean("dsffdf"));
// console.log(Boolean("0"));

// const x1 = 20;
// const x2 = 80;
// const number = 645645645747;

// // // попадает ли число в отрезок между х1 и х2?
// // console.log(number > x1 && number < 80);
// // // попадает ли число в отрезок до х1 или больше х2?
// // console.log(number < x1 || number > x2);
// // // число равно х1 или х1
// // console.log(number === x1 || number === x2);

// if (number > x1 && number < 80) {
//   console.log(`число ${number}, попадает в отрезок между ${x1} и ${x2}`);
// } else if (number < x1 || number > x2) {
//   console.log(`число ${number}, попадает в отрезок до ${x1} или больше ${x2}`);
// } else {
//   console.log(`число ${number}, равно ${x1} или ${x2}`);
// }

// const isFriend = true;
// const isOnline = true;
// const isDnd = true;

// const canOpenChat = isFriend && isOnline && !isDnd;

// console.log("Можно открыть чат?", canOpenChat);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// const max = 10;
// for (let i = 1; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   //   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }
// console.log("Лог после цикла");

// const minSalary = 1000;
// const maxSalary = 10000;
// const eployees = 2;
// let totalSalary = 0;

// for (let i = 1; i <= eployees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(salary);
//   totalSalary += salary;
// }

// console.log(`${eployees} employees, total earns ${totalSalary} per month.`);

// выводить сумму всех четных чисел
// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

// const fruits = ["apple", "banana"];
// const meat = ["poultry", "beef", "fish"];
// const vegetables = ["potato", "tomato", "cucumber"];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food);

// const fruits = [
//   "banana",
//   "apple",
//   "orange",
//   "watermelon",
//   "apple",
//   "orange",
//   "grape",
//   "apple",
// ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву

// const clients = ["Mango", "Poly", "Ajax"];
// // const lastElementIndex = clients.length - 1;
// // console.log(lastElementIndex); // 2
// console.log(clients[1]);

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// scores.pop(1, 2, 3, 4, 5);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// const cars = ["audi", "mitsubishi", "honda", "bmw"];
// for (let i = 0; i < cars.length; i += 1) {
//   console.log(`Car ${i + 1} is: ${cars[i]}`);
// }

// const cars = "audi*mitsubishi*honda*bmw";
// const qrCodes = "000000000, 111111111, 22222222, 333333333";
// const arrayOfCars = cars.split("*");
// const arrayOfQrCodes = qrCodes.split(",");
// console.log(arrayOfCars, arrayOfQrCodes);

// for (let i = 0; i < arrayOfCars.length; i += 1) {
//   console.log(`${arrayOfCars[i]} qr code is ${arrayOfQrCodes[i]}`);
// }

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count();

//ОБЪЕКТЫ, модуль 3

// const film = {
//   name: "Avengers: Endgame",
//   actors: [
//     "Robert Downey",
//     "Chris Evans",
//     "Mark Ruffalo",
//     "Chris Hemsworth",
//     "Scarlett Johansson",
//   ],
//   rating: 8.4,
//   year: 2019,
//   addActor(actor) {
//     this.actors.push(actor);
//   },
// };

// film.addActor("Jasohn Stathem");
// film.addActor("Anjelina Johli");

// film.deleteActor("Mark Ruffalo");

// console.log(film);

// console.log(film.name);
// console.log(film.actors[0]);
// console.log(film.year);

// const reviewFrom = "actors";

// console.log(film.reviewFrom);
// console.log(film[reviewFrom]);

// const film = "Jumandji";
// const rating = "7.1";
// const year = 1997;

// const review = {
//   [film]: rating,
//   year,
//   phone: 71811122233,
// };

// review.year = 2001;
// console.log(review);

// // cars
// const carNumber = "KA1111OC";

// const car = {
//   number: "KA1111OC",
// };

// car.model = "Audi";
// car.model = "Toyota";
// // car.number = "AA1234BC";
// car.type = "Camry";

// console.log(car);

// const feedback = {
//   exellent: 12,
//   good: 330,
//   normal: 37,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// for (const key of keys) {
//   //   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

// let totalFeedback2 = 0;
// const values = Object.values(feedback);
// console.log(values);
// for (const value of values) {
//   console.log(value);
//   totalFeedback2 += value;
// }

// console.log(`Total value of feedbacks: ${totalFeedback2}`);

//

// const salaries = { mango: 100, poly: 150, alfred: 80 };

// let totalSalary = 0;
// // Change code below this line
// const values = Object.values(salaries);
// console.log(values);
// for (const value of values) {
//   console.log(value);
//   totalSalary += value;
// }

// console.log(totalSalary);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// const propName = "name";

// for (const product of products) {
//   //   console.log(product);
//   const keys = Object.keys(product);
//   //   console.log(keys);
//   if (Object.keys(product) === propName) {
//     console.log(Object.values(propName));
//   }
// }

// function getAllPropValues(propName) {
//   // Change code below this line
//   for (const product of products) {
//     console.log(product);
//   }

//   // Change code above this line
// }

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //     console.log(`Индекс ${i}, значение ${numbers[i]}`);

// // }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// модуль 3, задача 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potion.name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (oldName === potion.name) {
//         potion.name = newName;
//       }
//     }
//   },
//   // Change code above this line
// };

// модуль 4
// const doMath = function (a, b, c, callback) {
//   const result = callback(a, b, c);
//   console.log(result);
// };

// const multiply = function (x, y, z) {
//   return x * y * z;
// };

// const add = function (x, y, z) {
//   return x + y + z;
// };

// doMath(2, 2, 2, multiply);
// doMath(2, 2, 2, add);

// const doMath = function (a, b, c, callback) {
//   const result = callback(a, b, c);
//   console.log(result);
// };

// const multiply = function (x, y, z) {
//   return x * y * z;
// };

// const add = function (x, y, z) {
//   return x + y + z;
// };

// doMath(3, 10, 8, multiply);
// doMath(22, 5, 2, add);

// const filter = function (array, callback) {
//   const filteredArray = [];

//   for (const el of array) {
//     // console.log(el);
//     // console.log(callback(el));
//     const passed = callback(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 5;
// };

// // const callback2 = function (value) {
// //   return value <= 5;
// // };

// // filter([1, 2, 3, 4, 5, 6, 7, 8], callback1);

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], callback1));
// console.log(
//   filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 5;
//   })
// );

// const fruits = [
//   { name: "apples", quant: 333, isFresh: true },
//   { name: "apples", quant: 222, isFresh: true },
//   { name: "apples", quant: 111, isFresh: true },
// ];

// const getQuantFruits = function (fruitQuant) {
//   return fruitQuant.quant >= 200;
// };

// console.log(filter(fruits, getQuantFruits));

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "физика"] },
//   { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//   { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// Object.values(pizzas) === pizzaName
//   ? makePizza(pizzaName)
//   : onOrderError(error);

//     order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//      return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },

// const arr = [1, 2, [3, 4], [5, 6], 7];
// //
// // console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]
// const newArr = arr.flat(1);
// console.log(newArr);
// Колбэк-функция

// function foo(...args) {
//   console.log(this);
//   console.log(args);
// }

// // foo(1, 2, 3);
// // foo.call({}, 1, 2);
// // foo.apply({}, [1, 2]);

// const newFoo = foo.bind({ name: "Oleg" }, 3, 4, 5);
// newFoo();

// const Test = {
//   name: "Oleg",
//   age: 32,
//   greet: function () {
//     console.log("Привет!");
//   },
// };

// console.log(Test);

// const objC = {
//   z: 5,
// };

// console.log(objC);

// console.log(objC.hasOwnProperty("y"));

//
//5 модуль
//

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Манго";
// dog.age = 7;

// const fruit = Object.create(dog);
// fruit.color = "black";

// // console.log(fruit.legs);
// // console.log(fruit);

// // console.log(fruit.ddd);

// // fruit.legs = 123;
// console.log(fruit);
// console.log(fruit.hasOwnProperty("legs"));

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.helloWorld = function () {
//   console.log(
//     `You just perchase ${this.brand} ${this.model} for ${this.price}. Thank you!`
//   );
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar1 = new Car({ brand: "Audi", model: "q3", price: "34000" });
// console.log(myCar1);

// myCar1.helloWorld();

// const myCar2 = new Car({
//   brand: "Mitsubishi",
//   model: "Lancer",
//   price: "5999",
// });
// console.log(myCar2);
// myCar2.changePrice(5700);

// console.log(myCar2);

// const Fruit = function ({ fruit, color, quantity, price, buyer, email } = {}) {
//   this.fruit = fruit;
//   this.color = color;
//   this.quantity = quantity;
//   this.price = price;
//   this.buyer = buyer;
//   this.email = email;
// };

// Fruit.prototype.orderTotalPrice = function () {
//   return this.quantity * this.price;
// };

// Fruit.prototype.changeBuyr = function (newBuyer) {
//   this.buyer = newBuyer;
// };

// Fruit.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const apple = new Fruit({
//   fruit: "apple",
//   color: "green",
//   quantity: 4,
//   price: 20,
//   buyer: "Anton Prajenkov",
//   email: "a.praj@gmail.com",
// });

// const banana = new Fruit({
//   fruit: "banana",
//   color: "yellow",
//   quantity: 11,
//   price: 47,
//   buyer: "Nick Anderson",
//   email: "nileton@gmail.com",
// });

// const cherry = new Fruit({
//   fruit: "cherry",
//   color: "red",
//   quantity: 123,
//   price: 2,
//   buyer: "Lena Kozak",
//   email: "kozak@ukr.net",
// });

// console.log(apple);
// console.log(apple.orderTotalPrice());

// apple.changeBuyr("John Gold");
// apple.changeEmail("goldjjj@gmail.com");
// console.log(apple);

// console.log(banana);
// console.log(cherry);

// console.log(Fruit.prototype);

// class Car1 {
//   constructor({ fruit, color, quantity, price, buyer, email } = {}) {
//     this.fruit = fruit;
//     this.color = color;
//     this.quantity = quantity;
//     this.price = price;
//     this.buyer = buyer;
//     this.email = email;
//   }
// }

// console.dir(Car1);

// const carInstance = new Car1({
//   fruit: "apple",
//   color: "green",
//   quantity: 4,
//   price: 20,
//   buyer: "Anton Prajenkov",
//   email: "a.praj@gmail.com",
// });
// console.log(carInstance);

// сделать первую букву имени заглавной
// const names = ["olga", "john", "Stan", "poll"];

// const newUpperNames = names.map(
//   (name) => name[0].toUpperCase() + name.slice(1)
// );

// console.log(newUpperNames);

//перемножить массив
// let arr = [2, 3, 4];

// const summArr = arr.reduce((perv, item) => item * perv, 1);

// console.log(summArr);

//.....................
// const user = ["Ваня", "Иштван"];
// console.log(user);
// user.push("Оля");
// console.log(user);
// user.splice(1, 1, "Петя");
// console.log(user);
// const deleted = user.shift();
// console.log(deleted);
// console.log(user);
// user.splice(0, 0, "Маша", "Паша");
// console.log(user);

// let arr = ["Ваня", "Иштван", "Оля"];
// console.log(arr);
// const deleted = arr.splice(1, 1);
// console.log(arr);
// console.log("Deleted name:", deleted);

// arr.splice(1, 0, "Иштван");
// console.log(arr);

// let str = "Ваня, Иштван, Оля";
// let arr = str.split(", ");
// console.log(arr);
// arr.push("Oleg");
// console.log(arr);
// console.log(arr[2]);

// let arr = [9, 2, 8];
// let reduceValue = arr.reduce(function (perviousValue, item, index, array) {
//   console.log(perviousValue);
// });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   console.log(values);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const firstBook = {
//   title: "Последнее королевство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// FIND метод
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(({ label }) => label === "blue"));

// class Car1 {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   changePrice(newPrice) {
//     this.price = price;
//   }
// }

// console.log(Car1);

// const carInstance = new Car1({
//   brand: "Audi",
//   model: "Q3",
//   price: 35000,
// });

// console.log(carInstance);
