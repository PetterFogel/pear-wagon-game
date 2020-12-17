class HowToPlayScreen {
    private pearWagon: IGameState
    private menuButton: Button

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.menuButton = new Button(0, 0, 150, 75, "rgb(9, 232, 18)");

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

        this.menuButton.x = centerX - 450
        this.menuButton.y = centerY - 170
        
        strokeWeight(1);
        this.menuButton.draw(); 
        
        imageMode(CENTER)
        image(img, centerX + 100, centerY -140, 700, 350);
        imageMode(CORNER)
        image(img2, centerX + 300, centerY, 200, 300);
        
        
        // Keyboard lines
        strokeWeight(2);
        line(centerX + 291, centerY -60, centerX + 291, centerY);
        line(centerX + 372, centerY -60, centerX + 372, centerY + 20);

        // Mouse left arrow
        strokeWeight(2);
        line(centerX + 220, centerY + 150, centerX + 350, centerY + 150);      
        line(centerX + 235, centerY + 160, centerX + 220, centerY + 150);
        line(centerX + 235, centerY + 140, centerX + 220, centerY + 150);

        // Mouse right arrow
        strokeWeight(2);
        line(centerX + 450, centerY + 150, centerX + 580, centerY + 150);      
        line(centerX + 565, centerY + 160, centerX + 580, centerY + 150);
        line(centerX + 565, centerY + 140, centerX + 580, centerY + 150);
    
        // textSize(width / 100 * 3);
        textSize(18);
        // Keyboard text
        fill(255);
        text('Move left', centerX + 250, centerY + 15);
        fill(255);
        text('Move right', centerX + 330, centerY + 36);
        // Mouse text
        fill(255);
        text('Move left', centerX + 260, centerY + 120)
        fill(255);
        text('Move right', centerX + 470, centerY + 120)
        // Back to start, button-text
        fill(0);
        text('Back to start', centerX - 425, centerY - 125)
        // Circles
        fill('green')
        ellipse(centerX -400, centerY, 50);
        fill('brown')
        ellipse(centerX -400, centerY + 60, 50);
        fill('black')
        ellipse(centerX -400, centerY + 120, 50);
        fill('yellow')
        ellipse(centerX -400, centerY + 180, 50);
        fill('hotpink')
        ellipse(centerX -400, centerY + 240, 50);
        // Object text
        fill(0);
        text('Green Pear = Gives you points', centerX - 350, centerY + 5)
        text('Rotten Pear = Your hp decreases', centerX - 350, centerY + 65)
        text('Bomb = Instant game over', centerX - 350, centerY + 125)
        text('Star = Double points for 5 seconds', centerX - 350, centerY + 185)
        text('Heart = Increases your hp', centerX - 350, centerY + 245)
    }

    clicked(){

        if ((mouseX > this.menuButton.x) && (mouseX < this.menuButton.x + 150) &&
        (mouseY > this.menuButton.y) && (mouseY < this.menuButton.y + 75)) {
          this.pearWagon.gameState = "start";

        }
    }
}