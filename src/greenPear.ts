class GreenPear extends FallingObject {
    // public r: number
    constructor(x: number, y: number, speed: number, r: number, offset: number) {
        super(x, y, speed, r, offset)
        // this.r = 70;
    }   


    update() {

    }

    draw() {
        push()
        imageMode(CENTER);
        // noStroke()
        // ellipse(this.x, this.y, this.r)
        // fill(0)
        image(images.greenPear, this.x, this.y, this.width, this.width);
        pop()
    }

}