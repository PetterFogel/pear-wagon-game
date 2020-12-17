//---- GLOBAL VARIABLES ----//
// let game: Game;
let pearWagon: PearWagon;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    // noCursor();

    // game = new Game();
    pearWagon = new PearWagon();
}

function mousePressed() {
    // pearWagon.buttons = [];
    // pearWagon.buttons.push(pearWagon.startScreen.playButton);
    // pearWagon.buttons.push(pearWagon.startScreen.howToButton);

    // for(let i = 0; i < pearWagon.buttons.length; i++){
    //     if (i === 0){
    //         pearWagon.buttons[i].clicked(pearWagon.startScreen, "play");
    //     } else {
    //         pearWagon.buttons[i].clicked("how");
    //     }
    // }

    switch(pearWagon.gameState) {
        case "start":
            pearWagon.startScreen.clicked();
            break;
        case "over":
            pearWagon.gameOverScreen.clicked();
            break;
        case "play":
            // code
            break;
        case "how":
            // code
            break;
    }
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
   
    pearWagon.update();
    pearWagon.draw();
    // game.update();
    // game.draw();

}
interface IGameState {
    gameState: "start" | "over" | "play" | "how";
}
class PearWagon implements IGameState {
    public startScreen: StartScreen;
    private playScreen: PlayScreen;
    public gameOverScreen: GameOverScreen;
    private howToPlayScreen: HowToPlayScreen;
    

    public gameState: "start" | "over" | "play" | "how";

    constructor() {
        this.startScreen = new StartScreen(this);
        this.playScreen = new PlayScreen(this);
        this.gameOverScreen = new GameOverScreen(this);
        this.howToPlayScreen = new HowToPlayScreen(this);
        this.gameState = "over";
    }

    public update() {
        // console.log(this.gameState);
        switch (this.gameState) {
            case "start": {
                this.startScreen.update();
                break;
            }
            case "play": {
                this.playScreen.update();
                break;
            }
            case "over": {
                this.gameOverScreen.update();
                break;
            }
            case "how": {
                this.howToPlayScreen.update();
                break;
            }
        }
    }

    public draw() {
        switch (this.gameState) {
            case "start": {
                this.startScreen.draw();
                break;
            }
            case "play": {
                this.playScreen.draw();
                break;
            }
            case "over": {
                this.gameOverScreen.draw();
                break;
            }
            case "how": {
                this.howToPlayScreen.draw();
                break;
            }
        }
    }
}





/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}