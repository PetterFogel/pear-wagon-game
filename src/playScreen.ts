class PlayScreen {
    private pearWagon: IGameState

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
    }
    update() {
        
        // if (mouseIsPressed) {
        //     this.pearWagon.gameState = "over";
        // }
    }
    draw() {
        push();
        background("blue");
        textSize(32);
        text('playnow', 10, 30);
        fill(0, 102, 153);
        text('playnow', 10, 60);
        fill(0, 102, 153, 51);
        text('playnow', 10, 90);
        pop();

    }
}