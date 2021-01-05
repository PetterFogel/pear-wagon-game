class ScoreHpDisplay {
    private x: number
    private y: number

    constructor() {
        this.x = 150;
        this.y = 120;
    }

    update() {


    }

    draw() {
        push();

        fill('black')
        strokeWeight(10);
        fill('white')
        rectMode(CENTER)
        rect(90, 75, this.x, this.y, 20)
        
        textAlign(CENTER)
        textSize(15);
        fill('red')
        text('HP:', 52, 102);
        fill('black')
        text('POINTS:', 70, 62);
        
        

        pop();
    }
}