
class PlayScreen {
    private pearWagon: IGameState

    private drop: Drop
    private player: Player

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;

        this.drop = new Drop(random(0, innerWidth), 20, 20);
        
        this.player = new Player
        
    }

    update() {
        this.drop.move();
        this.drop.respawn();


    }

    draw() {
        push();
        background("lightblue");
        this.drop.draw();
        this.player.draw();
        pop();
    }

}