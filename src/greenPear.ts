class greenPear extends fallingObject {

    constructor(x: number, y: number, d: number, speed: number) {
        super(x, y, d, speed)

    }   


    update() {

    }

    draw() {
        image(images.freshParon, this.x, this.y, 70, 60)
    }

}