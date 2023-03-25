const pageGame = document.querySelector('.game__box');
const pageStart = document.querySelector('.page-start');
const pageEnd = document.querySelector('.page-end');
const pageGameOver = document.querySelector('.page-final');
const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const exitBtn = document.querySelector('.game__btn-quit');
const jumpBtn = document.querySelector('.game__btn-jump');
const yesBtn = document.querySelector('.game__btn-yes');
const noneBtn = document.querySelector('.game__btn-no');
const playAgainBtn = document.querySelector('.game__btn-return');

let score = 0; 

const fix = (evt) => {
  console.log(evt.target);
};

function activePage(page) {
  page.classList.add('active');
}
function inativePage(page) {
  page.classList.remove('active');
}

function rechangedPage(open,close) {
  activePage(open)
  inativePage(close)
}


const checkBtnStart = (evt) => {
  if (evt.target === yesBtn) {
    rechangedPage(pageGame,pageStart)
    // activePage(pageGame);
    // inativePage();
  } else if (evt.target === noneBtn ) {
    rechangedPage(pageEnd,pageStart)
    // activePage(pageEnd);
    // inativePage(pageStart);
  }
};

const jump = () => {
  if (!dino.classList.contains("jump")) {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 400);
};

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
  if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
    rechangedPage(pageGameOver,pageGame)
    console.log(dinoTop)
    // activePage(pageGameOver)
    // inativePage(pageGame)
  }

 
});

document.addEventListener('keydown', () => jump());
document.addEventListener('click', (evt) => checkBtnStart(evt));
jumpBtn.addEventListener('click', () => jump());
playAgainBtn.addEventListener('click', () => rechangedPage(pageGame,pageGameOver));
