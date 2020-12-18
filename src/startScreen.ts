

class StartScreen {
    private pearWagon: IGameState
    private playButton: Button 
    private howToButton: Button
    private buttons:Button[]
    
    
    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.playButton = new Button(0, 0, 300, 150, "rgb(9, 232, 18)");
        this.howToButton = new Button(0, 0, 300, 150, "rgb(9, 232, 18)");
        this.buttons = [];
        this.buttons.push(this.playButton);
        this.buttons.push(this.howToButton);
    }
    
    update() {          
        // ver.1 
        
        this.playButton.x = innerWidth / 2 - 350;
        this.playButton.y = innerHeight / 2 - 75;

        this.howToButton.x = innerWidth / 2 + 50;
        this.howToButton.y = innerHeight / 2 -75;

        // ver.2 

        // rectMode(CENTER);
        // this.playButton.x = innerWidth / 100 * 30;
        // this.playButton.y = innerHeight / 100 * 50;

        // this.howToButton.x = innerWidth / 100 * 70;
        // this.howToButton.y = innerHeight / 100 * 50;
    }

    draw() {
        background(239, 35, 35);

        // TEST PÄRON
        // noStroke();
        // fill(9, 232, 18)
        // ellipse(200, 180, 100)
        // fill(9, 232, 18)
        // ellipse(225, 190, 100)

        // fill(9, 232, 18)
        // triangle(290, 35, 160, 150, 275, 190)

        // fill(116, 60, 28)
        // triangle(290, 35, 300, 10, 315, 10)

        /* triangle(top, left, right), ellipse(x, y, w) */

        //ver.1 

        stroke(1);
        strokeWeight(1)
        fill(255);
        textStyle("italic")
        textSize(70);
        textFont('Helvetica')
        text("Pear Wagon", innerWidth / 2 - 190, innerHeight / 2 - 200);
        
        
        this.playButton.draw();
        fill(255);
        textSize(40);
        strokeWeight(3);
        text("Let's Play!", this.playButton.x + 50, innerHeight / 2 + 15);
        
        strokeWeight(1);
        this.howToButton.draw();
        fill(255)
        textSize(40)
        strokeWeight(3);
        text("How to play?", this.howToButton.x + 35, innerHeight / 2 + 15);

        noStroke();

        //ver.2

        // stroke(1);
        // strokeWeight(1)
        // fill(255);
        // textStyle("italic")
        // textSize(70);
        // textFont('Helvetica');
        // textAlign(CENTER, CENTER);
        // text("Pear Wagon", innerWidth / 100 * 50, innerHeight / 100 * 20);
        
        
        // this.playButton.draw();
        // fill(255);
        // textSize(40);
        // strokeWeight(3);
        // text("Let's Play!", this.playButton.x, this.playButton.y);
        
        // strokeWeight(1);
        // this.howToButton.draw();
        // fill(255)
        // textSize(40)
        // strokeWeight(3);
        // text("How to play?", this.howToButton.x, this.howToButton.y);

    }

    clicked(){
        for(let i = 0; i < this.buttons.length; i++){
            if (i === 0){
                if ((mouseX > this.buttons[0].x) && (mouseX < this.buttons[0].x + 300) &&
                (mouseY > this.buttons[0].y) && (mouseY < this.buttons[0].y + 150)) {
                  this.pearWagon.gameState = "play";
                }
            } else {
                if ((mouseX > this.buttons[1].x) && (mouseX < this.buttons[1].x + 300) &&
                (mouseY > this.buttons[1].y) && (mouseY < this.buttons[1].y + 150)) {
                pearWagon.gameState = "how";
                }
            }
        }
    }
}

// https://p5js.org/reference/#/p5/createButton

// createButton(label, [value])