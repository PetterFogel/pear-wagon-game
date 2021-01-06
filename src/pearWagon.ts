interface IGameState {
    gameState: "start" | "over" | "play" | "how";
}
class PearWagon implements IGameState {
    private startScreen: StartScreen;
    private playScreen: PlayScreen;
    private howToPlayScreen: HowToPlayScreen;
    private gameOverScreen: GameOverScreen;
   
    public gameState: "start" | "over" | "play" | "how";

    constructor() {
        this.startScreen = new StartScreen(this);
        this.playScreen = new PlayScreen(this);
        this.gameOverScreen = new GameOverScreen(this);
        this.howToPlayScreen = new HowToPlayScreen(this);        
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