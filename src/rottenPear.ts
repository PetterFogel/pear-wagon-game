class RottenPear extends FallingObject {

    constructor(x: number, y: number, speed: number, r: number) {
        super(x, y, speed, r)
    }   

    update() {

    }

    draw() {
        push()
        image(images.rottenPear, this.x, this.y, this.r, this.r)
        // ellipse(this.x, this.y, this.r)
        // fill('yellow')
        pop()
    }
}