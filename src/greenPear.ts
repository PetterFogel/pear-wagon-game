class greenPear extends fallingObject {

    constructor(x: number, y: number, speed: number) {
        super(x, y, speed)

    }   


    update() {

    }

    draw() {
        image(images.greenPear, this.x, this.y, 70, 70)
    }

}