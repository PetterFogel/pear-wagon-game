abstract class FallingObject {

    public x: number
    public y: number
    public width: number
    private speed: number
    public offset: number

    constructor(x: number, y: number, speed: number, width: number, offset: number) {
        this.x = x
        this.y = y
        this.speed = speed
        this.width = width;
        this.offset = offset;
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
    // stroke(5);

    // ellipse(this.x, this.y, 100)
    // fill('yellow')
    //image(images.freshParon, this.x, this.y, 70, 60)

    // image(images.ruttetParon, this.x, this.y, 70, 60)
    // noStroke();
    // fill("green");
    // ellipse(this.x, this.y, this.d * 2)

    }

}