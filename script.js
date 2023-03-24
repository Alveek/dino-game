const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const exitBtn = document.querySelector('.game__btn-quit');
const jumpBtn = document.querySelector('game__btn-jump');

document.addEventListener("keydown", function(evt) {

  jump();
});

document.addEventListener("click", function(evt) {
// console.log(evt.target)
jump()
});

// console.log(dino,cactus)
const jump = (evt) => {
  if (dino.classList != "jump" || evt.tardet === jumpBtn) {
    dino.classList.add("jump")
  }
  setTimeout( function() {
    dino.classList.remove("jump")
  }, 300)
}  

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER!!")
  }
})