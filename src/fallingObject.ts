abstract class FallingObject {

    public x: number;
    public y: number;
    public width: number;
    private speed: number;
    public offset: number;

    constructor(x: number, y: number, speed: number, width: number, offset: number) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.offset = offset;
    }   

    move() {
        this.y = this.y + this.speed;
    }

    update() {

    }

    draw() {

    }
}