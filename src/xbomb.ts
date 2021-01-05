class Bomb extends FallingObject {

    constructor(x: number, y: number, speed: number, r: number) {
        super(x, y, speed, r)

    }   


    update() {

    }

    draw() {
        push()
        image(images.bomb, this.x, this.y, 70, 70)
        // ellipse(this.x, this.y, 70);
        // fill('black');
        pop()
    }

}