function setup() {
    const canvas = createCanvas(700, 500);
    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;
    canvas.position(x, y);
    
    drop = new Drop(random(0, 700), 20, 20);
    drop2 = new Drop(random(0, 700), 20, 20);
}

function draw() {
    background(200, 200, 200);

    rainDrops();
    drop.respawn();
    drop2.respawn();
}

function rainDrops() {
    getshape();
    getMovement();
}

function getshape() {
    drop.shape();
    drop2.shape();
}

function getMovement() {
    drop.move();
    drop2.move();
}

class Drop {
    constructor(x, y, d) {
        this.x = x,
        this.y = y,
        this.d = d // Diameter
    }

    shape() {
        noStroke();
        fill(0, 191, 255);
        ellipse(this.x, this.y, this.d * 2);
    }

    move() {
        this.y = this.y + 6;
        drop2.y = drop2.y + 2;
    }

    respawn() {
        if (this.y > 500){
            this.y = 0;
            this.x = random(400);
            }  
    }
}