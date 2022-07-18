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

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// // text.classList.add("a", "b", "c");
// // console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// // text.classList.toggle("is-hidden"); // will remove is-hidden class
// console.log(text.classList);
// // classList has a forEach method
// text.classList.forEach((cls) => {
//   console.log(cls); // text, red, new-class
// });

// const stylesP = document.querySelector("#paragraph");
// console.log(stylesP);
// stylesP.style.backgroundColor = "black";
// stylesP.style.fontSize = "24px";
// console.log(stylesP.style);

// elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
// elem.getAttribute(name) - получает значение атрибута и возвращает его.
// elem.setAttribute(name, value) - устанавливает атрибут.
// elem.removeAttribute(name) - удаляет атрибут.
// elem.attributes - свойство, возвращает объект всех атрибутов элемента.

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// image.removeAttribute("alt");
// console.log(image.attributes);

// image.setAttribute("alt", "Amazing nature");
// console.log(image.attributes);
// console.log(image.getAttribute("alt"));

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.actions button[data-action="close"]');

// console.log(saveBtn.dataset.action);
// console.log(closeBtn.dataset.action);
// // console.log(saveBtn.dataset.action); //save
// // console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

// const title = document.createElenent("h2");
// title.textContent = "Hello my friend";

// console.log(title);

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";

// console.log(img);

// element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
// element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
// element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
// element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.
// Во всех этих методах, el это элементы или строки, в любом сочетании и количестве. Строки добавляются как текстовые узлы.

// const div = document.querySelector(".container");

// const list = document.createElement("ul");
// list.classList.add("list_head");
// list.style.backgroundColor = "navy";
// list.style.color = "white";
// div.prepend(list);

// const newUl = document.querySelector(".list_head");

// const headTitle = document.createElement("h1");
// headTitle.textContent = "Car collection 2022";
// newUl.before(headTitle);

// const ItemOne = document.createElement("li");
// ItemOne.textContent = "Mitsubishi";
// newUl.prepend(ItemOne);

// const ItemTwo = document.createElement("li");
// ItemTwo.textContent = "Audi";
// newUl.append(ItemTwo);

// const ItemThree = document.createElement("li");
// ItemThree.textContent = "Toyota";
// newUl.append(ItemThree);

// const ItemFour = document.createElement("li");
// ItemFour.textContent = "Mazda";
// newUl.append(ItemFour);

// const title = document.createElement("p");
// title.textContent = "This is our top rated collection of the year!";
// title.classList.add("title_head");
// newUl.after(title);

// ItemFour.remove();

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// title.innerHTML = 'New and <span class="accent">improved</span> title';
// // title.innerHTML = "";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

// const option = colorPickerOptions[3];

// const btnEl = document.createElement("button");
// btnEl.type = "button";
// btnEl.textContent = option.label;
// btnEl.style.backgroundColor = option.color;

// console.log(btnEl);

const colorPickerContainerEl = document.querySelector(".container");

const elements = colorPickerOptions.map((option) => {
  const btnEl = document.createElement("button");
  btnEl.type = "button";
  btnEl.classList.add(".container__btn");
  btnEl.textContent = option.label;
  btnEl.style.backgroundColor = option.color;
  return btnEl;
});

colorPickerContainerEl.prepend(...elements);

console.log(elements);
