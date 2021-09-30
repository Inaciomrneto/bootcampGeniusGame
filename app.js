let order = [];
let clickedOrder = [];
let score = 0;

//0-green  1-red  2-yellow  3-blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

//acende a próxima cor
let lightColor = (element, number) =>{
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  },number);
}

//checa se os botões clicados são os mesmos da ordem gerado no jogo
let checkOrder = () => {
  for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação : ${score}\n Você acertou! Iniciando próximo nivel!`);
    nextLevel()
  }
}

//função para o click do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
      createColorElement(color).classList.remove('selected');
      checkOrder();
  },250);
}

//função que retorna cor
let createColorElement = (color) => {
  if(color == 0){
    return green;
  }
  else if(color == 1){
    return red;
  }
  else if(color == 2){
    return yellow;
  }
  else if(color == 3){
    return blue;
  }
}

//função próximo nivel
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//função game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\nGame Over!`);
  order = [];
  clickedOrder = [];

  playGame();
}

//função novo jogo
let playGame = () => {
  alert('Iniciando Novo jogo!');
  score = 0;

  nextLevel();
}

//clicks
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();