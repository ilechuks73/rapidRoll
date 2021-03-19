export default class Ball {

  constructor(gameWidth, gameHeight) {
    this.width = 30;
    this.height = 30;
    this.radius = this.width / 2;

    this.speed = {
      x: 0,
      y: 4
    }

    this.position = {
      x: gameWidth / 2,
      y: -gameHeight
    }
  };

  draw(ctx) {
    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
  };

  bounce(gameWidth, gameHeight) {
    this.position.y += this.speed.y;
    
  };

  slide(gameWidth){
    this.position.x += this.speed.x
    if(this.position.x + this.radius > gameWidth){
      this.position.x = gameWidth - this.radius
      this.speed.x = 0
    }
    if(this.position.x -this.radius < 0){
      this.position.x = this.radius
      this.speed.x = 0
    }
  }
};

