
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
  // move(direction, speed) {
  //
  // }

  clear(){
    this.ctx.clearRect(this.x - this.radius - 1, this.y - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
  }

}

let components = [];
let component = new circulo(100,100,'purple',30,ctx);
// component.clear();
// component.rePaint(400,400);
