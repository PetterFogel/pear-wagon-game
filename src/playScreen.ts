
class PlayScreen {
    private pearWagon: IGameState
    private drops: any[]
    // private drop: Drop
    private player: Player
    private scoreHp: ScoreHpDisplay
    private spawnRate: number
    private lastSpawn: number
    private ground: number

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.ground = 100;
        this.drops = []
        this.spawnRate = 1500;
        this.lastSpawn = -1;
        
        this.player = new Player
        this.scoreHp = new ScoreHpDisplay
    }

    update() {
        let time = Date.now();
        if (time > (this.lastSpawn + this.spawnRate)){
            this.lastSpawn = time;
            let numb = (Math.floor(Math.random() * Math.floor(99)) + 1)
            if(numb >= 40){
                this.drops.push(new GreenPear(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70));
            } else if(numb >= 30 && numb <= 39) {
                this.drops.push(new RottenPear(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70));
            } else if(numb >= 20 && numb <= 29){
                this.drops.push(new Bomb(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70));
            } else if(numb >= 10 && numb <= 19) {
                this.drops.push(new Star(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70));
            } else {
                this.drops.push(new Heart(random(0, innerWidth), 0, (Math.floor(Math.random() * Math.floor(5)) + 2), 70));
            }
        }

        for(let i = 0; i < this.drops.length; i++){
            this.drops[i].move();
        }

        // this.drops[i].respawn();
        // this.drop.move();
        // this.drop.respawn();
        this.player.update();
        this.checkCollision();
    }

    checkCollision() {
        for(let drop of this.drops) {
            const distX = Math.abs(drop.x - this.player.x);
            const distY = Math.abs(drop.y - this.player.y);
        

            if (distX <= (this.player.width/2) && distY <= (this.player.height/2)) {
                if (drop instanceof GreenPear) {
                    console.log("Green pear!")
                    // call function to add points
                    // remove object
                } else if (drop instanceof RottenPear){
                    console.log("Rotten pear!")
                    // call function to remove HP
                    // remove object
                } else if (drop instanceof Bomb){
                    console.log("Bomb!")
                    // call function to remove ALL HP
                    // remove object
                } else if (drop instanceof Star){
                    console.log("Star!")
                    // call function to do double points
                    // remove object
                } else {
                    console.log("heart!")
                    // call function to add HP
                    // remove object
                }
            }

            if (drop.y > innerHeight * 2){
                this.drops.shift();
                console.log(this.drops);
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

        imageMode(CENTER);
        image(images.tree, innerWidth / 2 + 50, innerHeight / 2 - 400, 2000, 2000);
        
        for(let i = 0; i < this.drops.length; i++){
            this.drops[i].draw();
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