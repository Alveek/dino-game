const pageGame = document.querySelector('.game__box');
const pageStart = document.querySelector('.page-start');
const pageEnd = document.querySelector('.page-end');
const pageGameOver = document.querySelector('.page-final');
const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const exitBtn = document.querySelector('.game__btn-quit');
const backBtn = document.querySelector('.game__btn-back');
const jumpBtn = document.querySelector('.game__btn-jump');
const yesBtn = pageStart.querySelector('.game__btn-yes');
const noneBtn = pageStart.querySelector('.game__btn-no');
const playAgainBtn = pageGameOver.querySelector('.game__btn-return');

let score = 0;

const fix = (evt) => {
  console.log(evt.target);
};

//фукнции для отобажения активных страниц
function activePage(page) {
  page.classList.add('active');
}
function inativePage(page) {
  page.classList.remove('active');
}
//можно написать через условие
function rechangedPage(open, close) {
  activePage(open);
  inativePage(close);
}

//проверка кнопок при входе
const checkBtnStart = (evt) => {
  if (evt.target === yesBtn) {
    rechangedPage(pageGame, pageStart);
  } else if (evt.target === noneBtn) {
    rechangedPage(pageEnd, pageStart);
  }
};

const jump = () => {
  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 400);
};

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
  if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140) {
    // rechangedPage(pageGameOver, pageGame);
    console.log(dinoTop);
  }
});

document.addEventListener('keydown', () => jump());
document.addEventListener('click', (evt) => checkBtnStart(evt));
jumpBtn.addEventListener('click', () => jump());
playAgainBtn.addEventListener('click', () => rechangedPage(pageGame, pageGameOver));
backBtn.addEventListener('click', () => rechangedPage(pageStart, pageEnd));
exitBtn.addEventListener('click', () =>rechangedPage(pageStart, pageGame));
