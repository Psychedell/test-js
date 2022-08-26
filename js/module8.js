const date1 = Date.now();

console.log("date1", date1);

setTimeout(() => {
  const date2 = Date.now();
  console.log("date2", date2);
  console.log(date2 - date1);
}, 2000);

// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// require("flatpickr/dist/themes/material_green.css");

// import Notiflix from "notiflix";
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { Report } from 'notiflix/build/notiflix-report-aio';
// // import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// // import { Loading } from 'notiflix/build/notiflix-loading-aio';
// // import { Block } from 'notiflix/build/notiflix-block-aio';

// // const decorationDiv = document.querySelectorAll('.field');
// const input = document.querySelector("#datetime-picker");
// const button = document.querySelector("button[data-start]");
// const daysEl = document.querySelector("span[data-days]");
// const hoursEl = document.querySelector("span[data-hours]");
// const minutesEl = document.querySelector("span[data-minutes]");
// const secondsEl = document.querySelector("span[data-seconds]");

// button.setAttribute("disabled", "disabled");

// let leftTime = null;
// let timerTime = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const currentTime = Date.now();
//     leftTime = selectedDates[0].getTime() - currentTime;
//     timerTime = convertMs(leftTime);

//     if (leftTime < 0) {
//       Notiflix.Notify.failure("Please choose a date in the future");
//       return;
//     }
//     Notiflix.Notify.success("Timer ready to start!", {
//       timeout: 1500,
//     });
//     button.removeAttribute("disabled");
//     return leftTime;
//   },
// };

// flatpickr(input, options);

// button.addEventListener("click", timer);

// function timer(leftTime) {
//   setInterval(() => {
//     // convertMs(leftTime) - 1;
//     console.log(timerTime - 1);
//   }, 1000);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, "0");
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   daysEl.textContent = days;
//   hoursEl.textContent = hours;
//   minutesEl.textContent = minutes;
//   secondsEl.textContent = seconds;

//   return { days, hours, minutes, seconds };
// }

// daysEl.style.fontSize = "30px";
// hoursEl.style.fontSize = "30px";
// minutesEl.style.fontSize = "30px";
// secondsEl.style.fontSize = "30px";

function createBankList(banks) {
  bankListUl.innerHTML = "";
  bankListUl.insertAdjacentHTML(
    "afterbegin",
    banks
      .map((bank, index) => {
        return `<li class="bank__item">
        <p>${index + 1}. <span>${bank.name}</span></p>
        <button type="button" class="button--edit"></button>
        <button type="button" class="button--delete"></button>
      </li>`;
      })
      .join("")
  );
}
