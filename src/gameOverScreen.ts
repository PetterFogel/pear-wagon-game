class GameOverScreen {
    private pearWagon: IGameState;
    private playAgain: Button;
    private scoreList: number[];


    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.playAgain = new Button(innerWidth / 2, innerHeight / 2, 300, 150,  "limegreen");
        let score = (getItem('points') || []) as string[];
        this.scoreList = score.map(point => Number(point));
    }

    update(points: number) {
        this.playAgain.x = innerWidth / 2 - 150;
        this.playAgain.y = innerHeight / 2 + 80;
        
        const buttonWasClicked = this.playAgain.update();
        if (buttonWasClicked) {
            this.pearWagon.setNewGameState("start");
            this.scoreList.push(points);
            storeItem('points', this.scoreList);
        }
    }

    draw(points: number) {
        push();
        cursor(ARROW);
        background(136, 207, 248);
        
        // Red and white square in center
        fill(239, 35, 35);
        strokeWeight(4);
        stroke(0, 0, 0);       
        rectMode(CENTER); 
        rect(innerWidth / 2, innerHeight / 2, 700, 500, 30);
        fill(255, 255, 255);
        rect(innerWidth / 2, innerHeight / 2 -40, 400, 200, 30);
        
        // Play button
        rectMode(CORNER);
        this.playAgain.draw(); 
        noStroke();
        fill(0,191,255);
        
        // Highscore
        textSize(45);
        textAlign(CENTER);
        text('Your score', innerWidth / 2, innerHeight / 2 - 700 / 9.5 );
        fill('black');

        // Displays score points
        textSize(70);
        textAlign(CENTER);
        text(points, innerWidth / 2, innerHeight / 2 + 10);
        fill('black');

        // Button text
        strokeWeight(1.5);
        textSize(40);
        textAlign(CENTER);
        text('Play Again', innerWidth / 2, innerHeight / 2 + 425 / 2.5);

        // Game over title text
        textSize(60);
        textAlign(CENTER, TOP);
        text('GAME OVER',innerWidth / 2, innerHeight / 2 - 550 / 2.5);
        pop();
    }   
}