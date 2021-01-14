class PlayScreen {
    private pearWagon: IGameState;
    private fallingObjects: FallingObject[];
    private player: Player;
    public scoreHp: ScoreHpDisplay;
    private spawnRate: number;
    private lastSpawn: number;
    private ground: number;
    private maxSpeed: number;
    private minSpeed: number;
    private bombPhase: boolean;

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.ground = 100;
        this.fallingObjects = [];
        this.spawnRate = 300;
        this.lastSpawn = -1;
        this.maxSpeed = 3;
        this.minSpeed = 2;
        this.bombPhase = false;        
        this.player = new Player;
        this.scoreHp = new ScoreHpDisplay(this.pearWagon);
    }

    update() {
        let time = Date.now();
        if (time > (this.lastSpawn + this.spawnRate)) {
            if (this.spawnRate >= 50) { 
                this.spawnRate -= 0.15; 
            }
            
            this.lastSpawn = time;
            let numb = (Math.floor(Math.random() * Math.floor(99)) + 1);
            
            if (this.maxSpeed <= 6 && this.minSpeed <= 5) {
                this.maxSpeed += 0.03;
                this.minSpeed += 0.01;
            } else {
                this.bombPhase = true;
                this.maxSpeed *= 0.8;
                this.minSpeed *= 0.8;
            }

            if(this.maxSpeed >= 5 || this.minSpeed >= 4) {
                this.bombPhase = false;
            }

            if(this.bombPhase) {
                this.fallingObjects.push(new Bomb(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(this.maxSpeed )) + (this.minSpeed )), 70, 50));
            } else {
                if(numb >= 45){
                    this.fallingObjects.push(new GreenPear(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(this.maxSpeed )) + (this.minSpeed )), 70, 50));
                } else if(numb >= 17 && numb <= 44) {
                    this.fallingObjects.push(new RottenPear(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(this.maxSpeed )) + (this.minSpeed )), 70, 50));
                } else if(numb >= 11 && numb <= 16){
                    this.fallingObjects.push(new Bomb(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(this.maxSpeed )) + (this.minSpeed )), 70, 50));
                } else if(numb >= 5 && numb <= 10) {
                    this.fallingObjects.push(new Star(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(this.maxSpeed )) + (this.minSpeed )), 70, 50));
                } else {
                    this.fallingObjects.push(new Heart(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(this.maxSpeed )) + (this.minSpeed )), 70, 50));
                }
            }
        }
     
        for(let i = 0; i < this.fallingObjects.length; i++) {
            this.fallingObjects[i].move();
        }

        this.player.update();
        this.checkCollision();
        this.scoreHp.update();
    }

    checkCollision() {
        for(let drop of this.fallingObjects) {
            const distX = Math.abs(drop.x - this.player.x);
            const distY = Math.abs(drop.y - this.player.y);
            let index = this.fallingObjects.indexOf(drop);

            if (distX <= (this.player.width / 2 + (drop.width - drop.offset) / 2) && distY <= (this.player.height / 2 + (drop.width - drop.offset) / 2)) {
                if (drop instanceof GreenPear) {

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.addPoints();
                    sounds.greenpear.play();

                } else if (drop instanceof RottenPear) {

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.decreaseHP('rottenPear');
                    sounds.rottenpear.play();                   

                } else if (drop instanceof Bomb) {

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.decreaseHP('bomb');
                    sounds.bomb.play();

                } else if (drop instanceof Star) {

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.setDoublePoints();
                    sounds.star.setVolume(0.2);
                    sounds.star.play();

                } else {

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.increaseHP();
                    sounds.heart.setVolume(0.5);
                    sounds.heart.play();                    

                }
            }

            if (drop.y > innerHeight + drop.width / 2) {
                this.fallingObjects.splice(index, 1);
            }            
        }
    }

    draw() {
        push();
        background(136, 207, 248);

        // Clouds
        imageMode(CENTER);
        image(images.cloud1, innerWidth / 5 , innerHeight / 2.5, 362, 154);
        image(images.cloud2, innerWidth / 1.20 , innerHeight / 2.5, 362, 154);

        // Tree
        image(images.tree, innerWidth / 2, innerHeight / 4, innerWidth / 100 * 120, innerHeight / 100 * 250);
        
        for(let i = 0; i < this.fallingObjects.length; i++) {
            this.fallingObjects[i].draw();
        }

        this.player.draw();
        this.scoreHp.draw();

        // Ground
        noStroke();
        fill(27, 133, 30);
        rect(0, innerHeight - this.ground, innerWidth, 400);
        fill(125, 106, 68);
        rect(0, innerHeight - this.ground + 20, innerWidth, 400);
        pop();
    }
}