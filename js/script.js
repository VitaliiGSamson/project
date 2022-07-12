"use strict";
const vehicleBodyWidth = 5000;
const vehicleBodyLength = 4000;

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

let number = 4.6;
 console.log(4/0);
 console.log('string' * 9);

 const persone = '5';
 const bool = false;

//  console.log(something);
let und;
console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.name);
console.log(obj ["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);

const arr = [1, 2, 3];
console.log(arr[1]);

// const obj = {a:1, b:2};

const obj = {
    Anna: 500,
    'Alice':800
};


const arr = ['a', 'b', 'c'];
const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c'
}

const b = 'b';
// console.log(arr[1]);
// console.log(arrObj[1]);

arrObj.b = '1234';
arrObj[b] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);


const category = 'toys'
console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";
alert(`Привіт, ${user}`);


let arr



let COLOR_RED = #F00';

cosole.log("Ширина кузова автомобіля: " + vehicleBodyWidth + ', довжина: ' + vehicleBodyLength);

 a = 15;
 console.log(a);

let number = 5;
const leftBorderWidth = 1;


number = 10;
console.log(number);

leftBorderWidth = 10;

const obj = {
    a: 50
    };

obj.a = 10;    

console.log(obj);



















































// "use strict";

// const logg = "Hello world";

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));
// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// // const num = 50;

// // if (num < 49) {
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log('Много');
// // } else {
// //     console.log('Ok!');
// // }

// // (num === 50) ? console.log('Ok!') : console.log('Error');   

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;         
// }


// let num = 50;

// while ( num <= 55) {
//     console.log(num);
//     num++;
// }

// do {    
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++) {
//     if(i === 6) {
//     //   break;
//          continue;
//     }

//     console.log(i);
// }


// // alert('Hello');

"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;



function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }  
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("Вы класический зритель");
    } else if(personalMovieDB.count >=30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

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













































