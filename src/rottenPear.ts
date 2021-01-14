class RottenPear extends FallingObject {

    constructor(x: number, y: number, speed: number, r: number, offset: number) {
        super(x, y, speed, r, offset);
    }   

    update() {

    }

    draw() {
        push();
        imageMode(CENTER);
        image(images.rottenPear, this.x, this.y, this.width, this.width);
        pop();
    }
}