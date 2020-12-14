

class StartScreen {
    private pearWagon: IGameState
    private button: any

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        
        
        
    }

    update() {
        if (typeof(this.button) != "undefined"){
            this.button.mousePressed(() => this.playGame(this.pearWagon))
        } 
    }
    draw() {
        this.button = createButton("play");
        this.button.position(innerWidth / 2, innerHeight / 2);
        this.button.size(200, 100)
        this.update();
        //noLoop();
        
        background(150, 0, 0);
    }

    playGame(pearWagon: IGameState){
        // console.log("clicked!")
        // console.log(pw.gameState);
        pearWagon.gameState = "play";
    }
}






// https://p5js.org/reference/#/p5/createButton

// createButton(label, [value])