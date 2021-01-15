let Player;

function setup() {
  const canvas = createCanvas(innerWidth, innerHeight);

  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);

  Player = new player();


  drop = new Drop(random(0, 700), 20, 20);
  drop2 = new Drop(random(0, 700), 20, 20);

   
}



function draw() {
Player.display();

score();

rainDrops();
drop.respawn();
drop2.respawn();
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
          noCursor()
          rect(mouseX, innerHeight -this.y, 100, 50)
    }
  }