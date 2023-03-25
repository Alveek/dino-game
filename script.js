const pageGame = document.querySelector('.game__box');
const pageStart = document.querySelector('.page-start');
const pageEnd = document.querySelector('.page-end');
const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const exitBtn = document.querySelector('.game__btn-quit');
const jumpBtn = document.querySelector('.game__btn-jump');
const yesBtn = document.querySelector('.game__btn-yes');
const noneBtn = document.querySelector('.game__btn-no');

const fix = (evt) => {
  console.log(evt.target);
};

function activePage(page) {
  page.classList.add('active');
}
function inativePage(page) {
  page.classList.remove('active');
}

const checkBtnStart = (evt) => {
  if (evt.target === yesBtn) {
    activePage(pageGame);
    inativePage(pageStart);
  } else if (evt.target === noneBtn) {
    activePage(pageEnd);
    inativePage(pageStart);
  }
};

// console.log(dino,cactus)
const jump = (evt) => {
  if (dino.classList != 'jump' || evt.target === jumpBtn) {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 400);
};

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // alert('GAME OVER!!');
  }
});

document.addEventListener('keydown', () => jump());
document.addEventListener('click', (evt) => checkBtnStart(evt));
jumpBtn.addEventListener('click', () => jump());
