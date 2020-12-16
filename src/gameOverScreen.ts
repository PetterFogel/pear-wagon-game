
class GameOverScreen {
    private pearWagon: IGameState;
    private playAgain: Button;

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.playAgain = new Button(350, 640, 300, 150,  "limegreen");
    }
    update() {
        // if (mouseIsPressed) {
        //     this.pearWagon.gameState = "start";
        // }
    }
    draw() {
        background(0,191,255);
        strokeWeight(4);
        stroke(0, 0, 0);
        rect(150, 150, 700, 700, 30);
        fill(255, 255, 255);
        rect(325, 340, 350, 250, 30);
        this.playAgain.draw();
        noStroke();
        fill(0,191,255);
        textSize(40);
        text('Your score:', 400, 420);
        fill('black');
        textSize(60);
        text('156', 440, 500);
        fill('red');
        textSize(30);
        text('p', 550, 500)
        fill('black');
        strokeWeight(1.5);
        textSize(40);
        text('Play Again', 400, 725);
        textSize(80);
        text('Game Over',290, 270);
        fill('red');

    }
    clicked(){
                if ((mouseX > this.playAgain.x) && (mouseX < this.playAgain.x + 300) &&
                (mouseY > this.playAgain.y) && (mouseY < this.playAgain.y + 150)) {
                  this.pearWagon.gameState = "start";
                }
                
            }
        
        
    
}