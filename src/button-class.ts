class Button {
  public x: number
  public y: number
  private w: number
  private h: number
  private color: string
  private hover: boolean;
  //private br: number; //border-radius
  private prevMouseIsPressed: boolean;

  constructor(x: number, y: number, w: number, h: number, color: string) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    this.hover = false;
    this.prevMouseIsPressed = false;
  }
  
  update() {
    if ((mouseX > this.x) && (mouseX < this.x + this.w) &&
      (mouseY > this.y) && (mouseY < this.y + this.h)) {
      this.hover = true;
      
      if (this.prevMouseIsPressed && !mouseIsPressed) {
        return true;
      }

    } else {
      this.hover = false;
    }

    this.prevMouseIsPressed = mouseIsPressed;
    return false;
  }

  draw() {
    push();
    if (this.hover) {
      fill("darkgreen");
    } else {
      fill(this.color);
    }

    rect(this.x, this.y, this.w, this.h, 20);
    pop();
  }
}