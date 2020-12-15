class Button {
    private x: number
    private y: number
    private w: number
    private h: number
    private color: string

    constructor(x: number, y: number, w: number, h: number, color: string) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }
    update() {

    }
    draw() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
}

let button = new Button(30, 20, 70, 50, "red");