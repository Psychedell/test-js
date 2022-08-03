// const prog = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "Javascript" },
//   { label: "Node.js" },
//   { label: "React" },
//   { label: "Vue" },
//   { label: "Next.js" },
//   { label: "Mobx" },
//   { label: "Redux" },
//   { label: "React Router" },
//   { label: "GraphQl" },
// ];

// const list = document.querySelector(".js-list");
// const input = document.querySelector("#filter");

// input.addEventListener("input", _.debounce(onFilterChange, 333));

// const listNewMarkup = createNewMarkup(prog);
// list.innerHTML = listNewMarkup;

// function createNewMarkup(items) {
//   return items.map((item) => `<li>${item.label}</li>`).join("");
// }

// function onFilterChange(e) {
//   const val = e.target.value.toLocaleLowerCase();

//   const valItems = prog.filter((v) =>
//     v.label.toLocaleLowerCase().includes(val)
//   );

//   const listNewMarkup = createNewMarkup(valItems);
//   list.innerHTML = listNewMarkup;
// }
