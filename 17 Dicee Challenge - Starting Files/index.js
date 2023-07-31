const getRandomNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
}

const randomNumber1 = getRandomNumber();
const randomNumber2 = getRandomNumber();

const title = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
  title.innerHTML = '🚩 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = 'Player 2 Wins! 🚩';
} else 
{
  title.innerHTML = 'Draw!';
}

document.querySelector('.img1').setAttribute('src', `./images/dice${randomNumber1}.png`);
document.querySelector('.img2').setAttribute('src', `./images/dice${randomNumber2}.png`);