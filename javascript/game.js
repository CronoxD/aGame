
const canvas = document.getElementById('dibujo');
const ctx = canvas.getContext('2d');

class circulo{
  constructor(x,y,color,radius,ctx) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.ctx = ctx;
    this.rePaint();
  }
  rePaint(x=this.x,y=this.y,color=this.color,radius=this.radius) {
    this.clear(); //first clear the current circle
    this.x = x; //update data circle
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius,0, 2*Math.PI); //repaint
    this.ctx.fill();
  }
  paint(x=this.x,y=this.y,color=this.color,radius=this.radius) {
    this.x = x; //update data circle
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius,0, 2*Math.PI); //repaint
    this.ctx.fill();
  }

  speedDirection(speed=this.speed, direction=this.direction) {
    this.speed = speed;
    this.direction = direction%360;
    console.log(direction);
    this.clear();
    this.speedY = Math.sin(-this.direction*Math.PI/180)*this.speed;
    this.speedX = Math.cos(-this.direction*Math.PI/180)*this.speed;
    this.paint(this.x+=this.speedX, this.y+=this.speedY);
  }

  clear(){
    // this.ctx.clearRect(this.x - this.radius - 1, this.y - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
    this.ctx.clearRect(this.x - this.radius - 1, this.y - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
  }

}

var player = new circulo(100,100,'purple',30,ctx);
const LEFT = 37;
const RIGHT = 39;
var keyCode;
startGame();

function startGame() {
  player.speedDirection(2,0);
  setInterval(updateGame,30);
  window.addEventListener('keydown', function (e) {
            keyCode = e.keyCode;
  });
  window.addEventListener('keyup', function (e) {
            keyCode = false;
  });
}

function updateGame(){
  if(keyCode==LEFT) {
    player.direction+=5;
  }
  if(keyCode==RIGHT) {
    player.direction-=5;
  }
  player.speedDirection();
}
