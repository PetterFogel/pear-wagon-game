class rottenPear extends fallingObject {

    constructor(x: number, y: number, speed: number) {
        super(x, y, speed)
    }   

    update() {

    }

    draw() {
        image(images.rottenPear, this.x, this.y, 70, 70)
    }
}