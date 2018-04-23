
// The circle class is which give life to the players
// For now just it's a circle that moves automatically
// We can get control of the circle with the buttons LEFT and RIGHT
class circle{
  //The constructor have the principial player's parameters
  // x and y are the circle's initial position
  // obviously color and radius are the color and radius of the circle
  // ctx is the context of canvas
  constructor(x,y,color,radius,ctx) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.ctx = ctx;
    this.paint();
  }
  // The method rePaint() is to modify the values of the circle
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
  // the diference between paint method and rePaint method is
  // paint don't call the function clear()
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
  // this method receives the speed and direction
  speedDirection(speed=this.speed, direction=this.direction) {
    // speed is px/ms
    this.speed = speed;
    // the direction is in a range between 0 and 360, we can write negative
    // values too
    this.direction = direction%360;
    this.clear();
    // speedX and speedY are the components x and y of the speed
    this.speedY = Math.sin(-this.direction*Math.PI/180)*this.speed;
    this.speedX = Math.cos(-this.direction*Math.PI/180)*this.speed;
    // just paint again the circle with the new position
    this.paint(this.x+=this.speedX, this.y+=this.speedY);
  }
  // the method just clear the zone where is the circle
  clear(){
    this.ctx.clearRect(this.x - this.radius - 1, this.y - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
  }

}

// the program starts getting the canvas' element
// and it context
const canvas = document.getElementById('dibujo');
const ctx = canvas.getContext('2d');
// The const LEFT and RIGHT are the values right and left of the keyboard
const LEFT = 37;
const RIGHT = 39;
// We create a object circle with the name player
var player = new circle(100,100,'purple',10,ctx);
// Call to the function startGame()
startGame();

// In startGame() I set the initial direction and speed of the players
// and the mili seconds in setInterval
function startGame() {
  player.speedDirection(2,0);
  setInterval(updateGame,30);
  // The events keyup and keydown are adden
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
