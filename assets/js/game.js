import Ball from './ball.js'
import Slab from './slab.js'
import { collide } from './collision.js'


let game = document.querySelector('#game')
var ctx = game.getContext('2d')

let speed = 0.3
const GAME_WIDTH = 500;
const GAME_HEIGHT = window.innerHeight - 10;

game.setAttribute('width', GAME_WIDTH + 'px');
game.setAttribute('height', GAME_HEIGHT + 'px');
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
let slab = []

//for (let i = 0; i < 20; i++) {
  setInterval(() => {
    slab.push(new Slab(GAME_WIDTH, GAME_HEIGHT))
  }, 1500);
  
//}

let isSliding = false;

const slide = (direction) => {
  if(direction === 'right'){
    ball.speed.x = 3
  }
  if(direction === 'left'){
    ball.speed.x = -3
  }
}
  

const key = (e) => {
  if (e.keyCode === 39) {
    slide('right')
  }
  if (e.keyCode === 37) {
    slide('left')
  }
}

document.addEventListener('keydown', key)
document.addEventListener('keyup', () => {
  ball.speed.x = 0
})


setInterval(() => {
  speed += 0.1
  int -= 100
  console.log(speed)
 }, 5000);

const gameLoop = () => {

  
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ball.draw(ctx)
    for (let i = 0; i < slab.length; i++) {
      slab[i].draw(ctx)
      slab[i].move(GAME_WIDTH, GAME_HEIGHT, ball, speed)
    }
    ball.bounce(GAME_WIDTH, GAME_HEIGHT);
    ball.slide(GAME_WIDTH)


  requestAnimationFrame(gameLoop)
}
gameLoop()