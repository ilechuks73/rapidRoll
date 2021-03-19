export default class Slab {
  constructor(gameWidth, gameHeight) {
    this.width = 100;
    this.height = 10;
    this.colors = ['blue', 'green', 'red', 'yellow']
    this.color = this.colors[Math.floor(Math.random()*this.colors.length)]
    this.speed = {
      x: 1,
      y: 0.5
    }

    this.position = {
      x: Math.random() * (gameWidth - this.width),
      y: gameHeight 
    };
    
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  move(gameWidth, gameHeight, ball, speed) {
    this.position.y -= this.speed.y

    if (ball.position.y + ball.radius > this.position.y && ball.position.y + ball.radius < this.position.y + this.height && ball.position.x + ball.radius > this.position.x && ball.position.x - ball.radius < this.position.x + this.width) {
      ball.position.y = this.position.y - ball.radius
    }
    if (ball.position.y + ball.radius > this.position.y + this.height) {
      ball.speed.y = 4;
    }
  }
}