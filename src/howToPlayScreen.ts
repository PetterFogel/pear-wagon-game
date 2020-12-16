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
        // clear();
        background(150, 0, 0);
        imageMode(CENTER)
        image(img, innerWidth / 2, innerHeight / 2 -220, 800, 500);
        imageMode(CORNER)
        image(img2, innerWidth / 2 + 200, innerHeight / 2, 300, 400);
        strokeWeight(2);
        line(innerWidth / 2 + 220, innerHeight / 2 -100, innerWidth / 2 + 220, innerHeight / 2 - 35);
        line(innerWidth / 2 + 310, innerHeight / 2 -100, innerWidth / 2 + 310, innerHeight / 2 + 10);
        
        strokeWeight(5);
        line(innerWidth / 2 + 100, innerHeight / 2 + 190, innerWidth / 2 + 260, innerHeight / 2 + 190);
        line(innerWidth / 2 + 100, innerHeight / 2 + 190, innerWidth / 2 + 140, innerHeight / 2 + 150);
        line(innerWidth / 2 + 100, innerHeight / 2 + 190, innerWidth / 2 + 140, innerHeight / 2 + 150);
        strokeWeight(1);
        line(innerWidth / 2 + 400, innerHeight / 2 + 190, innerWidth / 2 + 480, innerHeight / 2 + + 190);
        
        line(innerWidth / 2 + 460, innerHeight / 2 + 210, innerWidth / 2 + 480, innerHeight / 2 + 190);
        line(innerWidth / 2 + 460, innerHeight / 2 + 190, innerWidth / 2 + 480, innerHeight / 2 + 210);
        // line(innerWidth / 2 + 400, innerHeight / 2 + 190, innerWidth / 2 + 480, innerHeight / 2 + + 190);

        textSize(22);
        text('Move left', innerWidth / 2 + 170, innerHeight / 2 - 15)
        fill(220);
        text('Move right', innerWidth / 2 + 260, innerHeight / 2 + 30)
        fill(220);


        // line(1000, 800, 1200, 700);

        // line(900, 400, 50, 50);
        
        // this.menuButton.draw(); 


        
        // textSize(32);
        // text('playnow', 10, 30);
        // fill(0, 102, 153);
        // text('playnow', 10, 60);
        // fill(0, 102, 153, 51);
        // text('playnow', 10, 90);
    }
}