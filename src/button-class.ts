class Button {
    public x: number
    public y: number
    private w: number
    private h: number
    private color: string

    constructor(x: number, y: number, w: number, h: number, color: string) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }
    update() {

    }
    draw() {
        fill(this.color);

    if ((mouseX > this.x) && (mouseX < this.x + 300) &&
        (mouseY > this.y) && (mouseY < this.y + 150)) {
        // mousePressed();
      } else {
        fill(this.color);
      }
      rect(this.x, this.y, this.w, this.h, 20);
    } 
    clicked(gameState: IGameState, stateSwitch: IGameState){
  }
}