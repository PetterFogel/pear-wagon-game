interface IGameState {
    setNewGameState: (gamestate: "start" | "over" | "play" | "how") => void;
}
class PearWagon implements IGameState {
    private startScreen: StartScreen;
    private playScreen: PlayScreen;
    private howToPlayScreen: HowToPlayScreen;
    private gameOverScreen: GameOverScreen;
    public isMouseSteering: boolean
   
    public gameState: "start" | "over" | "play" | "how";

    constructor() {
        this.startScreen = new StartScreen(this);
        this.playScreen = new PlayScreen(this);
        this.gameOverScreen = new GameOverScreen(this);
        this.howToPlayScreen = new HowToPlayScreen(this);        
        this.gameState = "start";

        this.isMouseSteering = true;

    }

    public setNewGameState (gamestate: "start" | "over" | "play" | "how") {
        this.gameState = gamestate

        if (gamestate === "start") {
            this.playScreen = new PlayScreen(this);
        }
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
                this.gameOverScreen.update(this.playScreen.scoreHp.points);
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
                this.gameOverScreen.draw(this.playScreen.scoreHp.points);
                break;
            }
            case "how": {
                this.howToPlayScreen.draw();
                break;
            }
        }
    }
}