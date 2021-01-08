
class GameOverScreen {
    private pearWagon: IGameState;
    private playAgain: Button;


    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.playAgain = new Button(innerWidth / 2, innerHeight / 2, 300, 150,  "limegreen");
    }

    update() {
        this.playAgain.x = innerWidth / 2 - 150;
        this.playAgain.y = innerHeight / 2 + 165;
        
        const buttonWasClicked = this.playAgain.update();
        if (buttonWasClicked) {
            this.pearWagon.setNewGameState("start");
        }

    }

    // resetData() {
    //     this.points = 0;
    //     this.HP = 100;
    // }

    draw(points: number) {
        push();
        cursor(ARROW);
        background(0,191,255);
        
        //red and white square in center
        fill('red');
        strokeWeight(4);
        stroke(0, 0, 0);       
        rectMode(CENTER); 
        rect(innerWidth / 2, innerHeight / 2, 700, 700, 30);
        fill(255, 255, 255);
        rect(innerWidth / 2, innerHeight / 2, 350, 250, 30);
        
        //play button
        rectMode(CORNER);
        this.playAgain.draw(); 
        noStroke();
        fill(0,191,255);
        
        //Highscore
        textSize(45);
        textAlign(CENTER);
        text('Your score', innerWidth / 2, innerHeight / 2 - 700 / 9.5 );
        fill('black');

        //displays score points
        textSize(70);
        textAlign(CENTER);
        text(points, innerWidth / 2, innerHeight / 2 + 30);
        fill('black');

        //button text
        strokeWeight(1.5);
        textSize(40);
        textAlign(CENTER);
        text('Play Again', innerWidth / 2, innerHeight / 2 + 625 / 2.5);

        //game over title text
        textSize(80);
        textAlign(CENTER, TOP);
        text('Game Over',innerWidth / 2, innerHeight / 2 - 700 / 2.5);
        pop();
    }

    // reset() {
    //     this.pearWagon.gameState = "start";
    //     this.points = 0;
    //     this.HP = 100;
    // }
    
}