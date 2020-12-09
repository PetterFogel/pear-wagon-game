let Player;

function setup() {
    createCanvas(innerWidth, innerHeight);
    Player = new player();
     
  }



function draw() {
  Player.display();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function player() {
    this.y = 100;
    this.yWheel = 65;
      this.display = function() {
         background(200);
         fill(255,255,0)
         ellipse(mouseX -30, innerHeight -this.yWheel, 20, 20)
         ellipse(mouseX +35, innerHeight -this.yWheel, 20, 20)
      
         rectMode(CENTER)
          fill(5)
          rect(mouseX, innerHeight -this.y, 100, 50)
    }
  }