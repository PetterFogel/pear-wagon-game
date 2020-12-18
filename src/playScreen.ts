class PlayScreen {
    private pearWagon: IGameState

    private drop: Drop

    constructor(pearWagon: IGameState) {
        this.pearWagon = pearWagon;

        this.drop = new Drop(random(0, innerWidth), 20, 20);

        
    }

    update() {
        this.drop.move();
        this.drop.respawn();
    }

    draw() {
        push();
        background("lightblue");
        this.drop.draw();
        pop();
    }

}