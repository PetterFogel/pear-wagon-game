class Drop {

    private x: number
    private y: number
    private d: number

    constructor(x: number, y: number, d: number) {
        this.x = x
        this.y = y
        this.d = d

    }

    move() {
        this.y = this.y + 6;
        
     }

    respawn() {
       
    if (this.y > innerHeight){
        this.y = 0;
        this.x = random(innerWidth);
    }  
    }

    update() {

    }

    draw() {

    image(images.freshParon, this.x, this.y, 70, 60)
    image(images.ruttetParon, this.x, this.y, 70, 60)
    // noStroke();
    // fill("green");
    // ellipse(this.x, this.y, this.d * 2)

    }

}