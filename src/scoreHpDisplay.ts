class ScoreHpDisplay {
    private pearWagon: IGameState
    private x: number
    private y: number
    public points: number
    public HP: number
    public pointIncrease: number;

    constructor(pearWagon: IGameState) {
        this.x = 250;
        this.y = 120;
        this.points = 0;
        this.HP = 100;
        this.pointIncrease = 10;
        this.pearWagon = pearWagon;
    }

    update() {
        if (this.HP <= 0) {
            this.pearWagon.setNewGameState("over");
        }          
    }

    draw() {
        push();

        fill('black')
        strokeWeight(10);
        fill('white')
        rectMode(CENTER)
        rect(140, 75, this.x, this.y, 20)
        
        textAlign(CENTER)
        textSize(30);
        fill('red')
        text('HP:', 100, 102);
        text(this.HP, 160, 102);
        fill('black')
        text('POINTS:', 100, 62);
        text(this.points, 200, 62);
        
        

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