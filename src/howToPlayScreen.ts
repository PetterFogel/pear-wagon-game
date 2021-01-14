class HowToPlayScreen {
    private pearWagon: IGameState;
    private menuButton: Button;

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.menuButton = new Button(0, 0, 300, 150, "rgb(9, 232, 18)");
    }

    update() {
        const buttonWasClicked = this.menuButton.update();
        if (buttonWasClicked) {
            this.pearWagon.setNewGameState("start");
        }
    }

    draw() {        
        push();
        background(239, 35, 35);

        let centerX = innerWidth / 2;
        let centerY = innerHeight / 2;
                
        this.menuButton.x = centerX - 420;
        this.menuButton.y = centerY - 230;
        
        strokeWeight(1);
        this.menuButton.draw(); 

        imageMode(CENTER);
        image(images.keyboard, centerX + 250, centerY -140, 700, 350);
        imageMode(CORNER);
        image(images.mouse, centerX + 300, centerY, 200, 300);
                
        // Keyboard lines
        strokeWeight(2);
        line(centerX + 441, centerY -60, centerX + 441, centerY);
        line(centerX + 522, centerY -60, centerX + 522, centerY + 20);

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
    
        // Keyboard text
        textSize(18);
        fill(255);
        text('Move left', centerX + 400, centerY + 15);
        fill(255);
        text('Move right', centerX + 480, centerY + 36);

        // Mouse text
        fill(255);
        text('Move left', centerX + 260, centerY + 120);
        fill(255);
        text('Move right', centerX + 470, centerY + 120);

        // Circles
        imageMode(CENTER);
        image(images.greenPear, centerX -390, centerY + 10, 70, 70);
        image(images.rottenPear, centerX -390, centerY + 75, 70, 70);
        image(images.heart, centerX -390, centerY + 140, 70, 70);
        image(images.star, centerX -390, centerY + 205, 70, 70);
        image(images.bomb, centerX -390, centerY + 270, 70, 70);

        // Object text
        fill(0);
        text('Green Pear = Gives you points', centerX - 310, centerY + 15);
        text('Rotten Pear = Your hp decreases', centerX - 310, centerY + 80);
        text('Heart = Increases your hp', centerX - 310, centerY + 146);
        text('Star = Double points for 5 seconds', centerX - 310, centerY + 212);
        text('Bomb = Instant game over', centerX - 310, centerY + 280);

        // Back to start, button-text
        textSize(40);
        strokeWeight(3);
        stroke(1);
        textStyle("italic");
        fill(255);
        text('Back to start', centerX - 390, centerY - 145)
        pop();
    }
}