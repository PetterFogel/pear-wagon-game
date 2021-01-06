class ScoreHpDisplay {
    private x: number
    private y: number
    public points: number
    public HP: number
    public pointIncrease: number;

    constructor() {
        this.x = 150;
        this.y = 120;
        this.points = 0;
        this.HP = 100;
        this.pointIncrease = 10;
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

    addPoints(){
        this.points += this.pointIncrease;
    }

    decreaseHP(type: string){
        if(type == 'rottenPear')this.HP -= 20;
        else this.HP = 0;
    }

    setDoublePoints(){
        this.pointIncrease = 20;
        setTimeout(() => {this.pointIncrease = 10}, 5000);
    }

    increaseHP(){
        if (this.HP < 100){
            this.HP += 10;
        }
    }
}