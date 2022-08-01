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

function uid() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
}
console.log(uid());

const modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["custom-class-1", "custom-class-2"],
  onOpen: function () {
    console.log("modal open");
  },
  onClose: function () {
    console.log("modal closed");
  },
  beforeClose: function () {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  },
});

// set content
modal.setContent("<h1>here's some content</h1>");

// add a button
modal.addFooterBtn(
  "Button label",
  "tingle-btn tingle-btn--primary",
  function () {
    // here goes some logic
    modal.close();
  }
);

// add another button
modal.addFooterBtn(
  "Dangerous action !",
  "tingle-btn tingle-btn--danger",
  function () {
    // here goes some logic
    modal.close();
  }
);

// open modal
modal.open();

// close modal
modal.close();
