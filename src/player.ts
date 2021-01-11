class Player {
    public x: number
    public y: number
    public width: number
    public height: number
    private offset: number
    private fallback: number


    constructor() {
        this.x = innerWidth / 2;
        this.y = innerHeight - 138;
        this.width = 150;
        this.height = 80;
        this.offset =  0;
        this.fallback = 0;

    }

    update() {
        this.y = innerHeight - 138;

        if(keyIsDown(LEFT_ARROW)) {
            this.x = this.x - 10;
            this.offset = this.x;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + 10;
            this.offset = this.x;
        } else {
            this.x = mouseX + this.offset;
        }

        // if (this.x >= innerWidth) {
        //     this.x = innerWidth - 75;
        //     this.offset = this.x;
        // } else if (this.x <= 0) {
        //     this.x = innerWidth + 75;
        //     this.offset = this.x;
        // }
    }
    
    // steering(event: KeyboardEvent) {
    //     this.x = innerWidth / 2;
    //     switch (event.key) {
    //         case "ArrowLeft":
    //             this.x = this.x - 10;
    //             console.log("Left");
    //             console.log(this.x);
    //             break;
    //         case "ArrowRight":

    //             console.log("Right")
    //             console.log(this.x);
    //             break;
    //     }
    // }

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