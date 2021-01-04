
class PlayScreen {
    private pearWagon: IGameState
    private drops: Drop[]
    // private drop: Drop
    private player: Player

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;
        this.drops = []
        // this.drop = new Drop(random(0, innerWidth), 20, 20);
        for (let i = 0; i < 5; i++){
            this.drops.push(new Drop(random(0, innerWidth), Math.floor(Math.random() * 100) -100, 20, (Math.floor(Math.random() * Math.floor(5)) + 1)));
        }
        
        this.player = new Player
    }

    update() {
        for(let i = 0; i < this.drops.length; i++){
            this.drops[i].move();
            this.drops[i].respawn();
        }
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