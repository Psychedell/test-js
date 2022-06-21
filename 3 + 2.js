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

// const clients = ["Mango", "Poly", "Ajax"];

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

console.log(Math);
