

class StartScreen {
    private pearWagon: IGameState
    private playButton: Button 
    private howToButton: Button
    // private playButton: any
    // private howToPlayButton: any
    
    
    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.playButton = new Button(0, 0, 300, 150, "limegreen");
        this.howToButton = new Button(0, 0, 300, 150, "limegreen");
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

    buttonClicked(){
        // this.pearWagon.gameState = mainState;
    }
}






// https://p5js.org/reference/#/p5/createButton

// createButton(label, [value])