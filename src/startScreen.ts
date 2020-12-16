

class StartScreen {
    private pearWagon: IGameState
    private playButton: Button 
    private howToButton: Button
    private buttons:Button[]
    
    
    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.playButton = new Button(0, 0, 300, 150, "limegreen");
        this.howToButton = new Button(0, 0, 300, 150, "limegreen");
        this.buttons = [];
        this.buttons.push(this.playButton);
        this.buttons.push(this.howToButton);
    }
    
    update() {
      
                
    }
    draw() {
        background(150, 0, 0);
        this.playButton.x = innerWidth / 2 - 600;
        this.playButton.y = innerHeight / 2;
        this.howToButton.x = innerWidth / 2 + 300;
        this.howToButton.y = innerHeight / 2;
        this.playButton.draw();
        this.howToButton.draw(); 
    }

    clicked(){
        for(let i = 0; i < this.buttons.length; i++){
            if (i === 0){
                if ((mouseX > this.buttons[0].x) && (mouseX < this.buttons[0].x + 300) &&
                (mouseY > this.buttons[0].y) && (mouseY < this.buttons[0].y + 150)) {
                  this.pearWagon.gameState = "play";
                }
            } else {
                if ((mouseX > this.buttons[1].x) && (mouseX < this.buttons[1].x + 300) &&
                (mouseY > this.buttons[1].y) && (mouseY < this.buttons[1].y + 150)) {
                  pearWagon.gameState = "how";
                }
            }
        }
        
    }
}






// https://p5js.org/reference/#/p5/createButton

// createButton(label, [value])