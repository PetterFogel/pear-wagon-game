abstract class fallingObject {

    public x: number
    public y: number
    private speed: number

    constructor(x: number, y: number, speed: number) {
        this.x = x
        this.y = y
        this.speed = speed
    }   

    move() {
        this.y = this.y + this.speed;
    }

    // respawn() {
    //     if (this.y > innerHeight){
    //         this.y = Math.floor(Math.random() * 100) -100;
    //         this.x = random(innerWidth);
    //     }  
    // }

    update() {

    }

    draw() {

    //image(images.freshParon, this.x, this.y, 70, 60)

    // image(images.ruttetParon, this.x, this.y, 70, 60)
    // noStroke();
    // fill("green");
    // ellipse(this.x, this.y, this.d * 2)

    }

}