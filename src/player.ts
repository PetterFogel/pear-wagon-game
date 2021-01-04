class Player {
    private y: number
    private yWheel: number

    constructor() {
        this.y = 100
        this.yWheel = 65
    }

    update() {

    }

    draw() {
        fill(255,255,0)
        ellipse(mouseX -30, innerHeight -this.yWheel, 20, 20)
        ellipse(mouseX +35, innerHeight -this.yWheel, 20, 20)

        rectMode(CENTER)
        fill(5)
        noCursor()
        rect(mouseX, innerHeight -this.y, 100, 50)
    }

}