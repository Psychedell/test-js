// import filmCard from './templates/image-card.hbs';
import filmCard from "./templates/markupOneCard.hbs";
import filmCards from "./templates/cardMarkup.hbs";
import { NewServiceApi } from "./authorization";
import popularMovies from "./popular";
import modal, { id } from "./modal";
import { substitutionOfValues } from "./card";

const btnWatchedHeader = document.querySelector("#watched-header");
const btnQueueHeader = document.querySelector("#queue-header");
// const modalBtnWatched = document.querySelector('.button__watch');
const modalBtnWQueue = document.querySelector(".button__queue");
const libraryGallaryDiv = document.querySelector(".library");

// console.log(btnWatchedHeader);

let STORAGE_KEY_WATCHED = "watched";
let STORAGE_KEY_QUEUE = "queue";
let localstorageFilmIdWatched = [];
let localstorageFilmIdQueue = [];

const newServiceApi = new NewServiceApi();

// modalBtnWatched.addEventListener('click', onBtnWatchedClick);

export default function onBtnWatchedClick() {
  //   newServiceApi.serviceMovieTopApi().then(data => {
  //     const apiCardId = `film ID: ${data.results[0].id}`;
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(apiCardId));
  //   });
  localstorageFilmIdWatched.push(id);
  localStorage.setItem(STORAGE_KEY_WATCHED, localstorageFilmIdWatched);
  //   const aValue = localStorage.getItem('watched');
  //   console.log(aValue);
  //   let STORAGE_KEY_WATCHED = id;
  //   localStorage.setItem(STORAGE_KEY_WATCHED, 'watched');
}

//   НУЖНА КНОПКА REMOVE В МОДАЛКЕ!!!!!!!!!!
// function localStorageRemove() {
//   localStorage.removeItem(STORAGE_KEY_WATCHED);
// }

btnWatchedHeader.addEventListener("click", readLocalStorage);

function readLocalStorage() {
  libraryGallaryDiv.innerHTML = "";
  const noWatchedMessage = "There are no films in watched!";
  const localStorageFilm = localStorage.getItem(STORAGE_KEY_WATCHED);
  //   const parsedStorageFilm = JSON.parse(localStorageFilm);

  const filmId = localStorageFilm.split(",");
  const arrayId = filmId.map((id) => {
    const idS = parseInt(id);
    console.log(idS);
    newServiceApi
      .serviceIdMovie(idS)
      .then((id) =>
        libraryGallaryDiv.insertAdjacentHTML("beforeend", filmCard(id))
      );
  });
  //   libraryGallaryDiv.insertAdjacentHTML = arrayId;
  //   const parseFilmId = parseInt(filmId);
  //   console.log(parseFilmId);

  // const filmId = localStorageFilm.split(',');
  // const parseFilmId = parseInt(filmId);
  // console.log(parseFilmId);
  // newServiceApi
  //   .serviceIdMovie(parseFilmId)
  //   .then(data => (libraryGallaryDiv.innerHTML = filmCard(data)));

  // filmId.map(id => {
  //   newServiceApi.serviceIdMovie(parseInt(id));
  // });

  //   console.log(localStorageFilm.split(','));

  //   if (!parsedStorageFilm) {
  //     return libraryGallaryDiv.insertAdjacentHTML('beforeend', noWatchedMessage);
  //   }
  //   return libraryGallaryDiv.insertAdjacentHTML('beforeend', parsedStorageFilm);
}
