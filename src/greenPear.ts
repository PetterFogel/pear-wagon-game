class GreenPear extends FallingObject {
    public r: number
    constructor(x: number, y: number, speed: number) {
        super(x, y, speed)
        this.r = 70;
    }   


    update() {

    }

    draw() {
        image(images.greenPear, this.x, this.y, this.r, this.r);
    }

}