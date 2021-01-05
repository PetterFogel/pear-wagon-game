class GreenPear extends FallingObject {
    // public r: number
    constructor(x: number, y: number, speed: number, r: number) {
        super(x, y, speed, r)
        // this.r = 70;
    }   


    update() {

    }

    draw() {
        push()
        // noStroke()
        // ellipse(this.x, this.y, this.r)
        // fill(0)
        image(images.greenPear, this.x, this.y, this.r, this.r);
        pop()
    }

}