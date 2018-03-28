

let gameSpeed = 10;
let grid = 20;
let tail = 5;
let trail = [];
let apple = { x: Math.floor(Math.random() * grid) + 1, y: Math.floor(Math.random() * grid) + 1 };
let player = { x: grid / 2, y: grid / 2 };
let velocity = { x: 0, y: 0 };
let snakeStart = false;

function createBoard() {
  const container = document.querySelector('.container');
  for (let y = 0; y < grid + 2; y += 1) {
    for (let x = 0; x < grid + 2; x += 1) {
      const theDiv = document.createElement('div');
      if (y === 0 || y === grid + 1 || x === 0 || x === grid + 1) {
        theDiv.style.backgroundColor = 'gray';
        theDiv.setAttribute('class', 'border');
        container.appendChild(theDiv);
      } else {
        theDiv.setAttribute('id', `x${x}y${y}`);
        theDiv.setAttribute('class', 'board');
        theDiv.style.backgroundColor = 'black';
        container.appendChild(theDiv);
      }
    }
  }
}

function redrawBoard() {
  const theSnake = document.querySelectorAll('.snake');
  const theApple = document.querySelector('.apple');
  const theBoard = document.querySelectorAll('.board');
  for (let i = 0; i < theBoard.length; i += 1) {
    theBoard[i].style.backgroundColor = 'black';
  }
  for (let i = 0; i < theSnake.length; i += 1) {
    theSnake[i].style.backgroundColor = 'lime';
  }
  theApple.style.backgroundColor = 'red';
}

function snake() {
  player.x += velocity.x;
  player.y += velocity.y;
  if (player.x <= 0 || player.x > grid || player.y <= 0 || player.y > grid) {
    reset();
  }
  const theHead = document.querySelector(`#x${player.x}y${player.y}`);
  theHead.classList.add('snake');
  while (trail.length >= tail) {
    let temp = trail.shift();
    let remove = document.querySelector(`#x${temp.x}y${temp.y}`);
    remove.classList.remove('snake');
  }
  for (let i = 0; i < trail.length; i += 1) {
    let theTrail = document.querySelector(`#x${trail[i].x}y${trail[i].y}`);
    theTrail.classList.add('snake');
    // debugger;
    if (trail[i].x === player.x && trail[i].y === player.y && snakeStart) {
      console.log('death')
      reset();
    }
  }
  trail.push({ x: player.x, y: player.y });
  if (player.x === apple.x && player.y === apple.y) {
    tail += 1;
    let oldApple = document.querySelector(`#x${apple.x}y${apple.y}`);
    oldApple.classList.remove('apple');
    apple.x = Math.floor(Math.random() * grid) + 1;
    apple.y = Math.floor(Math.random() * grid) + 1;
    let newApple = document.querySelector(`#x${apple.x}y${apple.y}`);
    newApple.classList.add('apple');
  }
}

function keyPress(button) {
  switch (button.keyCode) {
    case 37:
      if (velocity.x !== 1) {
        velocity.x = -1;
        velocity.y = 0;
        snakeStart = true;
      }
      break;
    case 38:
      if (velocity.y !== 1) {
        velocity.x = 0;
        velocity.y = -1;
        snakeStart = true;
      }
      break;
    case 39:
      if (velocity.x !== -1) {
        velocity.x = 1;
        velocity.y = 0;
        snakeStart = true;
      }
      break;
    case 40:
      if (velocity.y !== -1) {
        velocity.x = 0;
        velocity.y = 1;
        snakeStart = true;
      }
      break;
    default:
      break;
  }
}

function reset() {
  player.x = grid / 2;
  player.y = grid / 2;
  velocity.x = 0;
  velocity.y = 0;
  tail = 5;
  trail = [];
  snakeStart = false;
  const theBoard = document.querySelectorAll('.board');
  const theSnake = document.querySelectorAll('.snake');
  for (let i = 0; i < theSnake.length; i += 1) {
    theSnake[i].classList.remove('snake');
  }
  for (let i = 0; i < theBoard.length; i += 1) {
    theBoard[i].style.backgroundColor = 'black';
  }
}

function game() {
  const newApple = document.querySelector(`#x${apple.x}y${apple.y}`);
  newApple.classList.add('apple');
  snake();
  redrawBoard();
}

window.onload = function () {
  createBoard();
  document.addEventListener('keydown', keyPress);
  // let counter = 0;
  // while(counter < 50){
  setInterval(game, 1000 / gameSpeed);
  // counter++;
  // }
  // game();
// }
}
