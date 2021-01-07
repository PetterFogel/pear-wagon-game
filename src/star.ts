class Star extends FallingObject {

    constructor(x: number, y: number, speed: number, r: number, offset: number) {
        super(x, y, speed, r, offset)

    }   


    update() {

    }

    draw() {
        push()
        imageMode(CENTER);
        image(images.star, this.x, this.y, 70, 70)
        // ellipse(this.x, this.y, 70);
        // fill('yellow');
        pop()
    }

}