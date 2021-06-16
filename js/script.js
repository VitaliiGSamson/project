"use strict";

// alert('Hello');

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
// console.log(4 +"5");

// let incr = 10,
//     decr = 10;

// // ++incr;     /////префіксні incr++ постфіксні
// // --decr;                    decr--

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 != 8);

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);      






















// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);



































// alert('Hello');

// const result = confirm("Are you here?"); ////stroka
// console.log(result);

// // const answer = +prompt("Вам есть 18?", "18");  /////stroka
// // console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?','');
// answers[1] = prompt('Как вашa фамимя?','');
// answers[2] = prompt('Скольок вам лет?','');

// console.log(typeof(answers));
// console.log(typeof(null));

// document.write(answers);











































