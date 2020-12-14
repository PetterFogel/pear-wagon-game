

class StartScreen {
    private pearWagon: IGameState
    private playButton: any
    private howToPlayButton: any

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
    }

    update() {
        if (typeof(this.playButton) != "undefined"){
            this.playButton.mousePressed(() => this.buttonClicked(this.pearWagon, "play"))
        }
        if (typeof(this.howToPlayButton) != "undefined"){
            this.howToPlayButton.mousePressed(() => this.buttonClicked(this.pearWagon, "how"))
        }
    }
    draw() {
        this.playButton = createButton("play");
        this.playButton.position(innerWidth / 2, innerHeight / 2);
        this.playButton.size(200, 100)

        this.howToPlayButton = createButton("How to");
        this.howToPlayButton.position(innerWidth / 2 + 150, innerHeight / 2 + 150);
        this.howToPlayButton.size(200, 100);

        this.update();
        //noLoop();
        
        background(150, 0, 0);
    }

    buttonClicked(pearWagon: IGameState, mainState: any){
        pearWagon.gameState = mainState;
    }
}






// https://p5js.org/reference/#/p5/createButton

// createButton(label, [value])