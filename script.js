/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin)) + intMin;
}

function defineRandomBackgroundColorBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    const red = getRandomInt(0, 256);
    const green = getRandomInt(0, 256);
    const blue = getRandomInt(0, 256);
    balls[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

const randomNumber = getRandomInt(0, 6);

function getRgbBallGuessed() {
  const randomIndex = randomNumber;
  const balls = document.querySelectorAll('.ball');
  return balls[randomIndex].style.backgroundColor;
}

function showRgbBallGuessed() {
  const divRgbColor = document.getElementById('rgb-color');
  const rgbBallGuessed = getRgbBallGuessed();
  divRgbColor.innerText = `${rgbBallGuessed.slice(3)}`;
}

function showAnswer(event) {
  const rgbBallGuessed = getRgbBallGuessed();
  const targetBackgroundColor = event.target.style.backgroundColor;
  if (targetBackgroundColor === rgbBallGuessed) {
    document.getElementById('answer').innerText = 'Acertou!';
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
}

function addEventClassBall() {
  const balls = document.getElementById('balls-section');
  balls.addEventListener('click', showAnswer);
}
addEventClassBall();

window.onload = () => {
  defineRandomBackgroundColorBalls();
  showRgbBallGuessed();
};
