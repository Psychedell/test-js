// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const text = document.querySelector(".article-text");
// console.log(text.textContent);

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// // title.textContent = "Welcome to Bahamas!";
// // title.textContent = "Go home!)";
// console.log(title.textContent);

// В свойстве classList хранится объект с методами для работы с классами элемента.

// elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
// elem.classList.add(cls) - добавляет класс cls в список классов элемента.
// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
// elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
// elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.

const text = document.querySelector("#paragraph");

console.log(text.classList); // ["text", "red", "big", value: "text red big"]

console.log(text.classList.contains("red")); // true

text.classList.remove("big");
console.log(text.classList); // ["text", "red", value: "text red"]

text.classList.add("new-class");
console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class
console.log(text.classList);
// classList has a forEach method
text.classList.forEach((cls) => {
  console.log(cls); // text, red, new-class
});
