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
    gameState: "start" | "over" | "play";
}
class PearWagon implements IGameState {
    private startScreen: StartScreen;
    private playScreen: PlayScreen;
    private gameOverScreen: GameOverScreen;

    public gameState: "start" | "over" | "play";

    constructor() {
        this.startScreen = new StartScreen(this);
        this.playScreen = new PlayScreen(this);
        this.gameOverScreen = new GameOverScreen(this);
        this.gameState = "start";
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
        }
    }
}





/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}