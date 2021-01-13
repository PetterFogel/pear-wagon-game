class Player {
    public x: number
    public y: number
    public width: number
    public height: number

    constructor() {
        this.x = innerWidth / 2;
        this.y = innerHeight - 138;
        this.width = 150;
        this.height = 80;
    }

    update() {
        this.y = innerHeight - 138;

        if(pearWagon.isMouseSteering){
            this.x = mouseX
        } else {
            if(keyIsDown(LEFT_ARROW)) {
                this.x = this.x - 13;
            } else if (keyIsDown(RIGHT_ARROW)) {
                this.x = this.x + 13;
            }
            if (this.x >= innerWidth) {
                this.x = 75;
            } else if (this.x <= 0) {
                this.x = innerWidth - 75;
            }
        }

    }

    draw() {
        push();
        
        fill(255,255,0)
        // ellipse(mouseX -30, innerHeight -this.yWheel, 20, 20)
        // ellipse(mouseX +35, innerHeight -this.yWheel, 20, 20)

        
        // fill(5)
        // rect(mouseX, innerHeight -this.y, 100, 50)
        imageMode(CENTER)
        // image(img, 50, 50);
        
        image(images.wagon, this.x, this.y, this.width, this.height);

        pop(); 
    }
}