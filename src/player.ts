class Player {
    private y: number

    constructor() {
        this.y = 180;
    }

    update() {

    }

    draw() {
        fill(255,255,0)
        // ellipse(mouseX -30, innerHeight -this.yWheel, 20, 20)
        // ellipse(mouseX +35, innerHeight -this.yWheel, 20, 20)

        
        // fill(5)
        // rect(mouseX, innerHeight -this.y, 100, 50)
        imageMode(CENTER)
        // image(img, 50, 50);
        
        image(images.wagon, mouseX, innerHeight - this.y, 120, 160);

        noCursor()

    }

}