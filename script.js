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

function showBackgroundColorRandomBall() {
  const randomIndex = getRandomInt(0, 6);
  const balls = document.querySelectorAll('.ball');
  const divRgbColor = document.getElementById('rgb-color');
  const rgb = balls[randomIndex].style.backgroundColor.slice(3);
  divRgbColor.innerText = `${rgb}`;
}

window.onload = () => {
  defineRandomBackgroundColorBalls();
  showBackgroundColorRandomBall();
};
