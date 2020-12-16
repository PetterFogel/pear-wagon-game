class HowToPlayScreen {
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
        clear();
        background(150, 0, 0);
        imageMode(CENTER)
        image(img, innerWidth / 2, innerHeight / 2 -200, 800, 500);
        imageMode(CORNER)
        image(img2, innerWidth / 2, innerHeight / 2, 300, 400);
        
        // this.menuButton.draw(); 


        
        // textSize(32);
        // text('playnow', 10, 30);
        // fill(0, 102, 153);
        // text('playnow', 10, 60);
        // fill(0, 102, 153, 51);
        // text('playnow', 10, 90);
    }
}