
let gameSpeed = 10;
let grid = 20;
let tail = 5;
let lives = 3;
let scoreHistory = [{ name: 'Jim', score: 30 }, { name: 'Phil', score: 50 }, { name: 'Gamer', score: 14 }, { name: 'Jimbo', score: 28 }, { name: 'Jim', score: 30 }, { name: 'Phil', score: 50 }, { name: 'Gamer', score: 14 }, { name: 'Jimbo', score: 28 }, { name: 'Gamer', score: 14 }, { name: 'Jimbo', score: 28 }, { name: 'Jim', score: 30 }, { name: 'Phil', score: 50 }, { name: 'Gamer', score: 14 }, { name: 'Jimbo', score: 28 }];
let trail = [];
let apple = { x: Math.floor(Math.random() * grid) + 1, y: Math.floor(Math.random() * grid) + 1 };
let player = { x: grid / 2, y: grid / 2 };
let velocity = { x: 0, y: 0 };
let snakeStart = false;
let playerName;
let theScore = 0;
let fps;

function createBoard() {
  for (let y = 0; y < grid + 2; y += 1) {
    for (let x = 0; x < grid + 2; x += 1) {
      const theDiv = $('<div>');
      if (y === 0 || y === grid + 1 || x === 0 || x === grid + 1) {
        theDiv.addClass('border');
        theDiv.appendTo('.container');
      } else {
        theDiv.attr('id', `x${x}y${y}`);
        theDiv.addClass('board');
        theDiv.appendTo('.container');
      }
    }
  }
}

function snake() {
  player.x += velocity.x;
  player.y += velocity.y;
  if (player.x <= 0 || player.x > grid || player.y <= 0 || player.y > grid) {
    reset();
  }
  const theHead = $(`#x${player.x}y${player.y}`);
  theHead.addClass('snake');
  while (trail.length >= tail) {
    let temp = trail.shift();
    let remove = $(`#x${temp.x}y${temp.y}`);
    remove.removeClass('snake');
  }
  for (let i = 0; i < trail.length; i += 1) {
    let theTrail = $(`#x${trail[i].x}y${trail[i].y}`);
    theTrail.addClass('snake');
    if (trail[i].x === player.x && trail[i].y === player.y && snakeStart) {
      console.log('death')
      reset();
    }
  }
  trail.push({ x: player.x, y: player.y });
  appleLogic();
}

function appleLogic() {
  if (player.x === apple.x && player.y === apple.y) {
    tail += 1;
    theScore += 1;
    let oldApple = $(`#x${apple.x}y${apple.y}`);
    oldApple.removeClass('apple');
    apple.x = Math.floor(Math.random() * grid) + 1;
    apple.y = Math.floor(Math.random() * grid) + 1;
    let newApple = $(`#x${apple.x}y${apple.y}`);
    newApple.addClass('apple');
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
  lives -= 1;
  $('.snake').removeClass('snake');
}

function game() {
  const newApple = $(`#x${apple.x}y${apple.y}`);
  newApple.addClass('apple');
  if (lives > 0) {
    snake();
  } else {
    clearInterval(fps);
    gameOver();
  }
}

window.onload = function () {
  createBoard();
  $(document).keydown(keyPress);
  landingPage();
}

function landingPage() {
  $('.screen').empty();
  $(document).unbind('keydown', landingPage);
  let screen = $('.screen');
  let title = $('<h1>').html('SNAKE');
  let buttons = $('<div>').addClass('buttons');
  let newGame = $('<p>').html('NEW GAME');
  let options = $('<p>').html('OPTIONS');
  let scores = $('<div>');
  let scoreTitle = $('<h2>').html('HIGHSCORES');
  let col1 = $('<div>').addClass('col1');
  let col2 = $('<div>').addClass('col2');
  title.appendTo(screen);
  buttons.appendTo(screen);
  newGame.click(nameScreen);
  newGame.addClass('newgame');
  newGame.appendTo(buttons);
  options.click(optionScreen);
  options.addClass('options');
  options.appendTo(buttons);
  scores.addClass('scores');
  scores.appendTo(screen);
  scoreTitle.appendTo(scores);
  $('<hr>').appendTo(scores);
  col1.appendTo(scores);
  col2.appendTo(scores);
  highScore();
  //setTimeout(nameScreen, 1000);
}

function nameScreen() {
  $('.screen').empty();
  let container = $('<div>').addClass('jar');
  container.appendTo('.screen');
  let label = $('<p>').html('Enter your name');
  let input = $('<input>');
  let button = $('<h2>').html('SUBMIT');
  button.click(startGame);
  input.keydown((button) => {
    if(button.keyCode === 13) {
      console.log('start pressed')
      startGame();
    }
  });
  label.appendTo(container);
  input.appendTo(container);
  button.appendTo(container);
}

function startGame() {
  console.log('startgame')
  playerName = $('input').val();
  $('.screen').empty();
  fps = setInterval(game, 1000 / gameSpeed);
}

function gameOver() {
  let entry = { name: playerName, score: theScore, id: scoreHistory.length};
  scoreHistory.push(entry);
  reset();
  let lives = 3;
  $('.apple').removeClass('apple');
  let container = $('<div>').addClass('buttons');
  container.css('height', '100px');
  container.appendTo('.screen');
  let message = $('<h2>').html('GAME OVER!');
  let displayScore = $('<p>').html(`Score: ${theScore}`);
  let homeButton = $('<p>').html('HOME');
  homeButton.click(landingPage);
  $(document).keydown(landingPage);
  message.appendTo('.buttons');
  displayScore.appendTo('.buttons');
  homeButton.appendTo('.buttons');
}

function optionScreen() {

}

function sortScore() {
  scoreHistory.sort((a, b) => {
    return -a.score + b.score;
  });
}

function highScore() {
  sortScore();
  for (let i = 0; i < scoreHistory.length; i += 1) {
    if (i < 16) {
      let theDiv = $('<div>').addClass('list clearfix');
      let p1 = $('<p>').addClass('playername');
      let p2 = $('<p>').addClass('playerscore');
      p1.html(`${scoreHistory[i].name}`);
      p2.html(`${scoreHistory[i].score}`);
      if ($('.col1 .list').length >= 8) {
        theDiv.appendTo('.col2');
        p1.appendTo('.col2 .list:last-of-type');
        p2.appendTo('.col2 .list:last-of-type');
      } else {
        theDiv.appendTo('.col1');
        p1.appendTo('.col1 .list:last-of-type');
        p2.appendTo('.col1 .list:last-of-type');
      }

    }
  }
}









