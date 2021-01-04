
class PlayScreen {
    private pearWagon: IGameState
    private drops: any[]
    // private drop: Drop
    private player: Player
    private spawnRate: number
    private lastSpawn: number

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.drops = []
        this.spawnRate = 500;
        this.lastSpawn = -1;
        
        this.player = new Player
    }

    update() {
        let time = Date.now();
        if (time > (this.lastSpawn + this.spawnRate)){
            this.lastSpawn = time;
            if((Math.floor(Math.random() * Math.floor(5)) + 1) % 2){
                this.drops.push(new greenPear(random(0, innerWidth), 0, 20, (Math.floor(Math.random() * Math.floor(5)) + 1)));
            } else {
                this.drops.push(new rottenPear(random(0, innerWidth), 0, 20, (Math.floor(Math.random() * Math.floor(5)) + 1)));
            }
        }

        for(let i = 0; i < this.drops.length; i++){
            this.drops[i].move();
        }

        // this.drops[i].respawn();
        // this.drop.move();
        // this.drop.respawn();
    }

    draw() {
        push();
        background("lightblue");
        // this.drop.draw();
        // this.player.draw();
        for(let i = 0; i < this.drops.length; i++){
            this.drops[i].draw();
        }
        this.player.draw();
        pop();
    }

}