'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Numri i saktÃ«!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.gjeje').value = 23;
console.log(document.querySelector('.gjeje').value);
*/

let numrisekret = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

const jepeMesazhin = function (message) {
  document.querySelector('.message').textContent = message;

}


document.querySelector('.shiko').addEventListener('click', function () {
  const gjeje = Number(document.querySelector('.gjeje').value);

  // Kur ska asni numer te shkrum
  if (!gjeje) {
    // document.querySelector('.message').textContent = 'â Nuk ka numra!'
    jepeMesazhin('â Nuk ka numra!');

    // kur fiton
  } else if (gjeje === numrisekret) {
    jepeMesazhin('ð Numri i saktÃ«!');
    document.querySelector('.number').textContent = numrisekret;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // document.querySelector('h1').textContent = 'Ju keni gjetur numrin ð¥³';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  else if (gjeje !== numrisekret) {
    if (score > 1) {
      // document.querySelector('.message').textContent = gjeje > numrisekret ? 'ð Numri i madh' : 'ð Numri i vogel';
      jepeMesazhin(gjeje > numrisekret ? 'ð Numri i madh' : 'ð Numri i vogel');
      document.querySelector('body').style.backgroundColor = gjeje < numrisekret ? '#5889D2' : '#B53131';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      jepeMesazhin('Ti ke humbur lojen! ð¥');
      document.querySelector('.score').textContent = 0;
    }

  }

  // // kur numri osht i madh
  // else if (gjeje > numrisekret) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'ð Numri i madh';
  //     document.querySelector('body').style.backgroundColor = '#B53131';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' Ti ke humbur lojen! ð¥';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // kur numri osht i vogel
  // } else if (gjeje < numrisekret) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'ð Numri i vogel';
  //     document.querySelector('body').style.backgroundColor = '#B53131';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' Ti ke humbur lojen! ð¥';
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

})

document.querySelector('.perseri').addEventListener('click', function () {
  score = 30;
  numrisekret = Math.trunc(Math.random() * 30) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  jepeMesazhin('Nisja mendo...');

  document.querySelector('.gjeje').value = '';
});