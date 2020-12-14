

class StartScreen {
    private pearWagon: IGameState
    private button: any

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        
        
    }

    update() {
        console.log("update:");
        console.log(this.button);
        console.log(typeof(this.button));
        if (typeof(this.button) == "undefined"){
            console.log("is undefined!");
        } else if (this.button.mouseIsPressed) {
            this.pearWagon.gameState = "play";
        }

        // if (this.button.mousePressed) {
        //     console.log("clicked!")
        //     this.pearWagon.gameState = "play";
        // }
    }
    draw() {
        this.button = createButton("play");
        this.button.position(innerWidth / 2, innerHeight / 2);
        this.button.mousePressed(this.update)
        this.button.size(200, 100)
        console.log("draw:");
        console.log(this.button);
        noLoop();
        
        background(150, 0, 0);
        

    }
    

}


// https://p5js.org/reference/#/p5/createButton

// createButton(label, [value])