
class PlayScreen {
    private pearWagon: IGameState
    private fallingObjects: FallingObject[]
    // private drop: Drop
    private player: Player
    public scoreHp: ScoreHpDisplay
    private spawnRate: number
    private lastSpawn: number
    private ground: number

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.ground = 100;
        this.fallingObjects = []
        this.spawnRate = 200;
        this.lastSpawn = -1;
        
        this.player = new Player
        this.scoreHp = new ScoreHpDisplay(this.pearWagon)
    }

    update() {
        let time = Date.now();
        if (time > (this.lastSpawn + this.spawnRate)){
            this.lastSpawn = time;
            let numb = (Math.floor(Math.random() * Math.floor(99)) + 1)
            if(numb >= 40){
                this.fallingObjects.push(new GreenPear(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70, 50));
            } else if(numb >= 30 && numb <= 39) {
                this.fallingObjects.push(new RottenPear(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70, 50));
            } else if(numb >= 20 && numb <= 29){
                this.fallingObjects.push(new Bomb(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70, 50));
            } else if(numb >= 10 && numb <= 19) {
                this.fallingObjects.push(new Star(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70, 50));
            } else {
                this.fallingObjects.push(new Heart(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70, 50));
            }
        }

        for(let i = 0; i < this.fallingObjects.length; i++){
            this.fallingObjects[i].move();
        }

        // this.drops[i].respawn();
        // this.drop.move();
        // this.drop.respawn();
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
                    console.log(this.scoreHp.points);

                } else if (drop instanceof RottenPear){

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.decreaseHP('rottenPear');

                } else if (drop instanceof Bomb){

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.decreaseHP('bomb');

                } else if (drop instanceof Star){

                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.setDoublePoints();

                } else {
                    this.fallingObjects.splice(index, 1);
                    this.scoreHp.increaseHP();
                }
            }

            if (drop.y > innerHeight + drop.width / 2){
                this.fallingObjects.splice(index, 1);
            }
            
        }

    }

    draw() {
        push();
        background(136, 207, 248);
        // this.drop.draw();
        // this.player.draw();
        
        image(images.cloud1, innerWidth / 100 * 8, 100, 362, 214);
        image(images.cloud2, innerWidth / 100 * 65, 50, 362, 214);

        // imageMode(CENTER);
        // image(images.tree, innerWidth / 2 + 50, innerHeight / 2 - 400, 2000, 2000);
        
        for(let i = 0; i < this.fallingObjects.length; i++){
            this.fallingObjects[i].draw();
        }
        this.player.draw();
        this.scoreHp.draw();

        //Ground
        noStroke();
        fill(27, 133, 30);
        rect(0, innerHeight - this.ground, innerWidth, 400);
        fill(125, 106, 68);
        rect(0, innerHeight - this.ground + 20, innerWidth, 400);
        pop();

    }

}