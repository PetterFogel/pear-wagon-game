class HowToPlayScreen {
    private pearWagon: IGameState
    private menuButton: Button

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.menuButton = new Button(0, 0, 150, 75, color(9, 232, 18));

    }
    update() {
        // if (mouseIsPressed) {
        //     this.pearWagon.gameState = "over";
        // }
    }
    draw() {
        clear();
        background(239, 35, 35);

        let centerX = innerWidth / 2;
        let centerY = innerHeight / 2;
                
        // this.menuButton.x = centerX - 75
        // this.menuButton.y = centerY - 50

        this.menuButton.x = centerX - 520
        this.menuButton.y = centerY - 270
        
        strokeWeight(1);
        this.menuButton.draw(); 
        
        imageMode(CENTER)
        image(img, centerX + 100, centerY -220, width / 100 * 50);
        imageMode(CORNER)
        image(img2, centerX + 300, centerY, 300, 400);
        
        
        // Keyboard lines
        strokeWeight(2);
        line(centerX + 347, centerY -100, centerX + 347, centerY - 35);
        line(centerX + 449, centerY -100, centerX + 449, centerY + 10);

        // Mouse left
        strokeWeight(2);
        line(centerX + 320, centerY + 190, centerX + 400, centerY + + 190);      
        line(centerX + 335, centerY + 200, centerX + 320, centerY + 190);
        line(centerX + 335, centerY + 180, centerX + 320, centerY + 190);

        // Mouse right
        strokeWeight(2);
        line(centerX + 500, centerY + 190, centerX + 580, centerY + 190);      
        line(centerX + 565, centerY + 200, centerX + 580, centerY + 190);
        line(centerX + 565, centerY + 180, centerX + 580, centerY + 190);
    
        // textSize(width / 100 * 3);
        textSize(22);
        // Keyboard text
        fill(255);
        text('Move left', centerX + 300, centerY - 15)
        fill(255);
        text('Move right', centerX + 400, centerY + 30)
        // Mouse text
        fill(255);
        text('Move left', centerX + 270, centerY + 160)
        fill(255);
        text('Move right', centerX + 535, centerY + 160)
        // Back to start, button-text
        fill(0);
        text('Back to start', centerX - 510, centerY - 225)
        // Circles
        fill('green')
        ellipse(centerX -400, centerY, 50);
        fill('brown')
        ellipse(centerX -400, centerY + 90, 50);
        fill('black')
        ellipse(centerX -400, centerY + 180, 50);
        fill('yellow')
        ellipse(centerX -400, centerY + 270, 50);
        fill('hotpink')
        ellipse(centerX -400, centerY + 360, 50);
        // Object text
        fill(0);
        text('Green Pear = Gives you points', centerX - 350, centerY + 5)
        text('Rotten Pear = Your hp decreases', centerX - 350, centerY + 95)
        text('Bomb = Instant game over', centerX - 350, centerY + 190)
        text('Star = Double points for 5 seconds', centerX - 350, centerY + 275)
        text('Heart = Increases your hp', centerX - 350, centerY + 370)
    }

    clicked(){

        if ((mouseX > this.menuButton.x) && (mouseX < this.menuButton.x + 150) &&
        (mouseY > this.menuButton.y) && (mouseY < this.menuButton.y + 75)) {
          this.pearWagon.gameState = "start";

        }
    }
}