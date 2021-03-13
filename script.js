/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin)) + intMin;
}

function rgbRandomValueGenerator() {
  const red = getRandomInt(0, 256);
  const green = getRandomInt(0, 256);
  const blue = getRandomInt(0, 256);
  const divRgbColor = document.getElementById('rgb-color');
  divRgbColor.innerText = `(${red}, ${green}, ${blue})`;
}

window.onload = () => {
  rgbRandomValueGenerator();
};
